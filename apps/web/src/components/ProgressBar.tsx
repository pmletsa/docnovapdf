interface ProgressBarProps {
  progress: number
  showPercentage?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'warning' | 'error'
}

export function ProgressBar({
  progress,
  showPercentage = true,
  size = 'md',
  color = 'primary',
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress))

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  }

  return (
    <div className="w-full">
      <div className={`w-full bg-neutral rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out ${colorClasses[color]}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <p className="text-xs text-accent/60 mt-1 text-right">{Math.round(clampedProgress)}%</p>
      )}
    </div>
  )
}
