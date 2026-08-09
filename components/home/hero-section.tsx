'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const sectionHeight = sectionRef.current?.offsetHeight ?? window.innerHeight
        const maxOffset = Math.max(sectionHeight * 0.18, 120)
        const next = Math.min(window.scrollY * 0.35, maxOffset)
        setParallax(next)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax layer — extends beyond the hero and translates on scroll */}
        <div
          className="absolute left-0 right-0 -top-[20%] h-[140%] will-change-transform"
          style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.05)` }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="موتورسیکلت در حال تردد در کویر"
            fill
            priority
            className="object-cover object-[80%_35%] sm:object-center"
            sizes="100vw"
          />
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_left,oklch(0.08_0_0/90%)_0%,oklch(0.08_0_0/40%)_60%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,oklch(0.08_0_0)_0%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              نمایندگی رسمی موتورسیکلت‌های ممتاز ایران
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-3 text-balance">
            کویر موتور
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/80 mb-4 tracking-wide">
            قدرت کویر را حس کنید
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            نمایندگی رسمی KTM، کاوازاکی، هوسکوارنا، GASGAS و بیشتر. موتورسیکلت ایده‌آل خود را بیابید و با اعتماد کامل، فراتر از مرزها بتازید.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/models"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              مشاهده مدل‌ها
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-bold rounded-md hover:bg-secondary/80 transition-colors text-sm border border-border"
            >
              رزرو سرویس
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-foreground/20 animate-pulse" />
        <span className="text-muted-foreground text-xs tracking-widest">اسکرول</span>
      </div>
    </section>
  )
}
