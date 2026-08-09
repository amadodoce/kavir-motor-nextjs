'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, SlidersHorizontal, ArrowLeft, X } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motorcycleModels } from '@/lib/data'

const categories = ['همه', 'موتوکراس', 'خیابانی', 'آدونچر']
const categoriesEn = ['All', 'Motocross', 'Street', 'Adventure']
const brandsList = ['همه', 'KTM', 'Kawasaki', 'Husqvarna', 'GASGAS']
const brandsListEn = ['All', 'KTM', 'Kawasaki', 'Husqvarna', 'GASGAS']

export default function ModelsPage() {
  const [search, setSearch] = useState('')
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0)
  const [activeBrandIdx, setActiveBrandIdx] = useState(0)

  const filtered = useMemo(() => {
    const activeCategory = categoriesEn[activeCategoryIdx]
    const activeBrand = brandsListEn[activeBrandIdx]
    return motorcycleModels.filter((m) => {
      const matchesSearch =
        search === '' ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.brand.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || m.category === categories[activeCategoryIdx]
      const matchesBrand = activeBrand === 'All' || m.brand === activeBrand
      return matchesSearch && matchesCategory && matchesBrand
    })
  }, [search, activeCategoryIdx, activeBrandIdx])

  const hasFilters = search !== '' || activeCategoryIdx !== 0 || activeBrandIdx !== 0

  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="pt-28 pb-10 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-2">
            همه مدل‌ها
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            مجموعه کامل موتورسیکلت‌های ممتاز ما را مرور کنید.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-none sm:max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجوی مدل‌ها..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pr-9 pl-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                    activeCategoryIdx === idx
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="w-px h-4 bg-border" />
              {brandsList.map((brand, idx) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrandIdx(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                    activeBrandIdx === idx
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                  }`}
                >
                  {brand}
                </button>
              ))}
              {hasFilters && (
                <button
                  onClick={() => {
                    setSearch('')
                    setActiveCategoryIdx(0)
                    setActiveBrandIdx(0)
                  }}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mr-1"
                >
                  <X className="w-3.5 h-3.5" /> پاک کردن
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Models grid */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">هیچ مدلی با فیلترهای انتخابی یافت نشد.</p>
              <button
                onClick={() => {
                  setSearch('')
                  setActiveCategoryIdx(0)
                  setActiveBrandIdx(0)
                }}
                className="mt-4 text-primary text-sm hover:underline"
              >
                پاک کردن فیلترها
              </button>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground text-sm mb-6">
                نمایش {filtered.length} مدل
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((model) => (
                  <Link
                    key={model.id}
                    href={`/models/${model.id}`}
                    className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_24px_oklch(0.62_0.21_37/10%)]"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-secondary overflow-hidden">
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-sm">
                          {model.brand}
                        </span>
                      </div>
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-0.5">
                        {model.category}
                      </p>
                      <h3 className="text-foreground font-black text-lg leading-tight mb-1">
                        {model.name}
                      </h3>
                      <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                        {model.tagline}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-xs text-primary font-bold group-hover:gap-1.5 transition-all">
                          <ArrowLeft className="w-3 h-3" /> جزئیات
                        </span>
                        <span className="text-primary text-xs font-bold" dir="ltr">{model.cc} cc · {model.weight} kg</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
