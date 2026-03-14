// Worker Listener for DocNova Queue System
// Processes jobs from the queues

import { Worker, Job } from 'bullmq'
import { REDIS_CONFIG, QUEUE_NAMES } from './config'

// PDF Processing Worker
const pdfWorker = new Worker(
  QUEUE_NAMES.PDF_PROCESSING,
  async (job: Job) => {
    console.log(`Processing PDF job: ${job.name}`, job.data)
    
    const { jobId, fileIds, options } = job.data
    
    // Call the appropriate service endpoint
    const serviceUrl = process.env.PDF_ENGINE_URL || 'http://localhost:8001'
    
    try {
      const response = await fetch(`${serviceUrl}/${job.name}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_urls: fileIds, ...options }),
      })
      
      if (!response.ok) {
        throw new Error(`Service error: ${response.statusText}`)
      }
      
      const result = await response.json()
      await job.updateProgress(100)
      
      return result
    } catch (error) {
      console.error(`PDF job failed:`, error)
      throw error
    }
  },
  { connection: REDIS_CONFIG }
)

// Conversion Worker
const conversionWorker = new Worker(
  QUEUE_NAMES.CONVERSION,
  async (job: Job) => {
    console.log(`Processing conversion job: ${job.name}`, job.data)
    
    const serviceUrl = process.env.CONVERSION_ENGINE_URL || 'http://localhost:8002'
    
    try {
      const response = await fetch(`${serviceUrl}/${job.name}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job.data),
      })
      
      if (!response.ok) {
        throw new Error(`Service error: ${response.statusText}`)
      }
      
      const result = await response.json()
      await job.updateProgress(100)
      
      return result
    } catch (error) {
      console.error(`Conversion job failed:`, error)
      throw error
    }
  },
  { connection: REDIS_CONFIG }
)

// OCR Worker
const ocrWorker = new Worker(
  QUEUE_NAMES.OCR,
  async (job: Job) => {
    console.log(`Processing OCR job`, job.data)
    
    const serviceUrl = process.env.OCR_ENGINE_URL || 'http://localhost:8003'
    
    try {
      const response = await fetch(`${serviceUrl}/ocr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job.data),
      })
      
      if (!response.ok) {
        throw new Error(`Service error: ${response.statusText}`)
      }
      
      const result = await response.json()
      await job.updateProgress(100)
      
      return result
    } catch (error) {
      console.error(`OCR job failed:`, error)
      throw error
    }
  },
  { connection: REDIS_CONFIG }
)

// AI Worker
const aiWorker = new Worker(
  QUEUE_NAMES.AI,
  async (job: Job) => {
    console.log(`Processing AI job: ${job.name}`, job.data)
    
    const serviceUrl = process.env.AI_ENGINE_URL || 'http://localhost:8004'
    
    try {
      const response = await fetch(`${serviceUrl}/${job.name}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job.data),
      })
      
      if (!response.ok) {
        throw new Error(`Service error: ${response.statusText}`)
      }
      
      const result = await response.json()
      await job.updateProgress(100)
      
      return result
    } catch (error) {
      console.error(`AI job failed:`, error)
      throw error
    }
  },
  { connection: REDIS_CONFIG }
)

// Event handlers
const workers = [pdfWorker, conversionWorker, ocrWorker, aiWorker]

workers.forEach((worker) => {
  worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed`)
  })

  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err.message)
  })
})

console.log('Queue workers started...')
