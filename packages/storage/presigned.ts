import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { createStorageClient, StorageClient } from './client'

export interface PresignedUrlOptions {
  expiresIn?: number // seconds, default 3600 (1 hour)
  contentType?: string
}

export async function generatePresignedUrl(
  key: string,
  options: PresignedUrlOptions = {},
  client?: StorageClient
): Promise<string> {
  const storage = client || createStorageClient()
  const expiresIn = options.expiresIn || 3600

  const command = new GetObjectCommand({
    Bucket: storage.bucket,
    Key: key,
  })

  return await getSignedUrl(storage.client, command, { expiresIn })
}

export async function generateUploadUrl(
  key: string,
  options: PresignedUrlOptions = {},
  client?: StorageClient
): Promise<{ url: string; key: string }> {
  const storage = client || createStorageClient()
  const expiresIn = options.expiresIn || 3600

  const command = new PutObjectCommand({
    Bucket: storage.bucket,
    Key: key,
    ContentType: options.contentType || 'application/octet-stream',
  })

  const url = await getSignedUrl(storage.client, command, { expiresIn })

  return { url, key }
}

export async function generateMultiplePresignedUrls(
  keys: string[],
  options: PresignedUrlOptions = {},
  client?: StorageClient
): Promise<Record<string, string>> {
  const storage = client || createStorageClient()
  const urls: Record<string, string> = {}

  await Promise.all(
    keys.map(async (key) => {
      urls[key] = await generatePresignedUrl(key, options, storage)
    })
  )

  return urls
}
