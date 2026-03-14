import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/automation-builder')({
  component: AutomationBuilderPage,
})

const workflowBlocks = [
  { id: 'upload', name: 'Upload Document', description: 'PDF, PNG, JPG', icon: 'upload', color: 'bg-[#e53935]' },
  { id: 'ocr', name: 'OCR', description: 'Text Recognition', icon: 'ocr', color: 'bg-white' },
  { id: 'extract', name: 'Extract Data', description: 'Entity extraction', icon: 'extract', color: 'bg-white' },
  { id: 'excel', name: 'Convert to Excel', description: 'Tabular formatting', icon: 'excel', color: 'bg-white' },
  { id: 'save', name: 'Save File', description: 'Cloud or local storage', icon: 'save', color: 'bg-white' },
]

function AutomationBuilderPage() {
  const [nodes] = useState([
    { id: 1, type: 'trigger', name: 'Upload Document', description: 'Accepts PDF, JPG, or PNG uploads', x: 50, y: 0 },
    { id: 2, type: 'process', name: 'OCR Engine', progress: 99.8, x: 50, y: 1 },
    { id: 3, type: 'ai', name: 'Extract Data (JSON)', description: 'Fields: Date, Total, Vendor', x: 50, y: 2 },
    { id: 4, type: 'format', name: 'Save to Excel', description: 'Output: invoice_report.xlsx', x: 50, y: 3 },
  ])

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e53935] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              </svg>
            </div>
            <span className="font-bold text-gray-900">DocNova AI</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link to="/automation" className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Workflows</Link>
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Templates</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">History</button>
            <Link to="/settings" className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Settings</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search components..."
              className="w-64 pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e53935] transition-all"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-[#e53935] text-white rounded-lg font-medium text-sm hover:bg-[#d32f2f] transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Publish
          </button>
          
          <div className="w-8 h-8 bg-gradient-to-br from-[#e53935] to-[#ff8a80] rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
            A
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Left Sidebar - Workflow Blocks */}
        <aside className="w-56 bg-white border-r border-gray-100 p-4">
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 text-sm">Workflow Blocks</h2>
            <p className="text-xs text-gray-500 mt-1">Drag and drop nodes to canvas</p>
          </div>

          <div className="space-y-2">
            {workflowBlocks.map((block) => (
              <div
                key={block.id}
                className={`p-3 rounded-xl border border-gray-100 hover:border-[#e53935]/30 hover:shadow-sm transition-all cursor-grab ${block.color} ${block.id === 'upload' ? 'text-white' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <BlockIcon type={block.icon} isActive={block.id === 'upload'} />
                  <div>
                    <p className={`font-medium text-sm ${block.id === 'upload' ? 'text-white' : 'text-gray-900'}`}>{block.name}</p>
                    <p className={`text-xs ${block.id === 'upload' ? 'text-white/70' : 'text-gray-500'}`}>{block.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 p-3 border border-dashed border-gray-300 rounded-xl text-gray-500 text-sm font-medium hover:border-[#e53935] hover:text-[#e53935] transition-colors cursor-pointer flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Custom Block
          </button>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 relative overflow-auto">
          {/* Canvas Header */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h1 className="font-bold text-gray-900">Automation Builder</h1>
              <p className="text-sm text-gray-500">Design your document processing pipeline</p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Run Test
            </button>
          </div>

          {/* Workflow Canvas */}
          <div className="absolute inset-0 flex items-center justify-center pt-24">
            <div className="flex flex-col items-center gap-0">
              {nodes.map((node, index) => (
                <div key={node.id} className="flex flex-col items-center">
                  <WorkflowNode node={node} />
                  {index < nodes.length - 1 && (
                    <div className="w-px h-12 bg-gray-300 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="absolute bottom-6 left-6 text-sm text-gray-500">
            <span className="text-[#e53935] cursor-pointer hover:underline">Projects</span>
            <span className="mx-2">/</span>
            <span>Invoice Automation</span>
          </div>
        </main>
      </div>
    </div>
  )
}

function WorkflowNode({ node }: { node: { id: number; type: string; name: string; description?: string; progress?: number } }) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'trigger': return 'bg-[#e53935] text-white'
      case 'process': return 'bg-gray-100 text-gray-600'
      case 'ai': return 'bg-blue-100 text-blue-600'
      case 'format': return 'bg-green-100 text-green-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'trigger': return 'TRIGGER'
      case 'process': return 'PROCESS'
      case 'ai': return 'AI MODEL'
      case 'format': return 'FORMAT'
      default: return type.toUpperCase()
    }
  }

  return (
    <div className={`w-72 bg-white rounded-xl border-2 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${
      node.type === 'trigger' ? 'border-[#e53935]' : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <NodeIcon type={node.type} />
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${getBadgeColor(node.type)}`}>
          {getBadgeText(node.type)}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{node.name}</h3>
      {node.description && (
        <p className="text-xs text-gray-500">{node.description}</p>
      )}
      {node.progress !== undefined && (
        <div className="mt-3">
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${node.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-green-600 font-medium mt-1 text-right">{node.progress}%</p>
        </div>
      )}
    </div>
  )
}

function NodeIcon({ type }: { type: string }) {
  switch (type) {
    case 'trigger':
      return (
        <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        </svg>
      )
    case 'process':
      return (
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'ai':
      return (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case 'format':
      return (
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    default:
      return null
  }
}

function BlockIcon({ type, isActive }: { type: string; isActive?: boolean }) {
  const color = isActive ? 'text-white' : 'text-[#e53935]'
  
  switch (type) {
    case 'upload':
      return (
        <div className={`w-8 h-8 ${isActive ? 'bg-white/20' : 'bg-[#ffebee]'} rounded-lg flex items-center justify-center`}>
          <svg className={`w-4 h-4 ${color}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          </svg>
        </div>
      )
    case 'ocr':
      return (
        <div className="w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )
    case 'extract':
      return (
        <div className="w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
      )
    case 'excel':
      return (
        <div className="w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
      )
    case 'save':
      return (
        <div className="w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
      )
    default:
      return null
  }
}
