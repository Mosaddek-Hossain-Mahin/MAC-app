import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6 text-balance">
          Ready to Transform Your Farm?
        </h2>
        <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Get personalized agricultural consultancy from our experts. Whether you're looking for product recommendations
          or farming advice, we're here to help you succeed.
        </p>
        <Link href="/consultancy">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Get Agro Advice Today
          </Button>
        </Link>
      </div>
    </section>
  )
}
