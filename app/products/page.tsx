import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: "neem",
      name: "Neem Oil",
      category: "Organic Pesticide",
      price: "৳ 450-650",
      image: "/neem-oil-bottle-organic-pesticide.jpg",
      description: "Pure, cold-pressed neem oil for natural pest control",
      benefits: [
        "Effective against aphids, mites, and whiteflies",
        "Safe for beneficial insects",
        "No chemical residue",
        "Suitable for all crop types",
      ],
      usage: "Mix 5-10ml per liter of water. Spray on affected plants every 7-10 days.",
    },
    {
      id: "trichoderma",
      name: "Trichoderma",
      category: "Organic Fungicide",
      price: "৳ 350-500",
      image: "/trichoderma-powder-organic-fertilizer.jpg",
      description: "Beneficial fungus for soil health and disease prevention",
      benefits: [
        "Prevents fungal diseases",
        "Improves soil structure",
        "Enhances nutrient absorption",
        "Increases crop yield by 15-20%",
      ],
      usage: "Mix 10g per kg of soil or 5g per liter of water. Apply during planting.",
    },
    {
      id: "compost",
      name: "Organic Compost",
      category: "Soil Amendment",
      price: "৳ 200-350",
      image: "/organic-compost-soil-amendment.jpg",
      description: "Rich, nutrient-dense compost for soil enrichment",
      benefits: [
        "Improves soil fertility",
        "Increases water retention",
        "Promotes beneficial microorganisms",
        "Reduces need for chemical fertilizers",
      ],
      usage: "Mix 2-3 kg per square meter of soil. Apply before planting or as top dressing.",
    },
    {
      id: "kit",
      name: "Crop Health Kit",
      category: "Complete Solution",
      price: "৳ 1,200-1,500",
      image: "/crop-health-kit-farming-tools.jpg",
      description: "Complete solution for comprehensive crop care",
      benefits: [
        "Includes Neem Oil, Trichoderma, and Compost",
        "Covers entire growing season",
        "Cost-effective bundle",
        "Recommended for new farmers",
      ],
      usage: "Follow individual product instructions. Use in combination for best results.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Our Products</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
              Premium organic farming solutions for healthy crops and sustainable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                className="border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Image */}
                  <div>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-1">
                          {product.category}
                        </p>
                        <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                        <p className="text-lg font-semibold text-primary mt-2">{product.price}</p>
                      </div>

                      <p className="text-foreground/80">{product.description}</p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                              <span className="text-accent mt-1">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Usage:</h4>
                        <p className="text-sm text-foreground/70">{product.usage}</p>
                      </div>
                    </div>

                    <Link href="/consultancy" className="mt-6">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Request Order
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Our Products</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              What makes M A C products the choice of farmers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-2xl">🌿</div>
              <h3 className="text-xl font-semibold text-foreground">100% Organic</h3>
              <p className="text-foreground/70">
                All products are certified organic with no harmful chemicals or synthetic additives
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-2xl">✓</div>
              <h3 className="text-xl font-semibold text-foreground">Tested & Proven</h3>
              <p className="text-foreground/70">
                Developed and tested over 30 years with proven results from hundreds of farmers
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-2xl">💚</div>
              <h3 className="text-xl font-semibold text-foreground">Environmentally Safe</h3>
              <p className="text-foreground/70">
                Protects soil health, beneficial insects, and the environment for sustainable farming
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6 text-balance">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Our agricultural experts can help you select the perfect products for your specific crops and farming needs.
          </p>
          <Link href="/consultancy">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Get Expert Advice
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
