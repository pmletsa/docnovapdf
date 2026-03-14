import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'
import { FileUploader } from '~/components/FileUploader'

export const Route = createFileRoute('/dashboard/files')({
  component: FilesPage,
})

function FilesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-accent">My Files</h1>
              <p className="text-accent/60">Upload and manage your documents</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              New Folder
            </button>
          </div>

          <FileUploader
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple={true}
            onFilesSelected={(files) => console.log('Files:', files)}
          />

          <div className="mt-8 bg-neutral/50 rounded-xl border border-neutral p-6">
            <div className="text-center py-12 text-accent/50">
              <p>No files uploaded yet.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
