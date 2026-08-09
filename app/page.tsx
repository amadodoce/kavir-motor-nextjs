import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { BrandsSection } from '@/components/home/brands-section'
import { FeaturedModels } from '@/components/home/featured-models'
import { WhyUsSection } from '@/components/home/why-us-section'
import { CommunityCta } from '@/components/home/community-cta'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <FeaturedModels />
      <WhyUsSection />
      <CommunityCta />
      <Footer />
    </main>
  )
}
