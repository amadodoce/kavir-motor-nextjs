import Link from 'next/link'
import Image from 'next/image'

export function CommunityCta() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-border">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/community-bg.png"
              alt="جامعه راکبان کویر موتور"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-background/70" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.08_0_0/80%)_0%,oklch(0.08_0_0/30%)_100%)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-20 px-8 sm:px-12 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3 text-balance">
              به جامعه کویر بپیوندید
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              با هزاران راکب در سراسر ایران ارتباط برقرار کنید. سفرهایتان را به اشتراک بگذارید، مسیرهای جدید کشف کنید و بخشی از چیزی بزرگ‌تر باشید.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                مشاهده داستان‌ها
              </Link>
              <Link
                href="/models"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-md hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                مشاهده مدل‌ها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
