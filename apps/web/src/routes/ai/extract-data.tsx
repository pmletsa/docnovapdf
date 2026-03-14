import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'
import { FileUploader } from '~/components/FileUploader'

export const Route = createFileRoute('/ai/extract-data')({
  component: ExtractDataPage,
})

function ExtractDataPage() {
  const [file, setFile] = useState<File | null>(null)
  const [extractType, setExtractType] = useState<'invoice' | 'table' | 'custom'>('invoice')
  const [isProcessing, setIsProcessing] = useState(false)
  const [extractedData, setExtractedData] = useState<Record<string, string> | null>(null)

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      setExtractedData(null)
    }
  }

  const handleExtract = async () => {
    if (!file) return
    setIsProcessing(true)
    // TODO: Implement AI data extraction with Convex
    setTimeout(() => {
      setExtractedData({
        'Invoice Number': 'INV-2024-001',
        'Date': 'March 14, 2026',
        'Company': 'Acme Corporation',
        'Total Amount': '$1,234.56',
        'Due Date': 'April 14, 2026',
      })
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
            <h1 className="text-3xl sm:text-4xl font-bold text-accent">Extract Data</h1>
            <p className="mt-4 text-lg text-accent/70 max-w-2xl mx-auto">
              Automatically extract structured data from invoices, tables, and documents using AI.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {!file ? (
              <FileUploader accept=".pdf,.jpg,.jpeg,.png" multiple={false} onFilesSelected={handleFilesSelected} />
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
                  <button onClick={() => { setFile(null); setExtractedData(null) }} className="p-2 text-accent/50 hover:text-red-500">
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                {!extractedData && (
                  <>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-accent">Extraction Type</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'invoice', label: 'Invoice', desc: 'Extract invoice fields' },
                          { id: 'table', label: 'Tables', desc: 'Extract table data' },
                          { id: 'custom', label: 'Custom', desc: 'Define your fields' },
                        ].map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setExtractType(type.id as typeof extractType)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${extractType === type.id ? 'border-primary bg-primary-light/20' : 'border-neutral hover:border-primary/30'}`}
                          >
                            <span className="font-medium text-accent text-sm">{type.label}</span>
                            <p className="text-xs text-accent/60 mt-1">{type.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={handleExtract}
                        disabled={isProcessing}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isProcessing ? 'Extracting...' : 'Extract Data'}
                      </button>
                    </div>
                  </>
                )}

                {extractedData && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-accent">Extracted Data</h3>
                    <div className="bg-neutral/50 rounded-xl border border-neutral overflow-hidden">
                      <table className="w-full">
                        <tbody>
                          {Object.entries(extractedData).map(([key, value], i) => (
                            <tr key={key} className={i > 0 ? 'border-t border-neutral' : ''}>
                              <td className="px-4 py-3 text-sm font-medium text-accent/70 bg-neutral/30 w-1/3">{key}</td>
                              <td className="px-4 py-3 text-sm text-accent">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm">
                        Export as JSON
                      </button>
                      <button className="px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm">
                        Export as CSV
                      </button>
                      <button
                        onClick={() => setExtractedData(null)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
                      >
                        Re-extract
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

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
