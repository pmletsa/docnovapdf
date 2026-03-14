import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getJob = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.jobId);
  },
});

export const getUserJobs = query({
  args: { userId: v.id("users"), status: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("jobs")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();
    }
    return await ctx.db
      .query("jobs")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const createJob = mutation({
  args: {
    userId: v.id("users"),
    fileId: v.optional(v.id("files")),
    fileIds: v.optional(v.array(v.id("files"))),
    jobType: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("jobs", {
      ...args,
      status: "pending",
      progress: 0,
      createdAt: Date.now(),
    });
  },
});

export const updateJobProgress = mutation({
  args: {
    jobId: v.id("jobs"),
    progress: v.number(),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const updates: Record<string, unknown> = { progress: args.progress };
    if (args.status) {
      updates.status = args.status;
    }
    await ctx.db.patch(args.jobId, updates);
  },
});

export const completeJob = mutation({
  args: {
    jobId: v.id("jobs"),
    resultFileId: v.optional(v.id("files")),
    error: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const status = args.error ? "failed" : "completed";
    await ctx.db.patch(args.jobId, {
      status,
      progress: args.error ? 0 : 100,
      resultFileId: args.resultFileId,
      error: args.error,
      completedAt: Date.now(),
    });
  },
});

export const addJobLog = mutation({
  args: {
    jobId: v.id("jobs"),
    message: v.string(),
    level: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("jobLogs", {
      jobId: args.jobId,
      message: args.message,
      level: args.level,
      timestamp: Date.now(),
    });
  },
});

export const getJobLogs = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("jobLogs")
      .withIndex("by_job", (q) => q.eq("jobId", args.jobId))
      .collect();
  },
});
