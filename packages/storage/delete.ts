import { DeleteObjectCommand, DeleteObjectsCommand } from '@aws-sdk/client-s3'
import { createStorageClient, StorageClient } from './client'

export async function deleteFile(
  key: string,
  client?: StorageClient
): Promise<void> {
  const storage = client || createStorageClient()

  const command = new DeleteObjectCommand({
    Bucket: storage.bucket,
    Key: key,
  })

  await storage.client.send(command)
}

export async function deleteFiles(
  keys: string[],
  client?: StorageClient
): Promise<void> {
  if (keys.length === 0) return

  const storage = client || createStorageClient()

  // S3 allows max 1000 objects per delete request
  const batches = []
  for (let i = 0; i < keys.length; i += 1000) {
    batches.push(keys.slice(i, i + 1000))
  }

  for (const batch of batches) {
    const command = new DeleteObjectsCommand({
      Bucket: storage.bucket,
      Delete: {
        Objects: batch.map((key) => ({ Key: key })),
      },
    })

    await storage.client.send(command)
  }
}
