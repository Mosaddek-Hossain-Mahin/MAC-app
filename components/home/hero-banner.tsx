import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">Welcome to MAC Agro Care</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Sustainable Farming, Naturally Grown
              </h1>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg text-balance">
              Over 30 years of expertise in organic farming solutions. We provide premium organic pesticides,
              fertilizers, and agricultural consultancy to help farmers in Dinajpur and beyond achieve sustainable,
              healthy crops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/consultancy">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  Get Agro Advice
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/organic-farm-field-with-green-crops-and-farmer.jpg"
              alt="Organic farm with healthy green crops"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
