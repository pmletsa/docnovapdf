import { S3Client } from '@aws-sdk/client-s3'

export interface StorageConfig {
  region: string
  endpoint?: string
  accessKeyId: string
  secretAccessKey: string
  bucket: string
}

export class StorageClient {
  public client: S3Client
  public bucket: string

  constructor(config: StorageConfig) {
    this.client = new S3Client({
      region: config.region,
      endpoint: config.endpoint,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    })
    this.bucket = config.bucket
  }
}

export function createStorageClient(config?: Partial<StorageConfig>): StorageClient {
  const fullConfig: StorageConfig = {
    region: config?.region || process.env.STORAGE_REGION || 'auto',
    endpoint: config?.endpoint || process.env.STORAGE_ENDPOINT,
    accessKeyId: config?.accessKeyId || process.env.STORAGE_ACCESS_KEY_ID || '',
    secretAccessKey: config?.secretAccessKey || process.env.STORAGE_SECRET_ACCESS_KEY || '',
    bucket: config?.bucket || process.env.STORAGE_BUCKET || 'docnova',
  }

  return new StorageClient(fullConfig)
}
