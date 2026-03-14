// Shared types for DocNova

// User types
export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  role: 'user' | 'admin'
  planId?: string
  createdAt: number
}

// File types
export interface DocFile {
  id: string
  userId: string
  filename: string
  originalName: string
  storageUrl?: string
  fileType: string
  size: number
  pages?: number
  folderId?: string
  status: FileStatus
  createdAt: number
}

export type FileStatus = 'uploading' | 'ready' | 'processing' | 'error'

// Job types
export interface Job {
  id: string
  userId: string
  fileId?: string
  fileIds?: string[]
  jobType: JobType
  status: JobStatus
  progress: number
  resultFileId?: string
  error?: string
  createdAt: number
  completedAt?: number
}

export type JobType =
  | 'merge_pdf'
  | 'split_pdf'
  | 'compress_pdf'
  | 'rotate_pdf'
  | 'pdf_to_word'
  | 'word_to_pdf'
  | 'pdf_to_jpg'
  | 'jpg_to_pdf'
  | 'pdf_to_excel'
  | 'pdf_to_pptx'
  | 'ocr_pdf'
  | 'ai_summarize'
  | 'ai_chat'
  | 'ai_extract'

export type JobStatus = 'pending' | 'processing' | 'completed' | 'failed'

// Workflow types
export interface Workflow {
  id: string
  userId: string
  name: string
  description?: string
  trigger: WorkflowTrigger
  active: boolean
  createdAt: number
}

export type WorkflowTrigger = 'manual' | 'file_uploaded' | 'scheduled'

export interface WorkflowStep {
  id: string
  workflowId: string
  stepOrder: number
  action: string
  config?: Record<string, unknown>
}

// AI types
export interface AiRequest {
  id: string
  userId: string
  fileId?: string
  type: AiRequestType
  prompt?: string
  tokensUsed?: number
  result?: string
  status: JobStatus
  createdAt: number
}

export type AiRequestType = 'summary' | 'chat' | 'extract' | 'translate'

// API types
export interface ApiKey {
  id: string
  userId: string
  key: string
  name: string
  active: boolean
  lastUsedAt?: number
  createdAt: number
}

// Subscription types
export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  interval: 'monthly' | 'yearly'
  maxFileSize: number
  dailyJobs: number
  aiCredits: number
  features: string[]
  active: boolean
}

export interface UserSubscription {
  id: string
  userId: string
  planId: string
  status: SubscriptionStatus
  stripeSubscriptionId?: string
  currentPeriodStart: number
  currentPeriodEnd: number
  createdAt: number
}

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due'

// Activity types
export interface ActivityLog {
  id: string
  userId: string
  action: ActivityAction
  resourceType?: string
  resourceId?: string
  metadata?: Record<string, unknown>
  timestamp: number
}

export type ActivityAction =
  | 'file_uploaded'
  | 'file_converted'
  | 'file_deleted'
  | 'workflow_run'
  | 'ai_summary'
  | 'ai_chat'
  | 'api_call'

// Folder types
export interface Folder {
  id: string
  userId: string
  name: string
  parentFolderId?: string
  createdAt: number
}

// Tag types
export interface FileTag {
  id: string
  userId: string
  tagName: string
  color?: string
}
