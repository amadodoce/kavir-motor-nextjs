import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Clock, ChevronLeft, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'یافتن نمایندگی — کویر موتور',
  description: 'نزدیک‌ترین نمایندگی رسمی کویر موتور را در سراسر ایران بیابید.',
}

const dealers = [
  {
    id: 1,
    name: 'کویر موتور — تهران مرکزی',
    address: 'خیابان آزادی، تهران',
    phone: '۰۲۱-۴۴۵۵۶۶۷۷',
    hours: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۹:۰۰',
    brands: ['KTM', 'Kawasaki', 'Husqvarna', 'GASGAS'],
    city: 'تهران',
  },
  {
    id: 2,
    name: 'کویر موتور — تهران شرق',
    address: 'بزرگراه رسالت، تهران',
    phone: '۰۲۱-۷۷۸۸۹۹۰۰',
    hours: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۹:۰۰',
    brands: ['KTM', 'Vespa', 'Aprilia'],
    city: 'تهران',
  },
  {
    id: 3,
    name: 'کویر موتور — اصفهان',
    address: 'خیابان چهارباغ عباسی، اصفهان',
    phone: '۰۳۱-۳۳۴۴۵۵۶۶',
    hours: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۸:۰۰',
    brands: ['KTM', 'Kawasaki', 'GASGAS'],
    city: 'اصفهان',
  },
  {
    id: 4,
    name: 'کویر موتور — مشهد',
    address: 'بلوار امام رضا، مشهد',
    phone: '۰۵۱-۲۲۳۳۴۴۵۵',
    hours: 'شنبه تا پنجشنبه: ۸:۳۰ تا ۱۸:۳۰',
    brands: ['KTM', 'Husqvarna', 'CFMOTO'],
    city: 'مشهد',
  },
  {
    id: 5,
    name: 'کویر موتور — شیراز',
    address: 'بلوار زند، شیراز',
    phone: '۰۷۱-۳۳۲۲۱۱۰۰',
    hours: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۸:۰۰',
    brands: ['KTM', 'Kawasaki', 'Zontes'],
    city: 'شیراز',
  },
  {
    id: 6,
    name: 'کویر موتور — تبریز',
    address: 'خیابان ولیعصر، تبریز',
    phone: '۰۴۱-۵۵۶۶۷۷۸۸',
    hours: 'شنبه تا پنجشنبه: ۹:۰۰ تا ۱۸:۳۰',
    brands: ['KTM', 'GASGAS', 'Aprilia'],
    city: 'تبریز',
  },
]

const cities = ['همه', 'تهران', 'اصفهان', 'مشهد', 'شیراز', 'تبریز']

export default function DealersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6" aria-label="مسیر صفحه">
            <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-foreground">نمایندگی‌ها</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-2">
                یافتن <span className="text-primary">نمایندگی</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {dealers.length} نمایندگی رسمی در سراسر کشور. نزدیک‌ترین را بیابید.
              </p>
            </div>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm shrink-0"
            >
              رزرو سرویس
            </Link>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* City filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            {cities.map((city) => (
              <span
                key={city}
                className={`px-3 py-1.5 rounded-md text-xs font-bold cursor-default select-none ${
                  city === 'همه'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors'
                }`}
              >
                {city}
              </span>
            ))}
          </div>

          {/* Dealers grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dealers.map((dealer) => (
              <div
                key={dealer.id}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                {/* City badge */}
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 rounded px-2 py-0.5 mb-3">
                  {dealer.city}
                </span>

                <h2 className="text-foreground font-bold text-base mb-4 leading-snug">
                  {dealer.name}
                </h2>

                <ul className="space-y-2.5 mb-4">
                  <li className="flex items-start gap-2.5 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{dealer.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href={`tel:${dealer.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      {dealer.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{dealer.hours}</span>
                  </li>
                </ul>

                {/* Brand tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {dealer.brands.map((brand) => (
                    <span
                      key={brand}
                      className="text-[10px] font-bold bg-secondary text-muted-foreground border border-border rounded px-2 py-0.5"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
            آماده رانندگی هستید؟
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            مجموعه کامل ما را مرور کنید و موتورسیکلت ساخته‌شده برای سبک رانندگی خود را بیابید.
          </p>
          <Link
            href="/models"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            مشاهده مدل‌ها
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
