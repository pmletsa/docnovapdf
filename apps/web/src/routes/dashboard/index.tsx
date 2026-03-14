import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-accent">Dashboard</h1>
            <p className="text-accent/60">Manage your files and workflows</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Files Processed', value: '0', icon: '📄' },
              { label: 'AI Credits Used', value: '0', icon: '✨' },
              { label: 'Storage Used', value: '0 MB', icon: '💾' },
              { label: 'Active Workflows', value: '0', icon: '⚡' },
            ].map((stat) => (
              <div key={stat.label} className="bg-neutral/50 rounded-xl p-6 border border-neutral">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-accent/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Files */}
          <div className="bg-neutral/50 rounded-xl border border-neutral p-6">
            <h2 className="text-lg font-semibold text-accent mb-4">Recent Files</h2>
            <div className="text-center py-12 text-accent/50">
              <p>No files yet. Upload your first document to get started.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
