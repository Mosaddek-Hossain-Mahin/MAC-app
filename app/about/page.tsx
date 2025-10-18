import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "Started with a vision to revolutionize farming practices in Dinajpur",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Expanded product line and began serving farmers across multiple districts",
    },
    {
      year: "2015",
      title: "Organic Transition",
      description: "Shifted focus entirely to organic and sustainable farming solutions",
    },
    {
      year: "2025",
      title: "Digital Era",
      description: "Launched online consultancy and e-commerce platform for wider reach",
    },
  ]

  const values = [
    {
      title: "Sustainability",
      description: "We believe in farming practices that protect the environment for future generations",
      icon: "🌱",
    },
    {
      title: "Trust",
      description: "Built on 30+ years of proven results and farmer testimonials",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Combining traditional wisdom with modern agricultural science",
      icon: "💡",
    },
    {
      title: "Community",
      description: "Supporting local farmers and contributing to rural development",
      icon: "👥",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">About Mahin Agro Care</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
              Three decades of dedication to sustainable farming and organic solutions in Dinajpur, Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/founder-portrait-mahin-agro-care.jpg"
                alt="Founder of Mahin Agro Care"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Our Founder</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  A Lifetime Commitment to Organic Farming
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our founder began his journey in agriculture over 30 years ago, starting with traditional farming
                methods in Dinajpur. Witnessing the challenges farmers faced with chemical pesticides and their impact
                on soil health, he made a pivotal decision to transition to organic farming solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Through years of research, experimentation, and collaboration with agricultural experts, he developed a
                range of organic products that not only protect crops but also enhance soil quality and sustainability.
                Today, his legacy continues through Mahin Agro Care, serving hundreds of farmers with trusted, proven
                solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                His mission remains simple: help farmers achieve better yields while protecting the environment and
                building a sustainable future for agriculture in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Journey</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Key milestones in our evolution from traditional farming to organic solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{milestone.year}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">{milestone.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose Mahin Agro Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Proven Track Record</h3>
              <p className="text-foreground/70">
                30+ years of successful farming solutions trusted by hundreds of farmers across Dinajpur
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">100% Organic</h3>
              <p className="text-foreground/70">
                All our products are certified organic, safe for soil, crops, and the environment
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Support</h3>
              <p className="text-foreground/70">
                Direct access to agricultural experts for personalized consultancy and guidance
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
