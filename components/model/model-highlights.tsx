import { Zap, Settings2, Shield, Eye, Target, Cpu, Map } from 'lucide-react'
import { Highlight } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Settings2,
  Shield,
  Eye,
  Target,
  Cpu,
  Map,
}

interface ModelHighlightsProps {
  highlights: Highlight[]
}

export function ModelHighlights({ highlights }: ModelHighlightsProps) {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
        ویژگی‌های برجسته
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((highlight) => {
          const IconComponent = iconMap[highlight.icon] ?? Zap
          return (
            <div
              key={highlight.title}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-base mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
