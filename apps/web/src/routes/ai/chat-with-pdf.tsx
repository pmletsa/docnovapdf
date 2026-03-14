import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'
import { FileUploader } from '~/components/FileUploader'

export const Route = createFileRoute('/ai/chat-with-pdf')({
  component: ChatWithPdfPage,
})

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function ChatWithPdfPage() {
  const [file, setFile] = useState<File | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      setMessages([{
        role: 'assistant',
        content: `I've loaded "${files[0].name}". What would you like to know about this document?`
      }])
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // TODO: Implement AI chat with Convex
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'This is a placeholder response. AI integration coming soon!'
      }])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="bg-gradient-to-br from-primary-light/30 via-transparent to-transparent py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light/50 rounded-full mb-4">
              <SparkleIcon className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">AI Powered</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-accent">Chat with PDF</h1>
            <p className="mt-2 text-accent/70 max-w-xl mx-auto">
              Ask questions about your document and get instant AI-powered answers.
            </p>
          </div>
        </section>

        <section className="flex-1 py-6">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
            {!file ? (
              <FileUploader accept=".pdf" multiple={false} onFilesSelected={handleFilesSelected} />
            ) : (
              <div className="flex-1 flex flex-col bg-neutral/30 rounded-2xl border border-neutral overflow-hidden">
                {/* File header */}
                <div className="flex items-center gap-3 p-4 border-b border-neutral bg-background">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <FileIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-accent truncate">{file.name}</p>
                    <p className="text-xs text-accent/60">{formatBytes(file.size)}</p>
                  </div>
                  <button onClick={() => { setFile(null); setMessages([]) }} className="text-accent/50 hover:text-red-500 text-sm">
                    Change file
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-br-md' 
                          : 'bg-background border border-neutral rounded-bl-md'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-background border border-neutral p-4 rounded-2xl rounded-bl-md">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" />
                          <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-neutral bg-background">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask a question about your document..."
                      className="flex-1 px-4 py-3 border border-neutral rounded-xl bg-background text-accent placeholder:text-accent/40 focus:border-primary focus:outline-none"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
