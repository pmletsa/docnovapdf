interface Plan {
  name: string
  price: number
  interval: string
  features: string[]
  popular?: boolean
  cta: string
}

interface PricingTableProps {
  plans: Plan[]
  onSelectPlan?: (plan: Plan) => void
}

export function PricingTable({ plans, onSelectPlan }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative bg-background rounded-2xl p-6 lg:p-8 border-2 transition-all ${
            plan.popular
              ? 'border-primary shadow-lg shadow-primary/10'
              : 'border-neutral hover:border-primary/30'
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              Most Popular
            </span>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-accent">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-accent">${plan.price}</span>
              <span className="text-accent/60">/{plan.interval}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-accent/80">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelectPlan?.(plan)}
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${
              plan.popular
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-neutral text-accent hover:bg-primary hover:text-white'
            }`}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
