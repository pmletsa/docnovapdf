import { PutObjectCommand } from '@aws-sdk/client-s3'
import { createStorageClient, StorageClient } from './client'
import { createReadStream } from 'fs'
import { Readable } from 'stream'

export interface UploadOptions {
  contentType?: string
  metadata?: Record<string, string>
  acl?: 'private' | 'public-read'
}

export async function uploadFile(
  filePath: string,
  key: string,
  options: UploadOptions = {},
  client?: StorageClient
): Promise<string> {
  const storage = client || createStorageClient()
  const fileStream = createReadStream(filePath)

  const command = new PutObjectCommand({
    Bucket: storage.bucket,
    Key: key,
    Body: fileStream,
    ContentType: options.contentType || 'application/octet-stream',
    Metadata: options.metadata,
    ACL: options.acl,
  })

  await storage.client.send(command)
  return key
}

export async function uploadFileFromBuffer(
  buffer: Buffer,
  key: string,
  options: UploadOptions = {},
  client?: StorageClient
): Promise<string> {
  const storage = client || createStorageClient()

  const command = new PutObjectCommand({
    Bucket: storage.bucket,
    Key: key,
    Body: buffer,
    ContentType: options.contentType || 'application/octet-stream',
    Metadata: options.metadata,
    ACL: options.acl,
  })

  await storage.client.send(command)
  return key
}

export async function uploadFileFromStream(
  stream: Readable,
  key: string,
  options: UploadOptions = {},
  client?: StorageClient
): Promise<string> {
  const storage = client || createStorageClient()

  const command = new PutObjectCommand({
    Bucket: storage.bucket,
    Key: key,
    Body: stream,
    ContentType: options.contentType || 'application/octet-stream',
    Metadata: options.metadata,
    ACL: options.acl,
  })

  await storage.client.send(command)
  return key
}
