interface FilePreviewProps {
  file: {
    name: string
    size: number
    type: string
    pages?: number
  }
  onRemove?: () => void
  showPages?: boolean
}

export function FilePreview({ file, onRemove, showPages = false }: FilePreviewProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-neutral/50 rounded-xl border border-neutral">
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
        <FileIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-accent truncate">{file.name}</p>
        <p className="text-sm text-accent/60">
          {formatBytes(file.size)}
          {showPages && file.pages && ` • ${file.pages} pages`}
        </p>
      </div>
      {onRemove && (
        <button
          onClick={onRemove}
          className="p-2 text-accent/50 hover:text-red-500 transition-colors"
          aria-label="Remove file"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      )}
    </div>
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
