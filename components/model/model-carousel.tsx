'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, MessageCircle, MapPin } from 'lucide-react'

interface ModelCarouselProps {
  name: string
  brand: string
  category: string
  tagline: string
  cc: number
  weight: number
  mainImage: string
}

// Simulated multiple angle views via CSS filters applied to the same image
const angleFilters = [
  '',
  'brightness(0.8) contrast(1.1)',
  'brightness(1.1) saturate(0.9)',
  'contrast(1.15) brightness(0.9) hue-rotate(10deg)',
  'brightness(0.85) saturate(1.15)',
  'saturate(1.1) brightness(0.95) contrast(1.05)',
]

export function ModelCarousel({
  name,
  brand,
  category,
  tagline,
  cc,
  weight,
  mainImage,
}: ModelCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = angleFilters.length

  // In RTL: "prev" visually = ChevronRight (going right means going back)
  const prev = () => setActiveIndex((i) => (i - 1 + total) % total)
  const next = () => setActiveIndex((i) => (i + 1) % total)

  return (
    <div>
      {/* ── Full-width cinematic hero ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7', minHeight: 380 }}>
        {/* Background motorcycle image */}
        <Image
          src={mainImage}
          alt={name}
          fill
          priority
          className="object-cover object-center transition-all duration-500"
          style={{ filter: angleFilters[activeIndex] }}
          sizes="100vw"
        />

        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* ── Top row: brand badge (right) + spec pills (left) ── */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-6 sm:px-10 pt-6">
          {/* Spec pills — left side in RTL */}
          <div className="flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-1.5">
              <span className="text-white font-bold text-sm" dir="ltr">{cc} cc</span>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-1.5">
              <span className="text-white font-bold text-sm" dir="ltr">{weight} kg</span>
            </div>
          </div>

          {/* Brand + category — right side in RTL */}
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-xs font-bold tracking-wide">{category}</span>
            <span className="bg-primary text-white text-xs font-black px-3 py-1 rounded-sm tracking-widest uppercase">
              {brand}
            </span>
          </div>
        </div>

        {/* ── Centre-right: headline + tagline (RTL: text starts from right) ── */}
        <div className="absolute inset-0 flex flex-col justify-center items-end px-6 sm:px-10 pb-20 max-w-2xl mr-0 ml-auto text-right">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight text-balance mb-3 drop-shadow-xl">
            {name}
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm drop-shadow">
            {tagline}
          </p>
        </div>

        {/* ── Bottom row: CTAs + brand tags ── */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 sm:px-10 pb-6">
          {/* Suspension brand tags — left in RTL */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-white/50 text-xs font-medium tracking-wider">WP XACT</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-white/50 text-xs font-medium tracking-wider">ZEP XACT</span>
          </div>

          {/* CTA buttons — right in RTL */}
          <div className="flex items-center gap-3">
            <Link
              href="/dealers"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-sm text-white font-bold rounded-md hover:bg-black/80 active:scale-95 transition-all text-sm border border-white/20 shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              یافتن نمایندگی
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 active:scale-95 transition-all text-sm shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              استعلام قیمت
            </Link>
          </div>
        </div>

        {/* Side nav arrows — flipped for RTL */}
        <button
          onClick={next}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/75 transition-colors"
          aria-label="تصویر بعدی"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={prev}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/75 transition-colors"
          aria-label="تصویر قبلی"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="bg-[#111] border-t border-border py-4 px-4 sm:px-10">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          {/* Next arrow (RTL: left side) */}
          <button
            onClick={next}
            className="shrink-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            aria-label="تصویر بعدی"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Thumbnails */}
          <div className="flex items-center gap-3 flex-1 justify-center overflow-x-auto scrollbar-none">
            {angleFilters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  activeIndex === idx
                    ? 'border-primary shadow-[0_0_14px_oklch(0.62_0.21_37/50%)] scale-105'
                    : 'border-border hover:border-white/30'
                }`}
                style={{ width: 110, height: 76 }}
                aria-label={`مشاهده تصویر ${idx + 1}`}
                aria-pressed={activeIndex === idx}
              >
                <Image
                  src={mainImage}
                  alt={`${name} نمای ${idx + 1}`}
                  fill
                  className="object-cover"
                  style={{ filter }}
                  sizes="110px"
                />
                {activeIndex === idx && (
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {/* Prev arrow (RTL: right side) */}
          <button
            onClick={prev}
            className="shrink-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            aria-label="تصویر قبلی"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
