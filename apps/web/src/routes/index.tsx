import { Link, createFileRoute } from '@tanstack/react-router'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

const featuredTools = [
  {
    category: 'Universal Converter',
    tools: [
      { name: 'PDF to Word', description: 'Seamlessly swap between PDF and Word', icon: FileTextIcon, href: '/tools/pdf-to-word' },
      { name: 'Word to PDF', description: 'Convert Word documents to PDF format', icon: FileTextIcon, href: '/tools/word-to-pdf' },
      { name: 'PDF to JPG', description: 'Convert PDF pages to JPG images', icon: ImageIcon, href: '/tools/pdf-to-jpg' },
      { name: 'JPG to PDF', description: 'Convert images to PDF documents', icon: ImageIcon, href: '/tools/jpg-to-pdf' },
    ],
  },
  {
    category: 'AI Intelligence',
    tools: [
      { name: 'Chat with Any Doc', description: 'Ask questions about your documents', icon: ChatIcon, href: '/ai/chat-with-pdf', badge: 'AI' },
      { name: 'Smart Summarize', description: 'Turn 20 pages into a 5-slide outline', icon: SparkleIcon, href: '/ai/summarize-pdf', badge: 'AI' },
    ],
  },
]

const features = [
  {
    title: 'Zero-Cloud Processing',
    description: 'Your documents never leave your device. 100% private, 100% offline. Process sensitive files with complete confidence.',
    icon: ShieldIcon,
  },
  {
    title: 'Lightning Fast',
    description: 'Convert files in 2 seconds, not 15. No splash screens, no sign-ups. Just instant results with a utility-first design.',
    icon: SparkleIcon,
  },
  {
    title: 'Smart Automation',
    description: 'Multi-step workflows in one click. Compress, watermark, and rename batches instantly—regardless of format.',
    icon: CloudIcon,
  },
  {
    title: 'AI Content Intelligence',
    description: 'Beyond format conversion. Chat with docs, extract insights, and transform content intelligently.',
    icon: GiftIcon,
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[70px] md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mb-6">
              <SparkleIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
              Power Your Documents with <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-lg text-3xl md:text-5xl">AI</span>
              <span className="block text-primary mt-2">Private. Instant. Intelligent.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-accent/70 max-w-2xl mx-auto">
              Merge, convert, analyze and automate documents in seconds.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/tools" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                <SparkleIcon className="w-5 h-5" />
                Try AI Tools — It's Free
              </Link>
              <Link to="/tools" className="w-full sm:w-auto px-8 py-4 bg-neutral text-accent font-semibold rounded-xl hover:bg-neutral/80 transition-colors cursor-pointer">
                View All Tools
              </Link>
            </div>
            <p className="mt-6 text-sm text-accent/50">
              100% Private • Lightning Fast • Zero-Cloud Processing • Works Offline
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-12 sm:py-16 md:py-20 bg-neutral/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
              All Your Document Tools. Supercharged by AI.
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-accent/70 max-w-2xl mx-auto">
              Powerful tools to handle all your PDF tasks. Select a tool below to get started.
            </p>
          </div>

          <div className="space-y-16">
            {featuredTools.map((category, index) => (
              <div key={category.category}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-accent flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    {category.category}
                  </h3>
                  {index === 0 && (
                    <Link to="/tools" className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1 cursor-pointer">
                      View All Tools
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {category.tools.map((tool) => (
                    <ToolCard key={tool.name} {...tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/tools" className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
              Why Choose DocNovaAI?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-accent/70 max-w-2xl mx-auto">
              Built for professionals and everyday users alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-neutral/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-accent/70 max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include zero-cloud processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-background p-8 rounded-2xl border border-neutral hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-accent mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$0</span>
                <span className="text-accent/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 documents per month</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All basic conversion tools</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% private processing</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works offline</span>
                </li>
              </ul>
              <Link to="/tools" className="block w-full px-6 py-3 bg-neutral text-accent font-semibold rounded-xl hover:bg-neutral/80 transition-colors text-center cursor-pointer">
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-background p-8 rounded-2xl border-2 border-primary shadow-lg shadow-primary/10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$9</span>
                <span className="text-accent/60">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All conversion & automation tools</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI features (100 queries/month)</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Batch processing</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link to="/tools" className="block w-full px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center cursor-pointer">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-background p-8 rounded-2xl border border-neutral hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-accent mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited AI queries</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom workflows</span>
                </li>
                <li className="flex items-start gap-2 text-accent/70">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link to="/tools" className="block w-full px-6 py-3 bg-neutral text-accent font-semibold rounded-xl hover:bg-neutral/80 transition-colors text-center cursor-pointer">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your PDFs?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Join millions of users who trust DocNovaAI for intelligent document processing.
          </p>
          <Link to="/dashboard" className="mt-8 inline-block px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral transition-colors shadow-lg cursor-pointer">
            Get Started for Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ToolCard({ name, description, icon: Icon, href, badge }: { name: string; description: string; icon: React.FC<{ className?: string }>; href: string; badge?: string }) {
  return (
    <Link
      to={href}
      className="group bg-background p-4 sm:p-6 rounded-xl border border-neutral hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
    >
      {badge && (
        <span className="inline-block px-2 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-2 sm:mb-3">
          {badge}
        </span>
      )}
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
      </div>
      <h4 className="font-semibold text-accent mb-1 sm:mb-2 text-sm sm:text-base">{name}</h4>
      <p className="text-xs sm:text-sm text-accent/60 line-clamp-2">{description}</p>
    </Link>
  )
}

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.FC<{ className?: string }> }) {
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h4 className="font-semibold text-accent mb-2">{title}</h4>
      <p className="text-sm text-accent/60">{description}</p>
    </div>
  )
}

// Icon Components
function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}



function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}






function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
