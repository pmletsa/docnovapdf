import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'
import { FileUploader } from '~/components/FileUploader'

export const Route = createFileRoute('/ai/summarize-pdf')({
  component: SummarizePdfPage,
})

function SummarizePdfPage() {
  const [file, setFile] = useState<File | null>(null)
  const [summaryLength, setSummaryLength] = useState<'brief' | 'detailed'>('detailed')
  const [isProcessing, setIsProcessing] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      setSummary(null)
    }
  }

  const handleSummarize = async () => {
    if (!file) return
    setIsProcessing(true)
    // TODO: Implement AI summarization with Convex
    setTimeout(() => {
      setSummary('This is a placeholder summary. The AI summarization feature will analyze your document and provide key insights, main points, and a comprehensive overview of the content. This feature is coming soon!')
      setIsProcessing(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-light/30 via-transparent to-transparent py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light/50 rounded-full mb-4">
              <SparkleIcon className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">AI Powered</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-accent">Summarize PDF</h1>
            <p className="mt-4 text-lg text-accent/70 max-w-2xl mx-auto">
              Get instant AI-powered summaries of your documents. Extract key insights in seconds.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {!file ? (
              <FileUploader accept=".pdf" multiple={false} onFilesSelected={handleFilesSelected} />
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-neutral/50 rounded-xl border border-neutral">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <FileIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-accent">{file.name}</p>
                    <p className="text-sm text-accent/60">{formatBytes(file.size)}</p>
                  </div>
                  <button onClick={() => { setFile(null); setSummary(null) }} className="p-2 text-accent/50 hover:text-red-500">
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                {!summary && (
                  <>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-accent">Summary Length</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSummaryLength('brief')}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${summaryLength === 'brief' ? 'border-primary bg-primary-light/20' : 'border-neutral hover:border-primary/30'}`}
                        >
                          <span className="font-medium text-accent">Brief</span>
                          <p className="text-sm text-accent/60 mt-1">Quick overview, key points only</p>
                        </button>
                        <button
                          onClick={() => setSummaryLength('detailed')}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${summaryLength === 'detailed' ? 'border-primary bg-primary-light/20' : 'border-neutral hover:border-primary/30'}`}
                        >
                          <span className="font-medium text-accent">Detailed</span>
                          <p className="text-sm text-accent/60 mt-1">Comprehensive analysis</p>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={handleSummarize}
                        disabled={isProcessing}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <>
                            <SpinnerIcon className="w-5 h-5 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <SparkleIcon className="w-5 h-5" />
                            Generate Summary
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}

                {summary && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-accent">Summary</h3>
                    <div className="p-6 bg-neutral/50 rounded-xl border border-neutral">
                      <p className="text-accent/80 leading-relaxed">{summary}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigator.clipboard.writeText(summary)}
                        className="px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm"
                      >
                        Copy to Clipboard
                      </button>
                      <button
                        onClick={() => setSummary(null)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
                      >
                        Regenerate
                      </button>
                    </div>
                  </div>
                )}
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

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
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
