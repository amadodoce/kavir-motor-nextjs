import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const _vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'کویر موتور — نمایندگی رسمی موتورسیکلت',
  description:
    'کویر موتور نمایندگی رسمی برندهای KTM، کاوازاکی، هوسکوارنا، GASGAS، وسپا، آپریلیا، زونتس و CFMOTO در ایران. مدل‌ها را کشف کنید، سرویس رزرو کنید و نزدیک‌ترین نمایندگی را بیابید.',
  keywords: 'موتورسیکلت، KTM، کاوازاکی، هوسکوارنا، کویر موتور، موتوکراس، آدونچر، سرویس',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0d0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-background">
      <body className={`${_vazirmatn.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
