import { Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
            <img src="/logo.png" alt="DocNova AI" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-accent leading-tight">
                DocNova<span className="text-primary">AI</span>
              </span>
              <span className="text-[8px] sm:text-[10px] text-accent/50 leading-none">by TelVex</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" hash="tools" className="text-accent/70 hover:text-primary transition-colors font-medium">
              Tools
            </Link>
            <Link to="/" hash="features" className="text-accent/70 hover:text-primary transition-colors font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-accent/70 hover:text-primary transition-colors font-medium">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link to="/dashboard" className="hidden sm:block px-4 py-2 text-accent font-medium hover:text-primary transition-colors cursor-pointer">
              Sign In
            </Link>
            <Link to="/dashboard" className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-primary text-white text-xs sm:text-base font-medium rounded-lg hover:bg-primary-dark transition-colors cursor-pointer">
              Get Started
            </Link>
            <button
              className="md:hidden p-1.5 sm:p-2 text-accent hover:text-primary transition-colors"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-full left-0 right-0 md:hidden border-t border-neutral bg-background shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              hash="tools"
              className="block text-accent/70 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              to="/"
              hash="features"
              className="block text-accent/70 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-accent/70 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <hr className="border-neutral" />
            <Link to="/dashboard" className="w-full text-left text-accent font-medium py-2 hover:text-primary transition-colors cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link to="/dashboard" className="w-full block px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-center cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
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
