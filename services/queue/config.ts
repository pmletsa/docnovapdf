// Queue configuration for DocNova
// Uses Redis + BullMQ for job processing

export const REDIS_CONFIG = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
}

export const QUEUE_NAMES = {
  PDF_PROCESSING: 'pdf-processing',
  CONVERSION: 'conversion',
  OCR: 'ocr',
  AI: 'ai',
} as const

export const JOB_OPTIONS = {
  attempts: 3,
  backoff: {
    type: 'exponential' as const,
    delay: 1000,
  },
  removeOnComplete: {
    age: 3600, // 1 hour
    count: 100,
  },
  removeOnFail: {
    age: 86400, // 24 hours
  },
}
