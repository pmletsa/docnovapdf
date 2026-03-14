import { GetObjectCommand } from '@aws-sdk/client-s3'
import { createStorageClient, StorageClient } from './client'
import { createWriteStream } from 'fs'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'

export async function downloadFile(
  key: string,
  destinationPath: string,
  client?: StorageClient
): Promise<string> {
  const storage = client || createStorageClient()

  const command = new GetObjectCommand({
    Bucket: storage.bucket,
    Key: key,
  })

  const response = await storage.client.send(command)
  const body = response.Body as Readable

  const writeStream = createWriteStream(destinationPath)
  await pipeline(body, writeStream)

  return destinationPath
}

export async function getFileStream(
  key: string,
  client?: StorageClient
): Promise<Readable> {
  const storage = client || createStorageClient()

  const command = new GetObjectCommand({
    Bucket: storage.bucket,
    Key: key,
  })

  const response = await storage.client.send(command)
  return response.Body as Readable
}

export async function getFileBuffer(
  key: string,
  client?: StorageClient
): Promise<Buffer> {
  const storage = client || createStorageClient()

  const command = new GetObjectCommand({
    Bucket: storage.bucket,
    Key: key,
  })

  const response = await storage.client.send(command)
  const body = response.Body as Readable

  const chunks: Buffer[] = []
  for await (const chunk of body) {
    chunks.push(Buffer.from(chunk))
  }

  return Buffer.concat(chunks)
}
