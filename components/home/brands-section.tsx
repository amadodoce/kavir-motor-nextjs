import Link from 'next/link'

const brands = [
  { name: 'KTM', href: '/models?brand=ktm', highlight: true },
  { name: 'Kawasaki', href: '/models?brand=kawasaki', highlight: false },
  { name: 'Husqvarna', href: '/models?brand=husqvarna', highlight: false },
  { name: 'GASGAS', href: '/models?brand=gasgas', highlight: false },
  { name: 'GASGAS', href: '/models?brand=gasgas', highlight: false },
  { name: 'Vespa', href: '/models?brand=vespa', highlight: false },
  { name: 'aprilia', href: '/models?brand=aprilia', highlight: false },
  { name: 'ZONTES', href: '/models?brand=zontes', highlight: false },
  { name: 'CFMOTO', href: '/models?brand=cfmoto', highlight: false },
]

export function BrandsSection() {
  return (
    <section id="brands" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground text-balance">
            برندهای{' '}
            <span className="text-primary">ممتاز ما</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            نمایندگی رسمی معتبرترین تولیدکنندگان موتورسیکلت جهان.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {brands.map((brand, idx) => (
            <Link
              key={`${brand.name}-${idx}`}
              href={brand.href}
              className={`
                flex items-center justify-center h-16 sm:h-20 rounded-lg font-bold text-sm sm:text-base tracking-wide transition-all duration-200 border
                ${
                  brand.highlight
                    ? 'bg-primary text-white border-primary hover:bg-primary/90 shadow-[0_0_20px_oklch(0.62_0.21_37/25%)]'
                    : 'bg-card text-foreground border-border hover:border-primary/40 hover:text-primary hover:bg-secondary'
                }
              `}
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
