import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { DashboardLayout } from '~/components/DashboardLayout'

export const Route = createFileRoute('/document/$fileId')({
  component: DocumentPage,
})

function DocumentPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const file = {
    name: 'Q4_Financial_Report.pdf',
    size: '2.4 MB',
    pages: 24,
    uploadDate: 'Oct 15, 2023',
    type: 'pdf'
  }

  const tools = [
    { id: 'compress', name: 'Compress', icon: 'compress', description: 'Reduce file size' },
    { id: 'merge', name: 'Merge', icon: 'merge', description: 'Combine with other PDFs' },
    { id: 'split', name: 'Split', icon: 'split', description: 'Extract pages' },
    { id: 'convert', name: 'Convert', icon: 'convert', description: 'To Word, JPG, etc.' },
    { id: 'ocr', name: 'OCR', icon: 'ocr', description: 'Extract text' },
    { id: 'ai-summary', name: 'AI Summary', icon: 'ai', description: 'Generate summary', badge: 'AI' },
    { id: 'ai-chat', name: 'AI Chat', icon: 'chat', description: 'Ask questions', badge: 'AI' },
    { id: 'extract', name: 'Extract Data', icon: 'extract', description: 'Smart extraction', badge: 'AI' },
  ]

  return (
    <DashboardLayout>
      <div className="flex h-full">
        {/* Main Content - Document Preview */}
        <div className="flex-1 flex flex-col bg-[#f8f9fb]">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-gray-900">{file.name}</h1>
              {selectedTool && (
                <span className="px-3 py-1 bg-[#ffebee] text-[#e53935] text-sm font-medium rounded-full">
                  {tools.find(t => t.id === selectedTool)?.name} Selected
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Document Viewer */}
          <div className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[1, 2, 3].map((page) => (
                  <div key={page} className="bg-white rounded-lg shadow-sm p-12 relative">
                    <div className="absolute top-4 right-4 text-xs text-gray-400">Page {page}</div>
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                      <div className="mt-8 h-32 bg-gray-50 rounded"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Tools */}
        <div className="w-80 bg-white border-l border-gray-100 flex flex-col">
          {/* File Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">{file.size} • {file.pages} pages</p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex-1 overflow-y-auto p-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Available Tools</h3>
            <div className="space-y-2">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-full p-3 rounded-xl text-left transition-all group relative ${
                    selectedTool === tool.id
                      ? 'bg-[#ffebee] border-2 border-[#e53935]'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  {tool.badge && (
                    <span className="absolute top-2 right-2 bg-[#e53935] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <ToolIcon icon={tool.icon} active={selectedTool === tool.id} />
                    <div>
                      <p className={`font-medium text-sm ${selectedTool === tool.id ? 'text-[#e53935]' : 'text-gray-900'}`}>
                        {tool.name}
                      </p>
                      <p className="text-xs text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {selectedTool && (
            <div className="p-4 border-t border-gray-100">
              <button className="w-full mb-2 px-4 py-2.5 bg-[#e53935] text-white rounded-lg font-medium hover:bg-[#d32f2f] transition-colors">
                Apply {tools.find(t => t.id === selectedTool)?.name}
              </button>
              <button 
                onClick={() => setSelectedTool(null)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

function ToolIcon({ icon, active }: { icon: string; active?: boolean }) {
  const color = active ? 'text-[#e53935]' : 'text-gray-500'
  
  switch (icon) {
    case 'compress':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    case 'merge':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    case 'split':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12m-12 5h12M4 7h.01M4 12h.01M4 17h.01" />
        </svg>
      )
    case 'convert':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    case 'ocr':
    case 'extract':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'ai':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'chat':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    default:
      return null
  }
}
