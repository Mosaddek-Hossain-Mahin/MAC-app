import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const products = [
  {
    id: "neem",
    name: "Neem Oil",
    description: "Natural pest control solution for all crop types",
    image: "/neem-oil-bottle-organic-pesticide.jpg",
  },
  {
    id: "trichoderma",
    name: "Trichoderma",
    description: "Beneficial fungus for soil health and disease prevention",
    image: "/trichoderma-powder-organic-fertilizer.jpg",
  },
  {
    id: "compost",
    name: "Organic Compost",
    description: "Rich, nutrient-dense compost for soil enrichment",
    image: "/organic-compost-soil-amendment.jpg",
  },
  {
    id: "kit",
    name: "Crop Health Kit",
    description: "Complete solution for comprehensive crop care",
    image: "/crop-health-kit-farming-tools.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Products</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Discover our range of organic farming solutions designed to enhance crop health and soil quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products#${product.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border">
                <CardContent className="p-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
                  <CardDescription className="text-foreground/70">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
