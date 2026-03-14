import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from '~/components/DashboardLayout'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const recentFiles = [
    { name: 'Q3 Financial Report.pdf', modified: '2h ago', size: '4.2 MB', icon: 'pdf' },
    { name: 'Client Agreement_Draft.docx', modified: '5h ago', size: '1.1 MB', icon: 'word' },
    { name: 'Marketing Leads 2024.csv', modified: '1d ago', size: '850 KB', icon: 'csv' },
  ]

  const activeJobs = [
    { name: 'OCR Extraction', file: 'Invoice_772.pdf', progress: 85, status: 'processing' },
    { name: 'Summarization', file: 'Legal_Brief.pdf', progress: 0, status: 'queued' },
    { name: 'Sentiment Analysis', file: 'Reviews_Bulk.csv', progress: 42, status: 'processing' },
  ]

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome back, Alex</h1>
              <p className="text-sm sm:text-base text-gray-500">You have 4 documents currently being processed by AI.</p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Flow
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-3 sm:p-6 rounded-xl border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">AI Insights</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#fff3e0] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#e53935] mt-2 sm:mt-3 font-medium">Documents summarized today</p>
              <div className="w-full h-1 bg-gray-100 rounded-full mt-2 hidden sm:block">
                <div className="w-3/4 h-full bg-[#e53935] rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-xl border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Automation Success</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">98.4%</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#4caf50] mt-2 sm:mt-3 font-medium flex items-center gap-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="hidden sm:inline">+2.1% from last week</span>
                <span className="sm:hidden">+2.1%</span>
              </p>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-xl border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Time Saved</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">12.5h</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e3f2fd] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">Total this month</p>
            </div>
          </div>

          {/* Recent Files & Active Jobs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Files */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-gray-900">Recent Files</h2>
                <button className="text-sm text-[#e53935] font-medium hover:underline cursor-pointer">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      file.icon === 'pdf' ? 'bg-[#ffebee]' : 
                      file.icon === 'word' ? 'bg-[#fff3e0]' : 'bg-[#e8f5e9]'
                    }`}>
                      <FileIcon type={file.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">Modified {file.modified} • {file.size}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Jobs */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-gray-900">Active Jobs</h2>
                <span className="flex items-center gap-1.5 text-xs font-medium text-[#e53935]">
                  <span className="w-2 h-2 bg-[#e53935] rounded-full animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <div className="space-y-5">
                {activeJobs.map((job, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-900">
                        {job.name} — <span className="text-gray-500">{job.file}</span>
                      </p>
                      <span className={`text-sm font-medium ${
                        job.status === 'processing' ? 'text-[#e53935]' : 'text-gray-400'
                      }`}>
                        {job.status === 'processing' ? `${job.progress}%` : 'Queued'}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          job.status === 'processing' ? 'bg-[#e53935]' : 'bg-gray-200'
                        }`}
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2.5 text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer">
                Manage Processing Queue
              </button>
            </div>
          </div>
      </div>
    </DashboardLayout>
  )
}

function FileIcon({ type }: { type: string }) {
  switch (type) {
    case 'pdf':
      return (
        <svg className="w-5 h-5 text-[#e53935]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        </svg>
      )
    case 'word':
      return (
        <svg className="w-5 h-5 text-[#ff9800]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
        </svg>
      )
    case 'csv':
      return (
        <svg className="w-5 h-5 text-[#4caf50]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h2v2H8v-2zm0 4h2v2H8v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
        </svg>
      )
    default:
      return null
  }
}
