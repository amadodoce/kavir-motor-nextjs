'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServiceTypes } from '@/components/service/service-types'
import { ReservationForm } from '@/components/service/reservation-form'
import { serviceCenters } from '@/lib/data'
import { MapPin, Phone, Clock, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <main>
      <Navbar />

      {/* Page hero */}
      <section className="relative pt-28 pb-14 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.08_0_0)_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6" aria-label="مسیر صفحه">
            <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-foreground">سرویس</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              مراکز سرویس معتبر
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4 text-balance">
            رزرو{' '}
            <span className="text-primary">سرویس</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            وقت سرویس دوره‌ای موتورسیکلت خود را با تکنسین‌های معتبر ما رزرو کنید. سریع، قابل اعتماد و شفاف — به روش کویر موتور.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: '۳۰+', label: 'مرکز سرویس' },
              { value: '۲۰۰+', label: 'تکنسین متخصص' },
              { value: '۵۰,۰۰۰+', label: 'سرویس انجام‌شده' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service types picker */}
      <section className="py-10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTypes selectedId={selectedService} onSelect={setSelectedService} />
        </div>
      </section>

      {/* Reservation form */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
              رزرو{' '}
              <span className="text-primary">وقت سرویس</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              اطلاعات خود را وارد کنید و ما ظرف ۲ ساعت رزرو شما را تایید می‌کنیم.
            </p>
          </div>
          <ReservationForm preSelectedService={selectedService} />
        </div>
      </section>

      {/* Service centers */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
              مراکز سرویس{' '}
              <span className="text-primary">ما</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              نزدیک‌ترین مرکز سرویس معتبر کویر موتور را بیابید.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCenters.map((center) => (
              <div
                key={center.id}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-base mb-3">
                  {center.name}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{center.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <Phone className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <a
                      href={`tel:${center.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      {center.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{center.hours}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-foreground mb-6">
            سوالات متداول
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: 'چند روز قبل باید رزرو کنم؟',
                a: 'توصیه می‌کنیم حداقل ۲ تا ۳ روز قبل رزرو کنید تا زمان دلخواه شما تضمین شود.',
              },
              {
                q: 'آیا باید مدارک همراه داشته باشم؟',
                a: 'لطفاً کارت ماشین موتورسیکلت و در صورت وجود سوابق سرویس قبلی را همراه بیاورید.',
              },
              {
                q: 'سرویس اساسی چقدر طول می‌کشد؟',
                a: 'سرویس اساسی معمولی (۱۰,۰۰۰ کیلومتر) معمولاً ۳ تا ۴ ساعت طول می‌کشد. سالن انتظار راحت با WiFi در اختیار شماست.',
              },
              {
                q: 'آیا قطعات گارانتی دارند؟',
                a: 'تمام قطعات اصلی OEM نصب‌شده در مراکز ما دارای گارانتی ۱۲ ماهه یا ۱۰,۰۰۰ کیلومتر هستند.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-foreground font-bold text-sm mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
