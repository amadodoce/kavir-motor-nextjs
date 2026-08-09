'use client'

import {
  Droplets,
  ClipboardCheck,
  Wrench,
  CircleDot,
  Circle,
  Gauge,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { serviceTypes } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  ClipboardCheck,
  Wrench,
  CircleDot,
  Circle,
  Gauge,
}

interface ServiceTypesProps {
  selectedId: string | null
  onSelect: (id: string) => void
}

export function ServiceTypes({ selectedId, onSelect }: ServiceTypesProps) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
        انتخاب نوع سرویس
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        سرویسی را که بیشتر با نیاز موتورسیکلت شما مطابقت دارد انتخاب کنید.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceTypes.map((service) => {
          const IconComponent = iconMap[service.icon] ?? Wrench
          const isSelected = selectedId === service.id
          return (
            <button
              key={service.id}
              onClick={() => onSelect(service.id)}
              className={cn(
                'relative text-right rounded-xl border p-5 transition-all duration-200 group',
                isSelected
                  ? 'bg-primary/10 border-primary shadow-[0_0_20px_oklch(0.62_0.21_37/20%)]'
                  : 'bg-card border-border hover:border-primary/30 hover:bg-secondary/50'
              )}
            >
              {service.popular && (
                <span className="absolute top-3 left-3 text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                  محبوب
                </span>
              )}
              <div
                className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors',
                  isSelected
                    ? 'bg-primary text-white'
                    : 'bg-secondary border border-border text-muted-foreground group-hover:text-primary'
                )}
              >
                <IconComponent className="w-5 h-5" />
              </div>
              <h3
                className={cn(
                  'font-bold text-sm mb-1 transition-colors',
                  isSelected ? 'text-primary' : 'text-foreground'
                )}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span
                  className={cn(
                    'font-bold',
                    isSelected ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {service.price}
                </span>
                <span className="text-muted-foreground">{service.duration}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
