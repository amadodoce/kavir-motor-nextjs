import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const featuredModels = [
  {
    id: 'husqvarna-norden',
    category: 'آدونچر',
    name: 'Norden 901',
    brand: 'Husqvarna',
    tagline: 'هر افقی را بدون محدودیت کاوش کنید.',
    image: '/images/adventure-model.png',
    cc: 889,
    price: 'تماس با نمایندگی',
    badge: 'آدونچر',
  },
  {
    id: 'kawasaki-z900',
    category: 'خیابانی',
    name: 'Z900',
    brand: 'Kawasaki',
    tagline: 'طراحی تهاجمی، عملکرد بی‌امان.',
    image: '/images/sport-model.png',
    cc: 948,
    price: 'تماس با نمایندگی',
    badge: 'خیابانی',
  },
  {
    id: 'ktm-duke-390',
    category: 'خیابانی',
    name: 'Duke 390',
    brand: 'KTM',
    tagline: 'متولد برای عملکرد. ساخته‌شده برای هیجان.',
    image: '/images/ktm-duke-390.png',
    cc: 373,
    price: 'تماس با نمایندگی',
    badge: 'آدونچر',
  },
]

export function FeaturedModels() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground text-balance">
              مدل‌های{' '}
              <span className="text-primary">ویژه</span>
            </h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              موتورسیکلت‌های منتخب برای هر سبک رانندگی.
            </p>
          </div>
          <Link
            href="/models"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> مشاهده همه مدل‌ها
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredModels.map((model) => (
            <div
              key={model.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.62_0.21_37/10%)]"
            >
              {/* Image */}
              <div className="relative h-52 bg-secondary overflow-hidden">
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-xs font-bold bg-card/80 backdrop-blur-sm text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                    {model.badge}
                  </span>
                </div>
                <Image
                  src={model.image}
                  alt={`${model.brand} ${model.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-0.5">
                      {model.brand}
                    </p>
                    <h3 className="text-foreground font-black text-xl leading-tight">
                      {model.name}
                    </h3>
                  </div>
                  <span className="text-primary text-xs font-bold bg-primary/10 border border-primary/20 rounded px-2 py-0.5 whitespace-nowrap" dir="ltr">
                    {model.cc} cc
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{model.tagline}</p>

                <div className="flex items-center justify-between">
                  <span className="text-foreground text-sm font-bold">{model.price}</span>
                  <Link
                    href={`/models/${model.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" /> مشاهده جزئیات
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
