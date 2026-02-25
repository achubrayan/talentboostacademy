/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * Testimonials Page: Client success stories and impact
 * Typography: Cormorant Garamond headlines, Outfit body
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Quote, Star, TrendingUp, Users, Award } from "lucide-react";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    quote: "Talent Boost Academy transformed our HR operations completely. Their strategic insights helped us reduce turnover by 40% and build a stronger leadership pipeline. The team's expertise in workforce analytics gave us visibility we never had before.",
    author: "Sarah Mitchell",
    role: "Chief People Officer",
    company: "Global Tech Solutions",
    industry: "Technology",
    featured: true,
  },
  {
    quote: "The executive training program exceeded our expectations. Our management team now operates with clarity, confidence, and measurable results. The customized approach ensured every session was relevant to our specific challenges.",
    author: "James Okonkwo",
    role: "CEO",
    company: "Innovate Africa Group",
    industry: "Financial Services",
    featured: true,
  },
  {
    quote: "Their HR analytics solutions gave us visibility we never had before. We now make data-driven decisions that directly impact our bottom line. The dashboards they built have become essential to our monthly reviews.",
    author: "Elena Rodriguez",
    role: "VP of Human Resources",
    company: "Continental Industries",
    industry: "Manufacturing",
    featured: true,
  },
  {
    quote: "Working with Talent Boost Academy on our organizational redesign was a game-changer. They brought fresh perspectives and practical solutions that we could implement immediately. Our efficiency has improved by 35%.",
    author: "Michael Chen",
    role: "COO",
    company: "Pacific Ventures",
    industry: "Investment",
    featured: false,
  },
  {
    quote: "The leadership development program they designed for our mid-level managers has produced remarkable results. We've seen improved team performance and better cross-functional collaboration across the board.",
    author: "Amara Diallo",
    role: "Director of Talent",
    company: "Sahara Enterprises",
    industry: "Energy",
    featured: false,
  },
  {
    quote: "Their AI-powered recruitment solutions helped us cut our time-to-hire by 50% while improving candidate quality. The technology integration was seamless, and the support has been exceptional.",
    author: "David Thompson",
    role: "Head of Recruitment",
    company: "NexGen Consulting",
    industry: "Professional Services",
    featured: false,
  },
  {
    quote: "The online degree program through their partnership with BIA allowed me to advance my career while working full-time. The flexibility and quality of education exceeded my expectations.",
    author: "Patricia Mensah",
    role: "HR Manager",
    company: "Accra Financial Group",
    industry: "Banking",
    featured: false,
  },
  {
    quote: "Talent Boost Academy's consulting team helped us navigate a complex merger with minimal disruption. Their change management expertise was invaluable during a critical transition period.",
    author: "Robert Kimani",
    role: "Managing Director",
    company: "East African Holdings",
    industry: "Conglomerate",
    featured: false,
  },
];

const impactStats = [
  { value: "40%", label: "Average Reduction in Turnover", icon: TrendingUp },
  { value: "500+", label: "Professionals Trained", icon: Users },
  { value: "50+", label: "Organizations Served", icon: Award },
  { value: "95%", label: "Client Satisfaction Rate", icon: Star },
];

export default function Testimonials() {
  const { t } = useTranslation();
  useSEO({
    title: "Testimonials | Client Success Stories",
    description: "Read testimonials from 50+ organizations we've helped transform. Discover how our HR consulting, talent development, and analytics solutions delivered real results.",
    keywords: [
      "testimonials",
      "client reviews",
      "success stories",
      "HR consulting reviews",
      "talent development results",
      "client satisfaction",
      "HR solutions reviews",
    ],
    ogTitle: "Testimonials | Client Success Stories",
    ogDescription: "See what our clients say about their transformation with Talent Boost Academy.",
  });

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const otherTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Testimonials
            </span>
            <h1 className="text-white mb-6">
              Client Success Stories &{" "}
              <span className="text-gold">Real Impact</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover how organizations across industries have transformed their 
              operations, developed their talent, and achieved measurable results 
              with Talent Boost Academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Featured Stories</span>
            <h2 className="mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid lg:grid-cols-4 gap-0">
                  <div className="lg:col-span-3 p-8 md:p-10">
                    <Quote className="w-12 h-12 text-primary/10 mb-6" />
                    <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-serif font-bold text-lg">
                          {testimonial.author.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-secondary/50 p-8 md:p-10 flex flex-col justify-center">
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      Industry
                    </div>
                    <div className="font-semibold text-lg mb-4">{testimonial.industry}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">More Success Stories</span>
            <h2 className="mb-6">
              Trusted Across <span className="text-primary">Industries</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/10 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-primary font-medium uppercase tracking-wider">
                      {testimonial.industry}
                    </div>
                    <div className="flex gap-0.5 mt-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join the growing list of organizations that have transformed their 
              operations and elevated their talent with Talent Boost Academy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#1E1E28] font-semibold px-8 shadow-lg"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
