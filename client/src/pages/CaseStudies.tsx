/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * Case Studies Page: Success stories with measurable outcomes
 * Typography: Cormorant Garamond for titles, Outfit for body
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, TrendingUp, Users, Target, Award } from "lucide-react";
import { useTranslation } from 'react-i18next';

const caseStudies = [
  {
    id: 1,
    title: "Global Tech Solutions: Reducing Turnover by 40%",
    company: "Global Tech Solutions",
    industry: "Technology",
    challenge: "High employee turnover in engineering and product teams was costing the company millions in recruitment and training expenses. The company struggled to retain top talent despite competitive salaries.",
    solution: "We implemented a comprehensive talent retention program combining HR analytics, leadership development, and career pathing initiatives.",
    results: [
      { metric: "40%", label: "Turnover Reduction" },
      { metric: "$2.3M", label: "Cost Savings" },
      { metric: "85%", label: "Employee Satisfaction" },
      { metric: "6 months", label: "Time to Impact" },
    ],
    testimonial: "Talent Boost Academy transformed our HR operations. Their strategic insights helped us reduce turnover by 40% and build a stronger leadership pipeline.",
    author: "Sarah Mitchell",
    role: "Chief People Officer",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    slug: "global-tech-solutions",
  },
  {
    id: 2,
    title: "Innovate Africa Group: Building High-Performance Leadership",
    company: "Innovate Africa Group",
    industry: "Consulting",
    challenge: "The organization lacked a structured approach to developing middle managers into executive leaders. Leadership gaps were affecting strategic execution and team morale.",
    solution: "We designed and delivered a customized executive coaching and leadership development program targeting high-potential managers.",
    results: [
      { metric: "25", label: "Managers Developed" },
      { metric: "35%", label: "Promotion Rate" },
      { metric: "92%", label: "Program Satisfaction" },
      { metric: "12 months", label: "Program Duration" },
    ],
    testimonial: "The executive training program exceeded our expectations. Our management team now operates with clarity, confidence, and measurable results.",
    author: "James Okonkwo",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    slug: "innovate-africa-group",
  },
  {
    id: 3,
    title: "Continental Industries: Data-Driven HR Transformation",
    company: "Continental Industries",
    industry: "Manufacturing",
    challenge: "The company made HR decisions based on intuition rather than data. Lack of visibility into workforce analytics prevented proactive talent management and strategic planning.",
    solution: "We implemented a comprehensive HR analytics platform with dashboards, predictive models, and actionable insights for decision-making.",
    results: [
      { metric: "28%", label: "Productivity Gain" },
      { metric: "45%", label: "Recruitment Speed" },
      { metric: "3.2x", label: "ROI" },
      { metric: "9 months", label: "Implementation" },
    ],
    testimonial: "Their HR analytics solutions gave us visibility we never had before. We now make data-driven decisions that directly impact our bottom line.",
    author: "Elena Rodriguez",
    role: "VP of Human Resources",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    slug: "continental-industries",
  },
];

export default function CaseStudies() {
  const { t } = useTranslation();
  useSEO({
    title: "Case Studies | HR Success Stories & Results",
    description: "Explore our case studies showcasing measurable results: 40% turnover reduction, 3.2x ROI, and 95% client satisfaction. Real success stories from leading organizations.",
    keywords: [
      "case studies",
      "HR success stories",
      "talent development results",
      "HR ROI",
      "organizational transformation",
      "employee retention",
      "business impact",
    ],
    ogTitle: "Case Studies | HR Success Stories",
    ogDescription: "Discover how leading organizations achieved measurable results with our HR and talent solutions.",
  });

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
              Success Stories
            </span>
            <h1 className="text-white mb-6">
              Proven Results. Real <span className="text-gold">Impact.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              See how leading organizations have transformed their talent management, reduced costs, and achieved strategic objectives through our solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 md:p-12 lg:col-span-1">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                        {study.industry}
                      </span>
                      <h2 className="text-3xl font-serif font-semibold mb-2">{study.title}</h2>
                      <p className="text-muted-foreground">{study.company}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-border">
                      <h4 className="font-serif font-semibold text-lg mb-3">The Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-border">
                      <h4 className="font-serif font-semibold text-lg mb-3">Our Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-8">
                      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <p className="text-lg italic text-foreground mb-4">"{study.testimonial}"</p>
                        <div>
                          <p className="font-serif font-semibold">{study.author}</p>
                          <p className="text-sm text-muted-foreground">{study.role}, {study.company}</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                        Learn More About This Solution
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Results */}
                  <div className="p-8 md:p-12 lg:col-span-1 bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col justify-center">
                    <h4 className="font-serif font-semibold text-lg mb-8">Results Achieved</h4>
                    <div className="space-y-6">
                      {study.results.map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0">
                            <TrendingUp className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-3xl font-serif font-bold text-primary">{result.metric}</p>
                            <p className="text-sm text-muted-foreground">{result.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Our Impact</span>
            <h2 className="mb-6">
              Transforming Organizations <span className="text-primary">Worldwide</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Projects Completed", value: "50+" },
              { icon: Users, label: "Professionals Trained", value: "5,000+" },
              { icon: Target, label: "Average ROI", value: "3.2x" },
              { icon: TrendingUp, label: "Client Satisfaction", value: "96%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-serif font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
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
            <h2 className="mb-6">Ready to Achieve Your Own Success Story?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how Talent Boost Academy can help your organization achieve transformational results.
            </p>
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
