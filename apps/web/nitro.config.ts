import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  preset: 'vercel',
  srcDir: 'server',
  output: {
    dir: '.output',
    serverDir: '.output/server',
    publicDir: '.output/public',
  },
})
