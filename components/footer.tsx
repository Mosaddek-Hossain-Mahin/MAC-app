import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mahin Agro Care</h3>
            <p className="text-sm opacity-90">
              30+ years of expertise in sustainable farming solutions for Dinajpur, Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/consultancy" className="hover:underline">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#neem" className="hover:underline">
                  Neem Oil
                </Link>
              </li>
              <li>
                <Link href="/products#trichoderma" className="hover:underline">
                  Trichoderma
                </Link>
              </li>
              <li>
                <Link href="/products#compost" className="hover:underline">
                  Organic Compost
                </Link>
              </li>
              <li>
                <Link href="/products#kit" className="hover:underline">
                  Crop Health Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Dinajpur, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@mahinagrocare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Mahin Agro Care. All rights reserved. Sustainable farming for a better future.</p>
        </div>
      </div>
    </footer>
  )
}
