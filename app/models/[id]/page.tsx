import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ModelCarousel } from '@/components/model/model-carousel'
import { SpecsGrid } from '@/components/model/specs-grid'
import { ModelHighlights } from '@/components/model/model-highlights'
import { RelatedModels } from '@/components/model/related-models'
import { motorcycleModels } from '@/lib/data'
import { ChevronLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const model = motorcycleModels.find((m) => m.id === id)
  if (!model) return { title: 'مدل یافت نشد' }
  return {
    title: `${model.name} — کویر موتور`,
    description: model.tagline,
  }
}

export async function generateStaticParams() {
  return motorcycleModels.map((m) => ({ id: m.id }))
}

export default async function ModelDetailPage({ params }: PageProps) {
  const { id } = await params
  const model = motorcycleModels.find((m) => m.id === id)
  if (!model) notFound()

  return (
    <main>
      <Navbar />

      {/* Breadcrumb — sits above the full-width hero */}
      <div className="pt-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="مسیر صفحه">
            <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
            <ChevronLeft className="w-3 h-3" />
            <Link href="/models" className="hover:text-primary transition-colors">مدل‌ها</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-foreground">{model.name}</span>
          </nav>
        </div>
      </div>

      {/* Full-width cinematic hero + thumbnail strip */}
      <section className="bg-background">
        <ModelCarousel
          name={model.name}
          brand={model.brand}
          category={model.category}
          tagline={model.tagline}
          cc={model.cc}
          weight={model.weight}
          mainImage={model.image}
        />
      </section>

      {/* Specs section */}
      <section className="bg-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
            مشخصات فنی
          </h2>
          <SpecsGrid specs={model.specs} />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModelHighlights highlights={model.highlights} />
        </div>
      </section>

      {/* Related models */}
      <section className="bg-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedModels relatedIds={model.relatedIds} currentId={model.id} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
