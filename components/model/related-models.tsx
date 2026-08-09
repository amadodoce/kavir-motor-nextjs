import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { motorcycleModels } from '@/lib/data'

interface RelatedModelsProps {
  relatedIds: string[]
  currentId: string
}

export function RelatedModels({ relatedIds, currentId }: RelatedModelsProps) {
  const models = motorcycleModels.filter(
    (m) => relatedIds.includes(m.id) && m.id !== currentId
  ).slice(0, 3)

  if (models.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
        مدل‌های مرتبط
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <Link
            key={model.id}
            href={`/models/${model.id}`}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.62_0.21_37/10%)]"
          >
            <div className="relative h-40 bg-secondary overflow-hidden">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-0.5">
                {model.brand}
              </p>
              <h3 className="text-foreground font-black text-lg mb-1">
                {model.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{model.tagline}</p>
              <span className="inline-flex items-center gap-1 text-primary text-xs font-bold">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" /> مشاهده جزئیات
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
