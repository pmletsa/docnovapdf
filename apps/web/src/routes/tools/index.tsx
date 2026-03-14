import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/tools/')({
  component: ToolsDirectoryPage,
})

type ToolCategory = 'pdf' | 'conversion' | 'ocr' | 'ai'

const tools = {
  pdf: [
    { name: 'Merge PDF', description: 'Combine multiple PDFs into one', icon: 'merge', path: '/tools/merge-pdf' },
    { name: 'Split PDF', description: 'Extract pages or split by range', icon: 'split', path: '/tools/split-pdf' },
    { name: 'Compress PDF', description: 'Reduce file size without quality loss', icon: 'compress', path: '/tools/compress-pdf' },
    { name: 'Edit PDF', description: 'Add text, images, and annotations', icon: 'edit', path: '/tools/edit-pdf' },
  ],
  conversion: [
    { name: 'PDF to Word', description: 'Convert with perfect formatting', icon: 'pdf-word', path: '/tools/pdf-to-word' },
    { name: 'Word to PDF', description: 'Create professional PDFs', icon: 'word-pdf', path: '/tools/word-to-pdf' },
    { name: 'PDF to JPG', description: 'Convert pages to images', icon: 'pdf-jpg', path: '/tools/pdf-to-jpg' },
    { name: 'JPG to PDF', description: 'Combine images into PDF', icon: 'jpg-pdf', path: '/tools/jpg-to-pdf' },
  ],
  ocr: [
    { name: 'OCR PDF', description: 'Turn scans into searchable text', icon: 'ocr', path: '/tools/ocr-pdf' },
    { name: 'Extract Text', description: 'Pull text from any document', icon: 'extract', path: '/tools/extract-text' },
  ],
  ai: [
    { name: 'AI Summary', description: 'Get key insights in seconds', icon: 'ai', path: '/tools/ai-summary', badge: 'AI' },
    { name: 'AI Chat', description: 'Ask questions about your documents', icon: 'chat', path: '/tools/ai-chat', badge: 'AI' },
    { name: 'Smart Extract', description: 'AI-powered data extraction', icon: 'smart', path: '/tools/smart-extract', badge: 'AI' },
  ],
}

function ToolsDirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all' as const, label: 'All Tools' },
    { id: 'pdf' as ToolCategory, label: 'PDF Tools' },
    { id: 'conversion' as ToolCategory, label: 'Conversion Tools' },
    { id: 'ocr' as ToolCategory, label: 'OCR Tools' },
    { id: 'ai' as ToolCategory, label: 'AI Tools' },
  ]

  const allTools = [...tools.pdf, ...tools.conversion, ...tools.ocr, ...tools.ai]
  const filteredTools = searchQuery 
    ? allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Every tool you need to work with PDFs
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              DocNova AI brings the power of artificial intelligence to your documents.
              <br />Efficient, secure, and incredibly fast.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for tools (e.g. Merge, OCR)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
              />
            </div>

            {/* Category Tabs */}
            {!searchQuery && (
              <div className="flex justify-center gap-2 mt-8 border-b border-gray-200 pb-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-3 text-sm font-medium transition-all cursor-pointer relative ${
                      activeCategory === category.id
                        ? 'text-[#e53935]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {category.label}
                    {activeCategory === category.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e53935]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            {searchQuery ? (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Results ({filteredTools?.length || 0})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredTools?.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} />
                  ))}
                </div>
                {filteredTools?.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    No tools found matching "{searchQuery}"
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Essential PDF Tools */}
                {(activeCategory === 'all' || activeCategory === 'pdf') && (
                  <div className="mb-12">
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#ffebee] rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        </svg>
                      </span>
                      Essential PDF Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tools.pdf.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Conversion Tools */}
                {(activeCategory === 'all' || activeCategory === 'conversion') && (
                  <div className="mb-12">
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#ffebee] rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </span>
                      Conversion Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tools.conversion.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

                {/* OCR Tools */}
                {(activeCategory === 'all' || activeCategory === 'ocr') && (
                  <div className="mb-12">
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#ffebee] rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      OCR Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tools.ocr.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

                {/* AI & Advanced Tools */}
                {(activeCategory === 'all' || activeCategory === 'ai') && (
                  <div className="mb-12">
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#ffebee] rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      AI & Advanced Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tools.ai.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* View All Button */}
            <div className="flex justify-center mt-8">
              <Link
                to="/tools"
                className="bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-3 px-8 rounded-full text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                View All 24+ Tools
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ToolCard({ tool }: { tool: { name: string; description: string; icon: string; path: string; badge?: string } }) {
  return (
    <Link
      to={tool.path}
      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#e53935]/20 hover:shadow-lg transition-all group relative cursor-pointer"
    >
      {tool.badge && (
        <span className="absolute top-3 right-3 bg-[#e53935] text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {tool.badge}
        </span>
      )}
      <div className="w-12 h-12 bg-[#ffebee] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e53935] transition-colors">
        <ToolIcon icon={tool.icon} />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
      <p className="text-sm text-gray-500">{tool.description}</p>
    </Link>
  )
}

function ToolIcon({ icon }: { icon: string }) {
  const iconClass = "w-6 h-6 text-[#e53935] group-hover:text-white transition-colors"
  
  switch (icon) {
    case 'merge':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    case 'split':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12m-12 5h12M4 7h.01M4 12h.01M4 17h.01" />
        </svg>
      )
    case 'compress':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    case 'edit':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    case 'pdf-word':
    case 'word-pdf':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    case 'pdf-jpg':
    case 'jpg-pdf':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'ocr':
    case 'extract':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'ai':
    case 'smart':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'chat':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
  }
}
