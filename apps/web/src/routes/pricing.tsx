import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for individuals just getting started.',
    features: [
      { text: '5 documents / month', included: true },
      { text: 'Basic AI analysis', included: true },
      { text: 'Community support', included: true },
      { text: 'Custom templates', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Accelerate your workflow with advanced tools.',
    features: [
      { text: 'Unlimited documents', included: true },
      { text: 'Advanced AI extraction', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom templates', included: true },
    ],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: 99,
    description: 'Full power for large teams and organizations.',
    features: [
      { text: 'Enterprise-grade security', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'API access', included: true },
      { text: 'SSO & SAML', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const compareFeatures = [
  { feature: 'AI Analysis', free: 'Basic', pro: 'Advanced', business: 'Custom Models' },
  { feature: 'Monthly Documents', free: '5', pro: 'Unlimited', business: 'Unlimited' },
  { feature: 'Team Members', free: '1', pro: 'Up to 10', business: 'Unlimited' },
  { feature: 'Support', free: 'Community', pro: 'Priority Email', business: '24/7 Dedicated' },
  { feature: 'API Access', free: false, pro: false, business: true },
  { feature: 'Custom Branding', free: false, pro: true, business: true },
  { feature: 'SLA Guarantee', free: false, pro: false, business: true },
]

function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Choose the plan that's right for your document workflow. No hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl p-8 border-2 relative ${
                    plan.popular 
                      ? 'border-[#e53935] shadow-xl' 
                      : 'border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#e53935] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-gray-900">${plan.price}</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-[#e53935] hover:bg-[#d32f2f] text-white'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-[#e53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Features Table */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Compare features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 pr-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50">
                      <td className="py-4 pr-4 text-gray-600">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <svg className="w-5 h-5 text-[#e53935] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-gray-600">{row.free}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <svg className="w-5 h-5 text-[#e53935] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-gray-600">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.business === 'boolean' ? (
                          row.business ? (
                            <svg className="w-5 h-5 text-[#e53935] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-gray-600">{row.business}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-[#f8f9fb]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <span className="text-lg font-bold">TECHSTREAM</span>
              <span className="text-lg font-bold">DATACLOUD</span>
              <span className="text-lg font-bold">InnovaCorp</span>
              <span className="text-lg font-bold">Vantage Point</span>
              <span className="text-lg font-bold">Aether</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
