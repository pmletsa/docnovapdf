import { useState, useCallback, useRef } from 'react'

interface FileUploaderProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  onFilesSelected: (files: File[]) => void
  disabled?: boolean
}

export function FileUploader({
  accept = '.pdf',
  multiple = false,
  maxSize = 100 * 1024 * 1024, // 100MB default
  onFilesSelected,
  disabled = false,
}: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const validateFiles = useCallback(
    (files: File[]): File[] => {
      const validFiles: File[] = []
      const errors: string[] = []

      for (const file of files) {
        if (maxSize && file.size > maxSize) {
          errors.push(`${file.name} exceeds maximum size of ${formatBytes(maxSize)}`)
          continue
        }
        validFiles.push(file)
      }

      if (errors.length > 0) {
        setError(errors.join(', '))
      } else {
        setError(null)
      }

      return validFiles
    },
    [maxSize]
  )

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return

      const fileArray = Array.from(files)
      const validFiles = validateFiles(fileArray)

      if (validFiles.length > 0) {
        onFilesSelected(validFiles)
      }
    },
    [validateFiles, onFilesSelected]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      if (disabled) return
      handleFiles(e.dataTransfer.files)
    },
    [disabled, handleFiles]
  )

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-[3px] border-dashed rounded-2xl p-10 sm:p-16 text-center cursor-pointer transition-all duration-300
          ${isDragging 
            ? 'border-primary bg-primary-light/30 scale-[1.02] shadow-lg shadow-primary/20' 
            : 'border-primary/40 hover:border-primary hover:bg-neutral/30 hover:shadow-md'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />

        <div className="flex flex-col items-center gap-5">
          <div className={`
            w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300
            ${isDragging 
              ? 'bg-primary shadow-lg shadow-primary/30 scale-110' 
              : 'bg-primary-light group-hover:bg-primary'
            }
          `}>
            <UploadIcon className={`w-10 h-10 transition-colors ${isDragging ? 'text-white' : 'text-primary'}`} />
          </div>
          
          <div className="space-y-2">
            <p className="text-xl font-bold text-accent">
              {isDragging ? '📂 Drop your files here' : '📁 Choose or Drop Files'}
            </p>
            <p className="text-base text-accent/70">
              Drag & drop files here or{' '}
              <span className="text-primary font-semibold underline decoration-2 underline-offset-2">
                click to browse
              </span>
            </p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-neutral/50 rounded-lg">
            <span className="text-xs font-medium text-accent/60">
              {accept === '.pdf' ? '📄 PDF files' : `📎 ${accept}`}
            </span>
            <span className="text-accent/30">•</span>
            <span className="text-xs font-medium text-accent/60">
              ⚡ Max {formatBytes(maxSize)}
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600 text-center flex items-center justify-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </p>
        </div>
      )}
    </div>
  )
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
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
