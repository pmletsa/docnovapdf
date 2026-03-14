// Job Producer for DocNova Queue System
// Adds jobs to the processing queues

import { Queue } from 'bullmq'
import { REDIS_CONFIG, QUEUE_NAMES, JOB_OPTIONS } from './config'

// Initialize queues
const pdfQueue = new Queue(QUEUE_NAMES.PDF_PROCESSING, { connection: REDIS_CONFIG })
const conversionQueue = new Queue(QUEUE_NAMES.CONVERSION, { connection: REDIS_CONFIG })
const ocrQueue = new Queue(QUEUE_NAMES.OCR, { connection: REDIS_CONFIG })
const aiQueue = new Queue(QUEUE_NAMES.AI, { connection: REDIS_CONFIG })

export interface JobData {
  jobId: string
  userId: string
  fileIds: string[]
  options?: Record<string, unknown>
}

export async function addPdfJob(
  type: 'merge' | 'split' | 'compress' | 'rotate',
  data: JobData
) {
  return await pdfQueue.add(type, data, JOB_OPTIONS)
}

export async function addConversionJob(
  type: 'pdf-to-word' | 'word-to-pdf' | 'pdf-to-jpg' | 'jpg-to-pdf',
  data: JobData
) {
  return await conversionQueue.add(type, data, JOB_OPTIONS)
}

export async function addOcrJob(data: JobData) {
  return await ocrQueue.add('ocr', data, JOB_OPTIONS)
}

export async function addAiJob(
  type: 'summarize' | 'chat' | 'extract',
  data: JobData & { prompt?: string }
) {
  return await aiQueue.add(type, data, JOB_OPTIONS)
}

export async function getJobStatus(queueName: string, jobId: string) {
  const queues: Record<string, Queue> = {
    [QUEUE_NAMES.PDF_PROCESSING]: pdfQueue,
    [QUEUE_NAMES.CONVERSION]: conversionQueue,
    [QUEUE_NAMES.OCR]: ocrQueue,
    [QUEUE_NAMES.AI]: aiQueue,
  }

  const queue = queues[queueName]
  if (!queue) return null

  const job = await queue.getJob(jobId)
  if (!job) return null

  const state = await job.getState()
  const progress = job.progress

  return {
    id: job.id,
    state,
    progress,
    data: job.data,
    returnvalue: job.returnvalue,
    failedReason: job.failedReason,
  }
}
