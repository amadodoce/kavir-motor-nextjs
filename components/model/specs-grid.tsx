import { Zap, Settings, Disc3, Ruler, ChevronDown, Weight } from 'lucide-react'
import { MotorcycleModel } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Settings,
  Disc3,
  Ruler,
  ChevronDown,
  Weight,
}

interface SpecsGridProps {
  specs: MotorcycleModel['specs']
}

export function SpecsGrid({ specs }: SpecsGridProps) {
  const specEntries = Object.values(specs)

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specEntries.map((spec) => {
          const IconComponent = iconMap[spec.icon] ?? Zap
          return (
            <div
              key={spec.title}
              className="bg-card rounded-xl border border-border p-5 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <IconComponent className="w-4 h-4 text-primary" />
                <h3 className="text-foreground font-bold text-sm">
                  {spec.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {spec.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
