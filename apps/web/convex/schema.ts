import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 1. Users - account information
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    avatar: v.optional(v.string()),
    role: v.optional(v.string()), // "user" | "admin"
    planId: v.optional(v.string()),
    createdAt: v.optional(v.number()),
  }).index("by_email", ["email"]),

  // 2. Files - uploaded documents
  files: defineTable({
    userId: v.id("users"),
    filename: v.string(),
    originalName: v.string(),
    storageId: v.optional(v.id("_storage")),
    storageUrl: v.optional(v.string()),
    fileType: v.string(),
    size: v.number(),
    pages: v.optional(v.number()),
    folderId: v.optional(v.id("folders")),
    status: v.string(), // "uploading" | "ready" | "processing" | "error"
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_folder", ["folderId"])
    .index("by_status", ["status"]),

  // 3. Jobs - document processing tasks
  jobs: defineTable({
    userId: v.id("users"),
    fileId: v.optional(v.id("files")),
    fileIds: v.optional(v.array(v.id("files"))),
    jobType: v.string(), // "merge_pdf" | "split_pdf" | "compress_pdf" | "pdf_to_word" | etc.
    status: v.string(), // "pending" | "processing" | "completed" | "failed"
    progress: v.number(),
    resultFileId: v.optional(v.id("files")),
    error: v.optional(v.string()),
    createdAt: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_type", ["jobType"]),

  // 4. Job Logs - processing logs for debugging
  jobLogs: defineTable({
    jobId: v.id("jobs"),
    message: v.string(),
    level: v.string(), // "info" | "warning" | "error"
    timestamp: v.number(),
  }).index("by_job", ["jobId"]),

  // 5. AI Requests - tracks AI usage
  aiRequests: defineTable({
    userId: v.id("users"),
    fileId: v.optional(v.id("files")),
    type: v.string(), // "summary" | "chat" | "extract" | "translate"
    prompt: v.optional(v.string()),
    tokensUsed: v.optional(v.number()),
    result: v.optional(v.string()),
    status: v.string(), // "pending" | "processing" | "completed" | "failed"
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_type", ["type"]),

  // 6. Workflows - user automation workflows
  workflows: defineTable({
    userId: v.id("users"),
    name: v.string(),
    description: v.optional(v.string()),
    trigger: v.string(), // "manual" | "file_uploaded" | "scheduled"
    active: v.boolean(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // 7. Workflow Steps - defines the automation pipeline
  workflowSteps: defineTable({
    workflowId: v.id("workflows"),
    stepOrder: v.number(),
    action: v.string(), // "ocr" | "compress" | "convert" | "extract_data" | etc.
    config: v.optional(v.any()),
  }).index("by_workflow", ["workflowId"]),

  // 8. Folders - organizes user files
  folders: defineTable({
    userId: v.id("users"),
    name: v.string(),
    parentFolderId: v.optional(v.id("folders")),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_parent", ["parentFolderId"]),

  // 9. File Tags - user tagging system
  fileTags: defineTable({
    userId: v.id("users"),
    tagName: v.string(),
    color: v.optional(v.string()),
  }).index("by_user", ["userId"]),

  // 10. File Tag Relations - links tags to files
  fileTagRelations: defineTable({
    fileId: v.id("files"),
    tagId: v.id("fileTags"),
  })
    .index("by_file", ["fileId"])
    .index("by_tag", ["tagId"]),

  // 11. API Keys - for developer access
  apiKeys: defineTable({
    userId: v.id("users"),
    key: v.string(),
    name: v.string(),
    active: v.boolean(),
    lastUsedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_key", ["key"]),

  // 12. API Usage - tracks API calls
  apiUsage: defineTable({
    apiKeyId: v.id("apiKeys"),
    endpoint: v.string(),
    requestCount: v.number(),
    timestamp: v.number(),
  }).index("by_api_key", ["apiKeyId"]),

  // 13. Subscription Plans - defines plans
  subscriptionPlans: defineTable({
    name: v.string(),
    price: v.number(),
    interval: v.string(), // "monthly" | "yearly"
    maxFileSize: v.number(), // in bytes
    dailyJobs: v.number(),
    aiCredits: v.number(),
    features: v.array(v.string()),
    active: v.boolean(),
  }),

  // 14. User Subscriptions - links users to plans
  userSubscriptions: defineTable({
    userId: v.id("users"),
    planId: v.id("subscriptionPlans"),
    status: v.string(), // "active" | "canceled" | "past_due"
    stripeSubscriptionId: v.optional(v.string()),
    currentPeriodStart: v.number(),
    currentPeriodEnd: v.number(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"]),

  // 15. Activity Logs - tracks user activity
  activityLogs: defineTable({
    userId: v.id("users"),
    action: v.string(), // "file_uploaded" | "file_converted" | "workflow_run" | "ai_summary"
    resourceType: v.optional(v.string()), // "file" | "job" | "workflow"
    resourceId: v.optional(v.string()),
    metadata: v.optional(v.any()),
    timestamp: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_action", ["action"]),
});
