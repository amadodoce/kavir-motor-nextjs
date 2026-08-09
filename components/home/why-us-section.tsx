import { ShieldCheck, Wrench, Package } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'نمایندگی رسمی',
    description:
      'نمایندگی رسمی معتبر تمام برندها. هر موتورسیکلت با گارانتی کارخانه و مدارک کامل ارائه می‌شود.',
  },
  {
    icon: Wrench,
    title: 'سرویس سراسری',
    description:
      'بیش از ۳۰ مرکز سرویس معتبر در سراسر ایران با تکنسین‌های آموزش‌دیده و قطعات اصلی.',
  },
  {
    icon: Package,
    title: 'قطعات اصلی',
    description:
      'دسترسی به کاتالوگ کامل قطعات OEM برای تمام برندها. تضمین اصالت با ارسال سریع به هر مرکز سرویس.',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground text-balance">
            چرا{' '}
            <span className="text-primary">کویر موتور</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            سه رکن اعتماد که ما را از بقیه متمایز می‌کند.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
