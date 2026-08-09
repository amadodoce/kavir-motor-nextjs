import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background overflow-hidden py-20">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto px-4 text-center">
          {/* 404 number */}
          <div
            className="text-[120px] sm:text-[160px] font-black leading-none text-foreground/5 select-none mb-0"
            aria-hidden="true"
          >
            ۴۰۴
          </div>

          <div className="-mt-6 sm:-mt-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                صفحه پیدا نشد
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3 text-balance">
              به نظر می‌رسد مسیر اشتباهی آمدید
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              صفحه‌ای که دنبالش می‌گردید وجود ندارد یا منتقل شده است. به صفحه اصلی برگردید و موتور خود را پیدا کنید.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                بازگشت به خانه
              </Link>
              <Link
                href="/models"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground font-bold rounded-md hover:bg-secondary/70 transition-colors text-sm border border-border"
              >
                <Search className="w-4 h-4" />
                مشاهده مدل‌ها
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
