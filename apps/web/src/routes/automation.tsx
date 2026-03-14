import { createFileRoute, Link } from '@tanstack/react-router'
import { DashboardLayout } from '~/components/DashboardLayout'

export const Route = createFileRoute('/automation')({
  component: AutomationPage,
})

function AutomationPage() {
  const workflows = [
    { 
      name: 'Invoice Processing', 
      description: 'Extract data from invoices and export to spreadsheet',
      status: 'active',
      runs: 156,
      lastRun: '2 hours ago'
    },
    { 
      name: 'Contract Review', 
      description: 'Summarize contracts and flag key clauses',
      status: 'active',
      runs: 42,
      lastRun: '1 day ago'
    },
    { 
      name: 'Report Generator', 
      description: 'Compile weekly reports from multiple sources',
      status: 'paused',
      runs: 89,
      lastRun: '3 days ago'
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <header className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">Automation Workflows</h1>
          <Link to="/automation-builder" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer text-sm sm:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Workflow
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Active Workflows</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Total Runs This Month</p>
              <p className="text-3xl font-bold text-gray-900">287</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Time Saved</p>
              <p className="text-3xl font-bold text-gray-900">48h</p>
            </div>
          </div>

          {/* Workflows List */}
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Your Workflows</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {workflows.map((workflow, index) => (
                <div key={index} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      workflow.status === 'active' ? 'bg-[#e8f5e9]' : 'bg-gray-100'
                    }`}>
                      <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${workflow.status === 'active' ? 'text-[#4caf50]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{workflow.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">{workflow.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 pl-13 sm:pl-0">
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{workflow.runs} runs</p>
                      <p className="text-xs text-gray-500">Last run {workflow.lastRun}</p>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      workflow.status === 'active' 
                        ? 'bg-[#e8f5e9] text-[#4caf50]' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {workflow.status === 'active' ? 'Active' : 'Paused'}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer hidden sm:block">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Templates Section */}
          <div className="mt-6 sm:mt-8">
            <h2 className="font-bold text-gray-900 mb-4">Workflow Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'PDF to Spreadsheet', description: 'Extract tables from PDFs automatically' },
                { name: 'Document Summarizer', description: 'Generate summaries for uploaded documents' },
                { name: 'Email Attachment Processor', description: 'Process attachments from emails' },
              ].map((template, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#e53935]/30 hover:shadow-md transition-all cursor-pointer">
                  <div className="w-10 h-10 bg-[#ffebee] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
