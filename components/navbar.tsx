'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'مدل‌ها', href: '/models' },
  {
    label: 'برندها',
    href: '#brands',
    dropdown: ['KTM', 'Kawasaki', 'Husqvarna', 'GASGAS', 'Vespa', 'Aprilia'],
  },
  { label: 'نمایندگی‌ها', href: '/dealers' },
  { label: 'سرویس', href: '/service' },
  { label: 'درباره ما', href: '/about' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-1.5 group">
            <Image
              src="/images/logo.png"
              alt="کویر موتور"
              width={292}
              height={131}
              className="h-full w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    )}
                    onClick={() => setBrandsOpen(!brandsOpen)}
                    onBlur={() => setTimeout(() => setBrandsOpen(false), 150)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('w-3.5 h-3.5 transition-transform', brandsOpen && 'rotate-180')}
                    />
                  </button>
                  {brandsOpen && (
                    <div className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-lg shadow-xl shadow-black/50 py-1 z-50">
                      {link.dropdown.map((brand) => (
                        <Link
                          key={brand}
                          href={`/models?brand=${brand.toLowerCase()}`}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-right"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/dealers"
              className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              یافتن نمایندگی
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-right',
                  pathname === link.href
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dealers"
              className="mt-2 px-4 py-2.5 text-sm font-bold bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              یافتن نمایندگی
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
