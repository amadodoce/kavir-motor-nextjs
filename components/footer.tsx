import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Share2, PlayCircle, Globe } from 'lucide-react'

const footerLinks = {
  quick: [
    { label: 'مدل‌ها', href: '/models' },
    { label: 'برندها', href: '/models' },
    { label: 'نمایندگی‌ها', href: '/dealers' },
    { label: 'سرویس', href: '/service' },
    { label: 'درباره ما', href: '/about' },
  ],
  support: [
    { label: 'رزرو سرویس', href: '/service' },
    { label: 'یافتن نمایندگی', href: '/dealers' },
    { label: 'گارانتی', href: '/warranty' },
    { label: 'قطعات و لوازم جانبی', href: '/parts' },
    { label: 'تماس با ما', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="کویر موتور"
                width={292}
                height={131}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              نمایندگی رسمی برندهای موتورسیکلت ممتاز در ایران. دورتر برانید، جسورانه‌تر برانید.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="اینستاگرام"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="یوتیوب"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="وبسایت"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-foreground font-bold text-sm mb-4 uppercase tracking-widest">
              دسترسی سریع
            </h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-foreground font-bold text-sm mb-4 uppercase tracking-widest">
              پشتیبانی
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold text-sm mb-4 uppercase tracking-widest">
              تماس
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm" dir="ltr">۰۲۱-۴۴۵۵۶۶۷۷</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm" dir="ltr">info@kavir-motor.ir</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  خیابان آزادی، تهران، ایران
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} کویر موتور. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-muted-foreground text-xs hover:text-primary transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="text-muted-foreground text-xs hover:text-primary transition-colors">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
