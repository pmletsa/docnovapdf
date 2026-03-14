import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

interface ToolCardProps {
  name: string
  description: string
  icon: ReactNode
  href: string
  badge?: string
}

export function ToolCard({ name, description, icon, href, badge }: ToolCardProps) {
  return (
    <Link
      to={href}
      className="group bg-background p-6 rounded-xl border border-neutral hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
    >
      {badge && (
        <span className="inline-block px-2 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-3">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <span className="text-primary group-hover:text-white transition-colors">{icon}</span>
      </div>
      <h4 className="font-semibold text-accent mb-2">{name}</h4>
      <p className="text-sm text-accent/60">{description}</p>
    </Link>
  )
}
