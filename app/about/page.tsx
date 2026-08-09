import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronLeft, ShieldCheck, Wrench, Package, Users, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'درباره ما — کویر موتور',
  description: 'بزرگ‌ترین نمایندگی رسمی موتورسیکلت ایران. داستان، ماموریت و برندهای ما را بشناسید.',
}

const stats = [
  { value: '۱۵+', label: 'سال سابقه' },
  { value: '۳۰+', label: 'نمایندگی در سراسر کشور' },
  { value: '۲۰۰+', label: 'تکنسین متخصص' },
  { value: '۵۰,۰۰۰+', label: 'مشتری راضی' },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'رسمی و قابل اعتماد',
    description:
      'هر برندی که نمایندگی آن را داریم کاملاً مجاز است. تمام موتورسیکلت‌ها با گارانتی کارخانه، مدارک اصلی و پشتیبانی کامل بعد از فروش ارائه می‌شوند.',
  },
  {
    icon: Wrench,
    title: 'سرویس تخصصی',
    description:
      'تکنسین‌های ما توسط هر برند آموزش‌دیده و دارای گواهینامه هستند. از قطعات اصلی OEM استفاده می‌کنیم و پروتکل‌های سرویس سازنده را رعایت می‌کنیم.',
  },
  {
    icon: Package,
    title: 'قطعات اصلی',
    description:
      'کاتالوگ کامل قطعات OEM برای تمام برندهایی که نمایندگی آن‌ها را داریم موجود است، با ارسال سریع به هر کدام از مراکز سرویس.',
  },
  {
    icon: Users,
    title: 'جامعه در اولویت',
    description:
      'کویر موتور فقط یک نمایندگی نیست — یک جامعه است. هر سال تورها، روزهای پیست و رویدادهای آفرود در سراسر کشور برگزار می‌کنیم.',
  },
  {
    icon: Globe,
    title: 'گستره سراسری',
    description:
      'از تهران تا مشهد، از اصفهان تا شیراز، شبکه نمایندگی‌ها و مراکز سرویس ما مطمئن می‌شود که هیچ‌گاه از پشتیبانی متخصص دور نباشید.',
  },
  {
    icon: Award,
    title: 'جایزه بهترین نمایندگی',
    description:
      'به عنوان بهترین نمایندگی KTM و Kawasaki در منطقه خاورمیانه برای سه سال متوالی شناخته شده‌ایم.',
  },
]

const brands = [
  'KTM',
  'Kawasaki',
  'Husqvarna',
  'GASGAS',
  'Vespa',
  'aprilia',
  'ZONTES',
  'CFMOTO',
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8" aria-label="مسیر صفحه">
            <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
            <ChevronLeft className="w-3 h-3" />
            <span className="text-foreground">درباره ما</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  داستان ما
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4 leading-tight text-balance">
                رانندگی فراتر از{' '}
                <span className="text-primary">مرزها</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                کویر موتور بیش از ۱۵ سال پیش بر پایه یک اشتیاق شکل گرفت — اتصال راکبان ایرانی به بهترین موتورسیکلت‌های جهان. آنچه به عنوان یک نمایندگی کوچک در تهران آغاز شد، به معتمدترین گروه موتورسیکلت کشور تبدیل شده است.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                امروز نمایندگی رسمی هشت برند جهانی هستیم و بیش از ۳۰ نمایندگی و مرکز سرویس از ساحل دریای خزر تا خلیج فارس را اداره می‌کنیم. ماموریت ما هرگز تغییر نکرده: موتور مناسب را در اختیار هر راکب قرار دهیم.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/models"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
                >
                  مشاهده مدل‌ها
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground font-bold rounded-md hover:bg-secondary/70 transition-colors text-sm border border-border"
                >
                  رزرو سرویس
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-16 sm:py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2 text-balance">
              چه چیزی{' '}
              <span className="text-primary">برای ما مهم است</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              شش اصلی که هر تصمیم ما را از کف نمایشگاه تا تخت سرویس هدایت می‌کند.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-base mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands we carry */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              برندهایی که{' '}
              <span className="text-primary">نمایندگی داریم</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              هشت تولیدکننده جهانی، یک نمایندگی رسمی.
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {brands.map((brand, idx) => (
              <Link
                key={`${brand}-${idx}`}
                href={`/models?brand=${brand.toLowerCase()}`}
                className="flex items-center justify-center h-14 sm:h-16 rounded-lg bg-card border border-border text-foreground font-bold text-xs sm:text-sm tracking-wide hover:border-primary/40 hover:text-primary hover:bg-secondary transition-all duration-200"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
            آماده یافتن موتور بعدی خود هستید؟
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            از نزدیک‌ترین نمایندگی دیدن کنید یا مجموعه کامل ما را آنلاین مرور کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/models"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              مشاهده مدل‌ها
            </Link>
            <Link
              href="/dealers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground font-bold rounded-md hover:bg-secondary transition-colors text-sm border border-border"
            >
              یافتن نمایندگی
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
