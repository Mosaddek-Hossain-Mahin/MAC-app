import HeroBanner from "@/components/home/hero-banner"
import FeaturedProducts from "@/components/home/featured-products"
import FounderIntro from "@/components/home/founder-intro"
import CallToAction from "@/components/home/call-to-action"

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <FounderIntro />
      <CallToAction />
    </main>
  )
}
