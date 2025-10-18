export default function FounderIntro() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/experienced-farmer-in-field-portrait.jpg"
              alt="Founder with farming experience"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Our Legacy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                30+ Years of Farming Excellence
              </h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mahin Agro Care was founded on a simple belief: sustainable farming is the future. With over three decades
              of hands-on experience in agrochemical solutions and farming practices, our founder has dedicated his life
              to helping farmers in Dinajpur achieve better yields while protecting the environment.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              What started as a small operation has grown into a trusted partner for hundreds of farmers. Today, we
              focus exclusively on organic solutions, combining traditional farming wisdom with modern agricultural
              science to deliver products that truly make a difference.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-foreground">Certified organic products</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-foreground">Direct farmer support and consultancy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-foreground">Sustainable farming practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
