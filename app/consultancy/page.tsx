"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ConsultancyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    cropType: "",
    issue: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        district: "",
        cropType: "",
        issue: "",
        message: "",
      })
    }, 3000)
  }

  const consultationTypes = [
    {
      title: "Product Selection",
      description: "Get personalized recommendations for your specific crops and farming needs",
      icon: "🎯",
    },
    {
      title: "Crop Health Assessment",
      description: "Expert analysis of your crop issues and organic solutions",
      icon: "🔍",
    },
    {
      title: "Soil Analysis",
      description: "Guidance on soil improvement and nutrient management",
      icon: "🌍",
    },
    {
      title: "Farming Techniques",
      description: "Learn sustainable farming practices and best methods",
      icon: "📚",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Agricultural Consultancy</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
              Get expert guidance from our experienced agricultural consultants. Free consultancy for all farmers.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How We Can Help</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Our consultants provide comprehensive support across all aspects of organic farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <CardTitle className="text-foreground">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form & Contact */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-foreground/70 mb-8">
                  Reach out to us through any of these channels. We respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70">+880 1XXX-XXXXXX</p>
                    <p className="text-sm text-foreground/60">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">info@mahinagrocare.com</p>
                    <p className="text-sm text-foreground/60">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/70">Dinajpur, Bangladesh</p>
                    <p className="text-sm text-foreground/60">Serving all districts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-foreground/70">Monday - Saturday</p>
                    <p className="text-sm text-foreground/60">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Request Consultancy</CardTitle>
                  <CardDescription>Fill out the form below and our experts will contact you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="text-4xl mb-4">✓</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-foreground/70">
                        Your consultancy request has been received. We'll contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+880 1XXX-XXXXXX"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">District *</label>
                          <Select
                            value={formData.district}
                            onValueChange={(value) => handleSelectChange("district", value)}
                          >
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Select your district" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dinajpur">Dinajpur</SelectItem>
                              <SelectItem value="rangpur">Rangpur</SelectItem>
                              <SelectItem value="thakurgaon">Thakurgaon</SelectItem>
                              <SelectItem value="nilphamari">Nilphamari</SelectItem>
                              <SelectItem value="kurigram">Kurigram</SelectItem>
                              <SelectItem value="gaibandha">Gaibandha</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Crop Type *</label>
                          <Select
                            value={formData.cropType}
                            onValueChange={(value) => handleSelectChange("cropType", value)}
                          >
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Select crop type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="rice">Rice</SelectItem>
                              <SelectItem value="wheat">Wheat</SelectItem>
                              <SelectItem value="vegetables">Vegetables</SelectItem>
                              <SelectItem value="fruits">Fruits</SelectItem>
                              <SelectItem value="pulses">Pulses</SelectItem>
                              <SelectItem value="spices">Spices</SelectItem>
                              <SelectItem value="mixed">Mixed Crops</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Main Issue *</label>
                          <Select value={formData.issue} onValueChange={(value) => handleSelectChange("issue", value)}>
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Select issue" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pest">Pest Control</SelectItem>
                              <SelectItem value="disease">Disease Management</SelectItem>
                              <SelectItem value="soil">Soil Health</SelectItem>
                              <SelectItem value="yield">Improving Yield</SelectItem>
                              <SelectItem value="product">Product Selection</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your farming situation and what you need help with..."
                          rows={5}
                          className="bg-background border-border"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-base"
                      >
                        Submit Consultancy Request
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is consultancy free?",
                a: "Yes, all consultancy services are completely free for farmers. We believe in supporting the farming community.",
              },
              {
                q: "How long does it take to get a response?",
                a: "We typically respond within 24 hours. For urgent issues, you can call us directly during business hours.",
              },
              {
                q: "Can I get consultancy for crops other than rice and wheat?",
                a: "Our experts have experience with all types of crops including vegetables, fruits, pulses, and spices.",
              },
              {
                q: "Do you provide on-farm consultancy?",
                a: "Yes, we can arrange on-farm visits for detailed assessments. Please mention this in your consultancy request.",
              },
              {
                q: "What if I need urgent help?",
                a: "Call us directly at +880 1XXX-XXXXXX during business hours (9 AM - 6 PM, Monday-Saturday) for immediate assistance.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
