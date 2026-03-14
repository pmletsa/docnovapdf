import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/tools/pdf-to-jpg')({
  component: PdfToJpgPage,
})

function PdfToJpgPage() {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('high')
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleConvert = async () => {
    if (!file) return
    setIsProcessing(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-[22px] lg:py-10">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">PDF to JPG</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 mb-2">PDF to JPG</h1>
            <p className="text-gray-600 text-base">
              Convert PDF pages to high-quality JPG images. Perfect for sharing and presentations.
            </p>
          </div>

          {/* Upload Area */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#fffbfb] rounded-xl border-2 border-dashed border-[#e53935]/30 p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#e53935]/50 transition-all mb-10"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="w-14 h-14 bg-[#e53935] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Drag & Drop your PDF here</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Select a PDF file from your computer to<br />convert to JPG images.
            </p>
            <div className="flex flex-wrap justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Select PDF File
              </button>
              <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg flex items-center gap-2 transition-all text-sm shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google Drive
              </button>
              <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg flex items-center gap-2 transition-all text-sm shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#0061FF" d="M12 2L6 7l6 5-6 5 6 5 6-5-6-5 6-5-6-5z"/>
                </svg>
                Dropbox
              </button>
            </div>
          </div>

          {/* File Display */}
          {file && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold flex items-center gap-2 text-gray-800">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Selected File
                </h3>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[#e53935] text-sm font-semibold hover:underline"
                >
                  Change File
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#fff5f5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e53935]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatBytes(file.size)}</p>
                  </div>
                  <button 
                    onClick={() => setFile(null)}
                    className="p-2 text-gray-300 hover:text-gray-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Quality */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Image Quality</h3>
                <div className="grid grid-cols-3 gap-3">
                  {(['low', 'medium', 'high'] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`p-4 rounded-xl border-2 capitalize transition-all text-sm font-medium ${
                        quality === q 
                          ? 'border-[#e53935] bg-[#ffebee] text-[#e53935]' 
                          : 'border-gray-200 hover:border-[#e53935]/30 text-gray-700 bg-white'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Convert Button */}
              <div className="flex flex-col items-center">
                <button 
                  onClick={handleConvert}
                  disabled={isProcessing}
                  className="bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-3.5 px-10 rounded-full text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Convert to JPG
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {isProcessing && (
                  <div className="w-full max-w-md mt-6">
                    <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-gray-500">Converting...</span>
                      <span className="text-[#e53935]">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{ 
                          width: `${progress}%`,
                          background: 'linear-gradient(90deg, #e53935 0%, #ff8a80 100%)'
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 mb-8 pt-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">Secure & Private</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Files are deleted permanently from our servers after 1 hour.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">Ultra Fast</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Our cloud processing handles large files in milliseconds.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">Any Device</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Works on Windows, Mac, Linux, iOS, and Android seamlessly.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
