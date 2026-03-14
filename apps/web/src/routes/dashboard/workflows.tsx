import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/dashboard/workflows')({
  component: WorkflowsPage,
})

function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-accent">Workflows</h1>
              <p className="text-accent/60">Automate your document processing</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Create Workflow
            </button>
          </div>

          <div className="bg-neutral/50 rounded-xl border border-neutral p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <WorkflowIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">No workflows yet</h3>
              <p className="text-accent/60 max-w-md mx-auto">
                Create automated workflows to process documents automatically. 
                For example: OCR → Extract Data → Convert to Excel.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  )
}
