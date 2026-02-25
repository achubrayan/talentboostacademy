/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * About Page: Company story, vision/mission, values, CEO profile
 * Typography: Cormorant Garamond headlines, Outfit body
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import {
  ArrowRight,
  Target,
  Compass,
  Award,
  Shield,
  TrendingUp,
  Lightbulb,
  Quote,
  BarChart3,
  GraduationCap,
  BadgeCheck,
  Globe,
  LineChart,
  Users,
  Brain,
  Linkedin,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const CEO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/vpRJLWaFMnLHYyXZ.jpeg";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, delivering exceptional value to our clients.",
  },
  {
    icon: Shield,
    title: "Professionalism",
    description: "We maintain the utmost integrity and ethical standards in all our business relationships.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of industry trends and deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and consistent delivery on our commitments.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Impact",
    description: "We are committed to creating measurable, lasting positive change for individuals and organizations.",
  },
];

const ceoExpertise = [
  { icon: BarChart3, title: "HR Attrition Analytics", desc: "Dashboards with predictive risk indicators" },
  { icon: TrendingUp, title: "Training ROI", desc: "Development measurement and reporting" },
  { icon: LineChart, title: "Executive Dashboards", desc: "Power BI, DAX, and star schema models" },
  { icon: Brain, title: "Data-Driven Insights", desc: "Supporting leadership and HR decisions" },
];

const ceoCertifications = [
  "IBM Data Science Professional Certificate",
  "Google Business Intelligence Specialization",
  "Google Data Analytics Professional Certificate",
  "Human Resources Analytics — UC Irvine",
  "HRCI Human Resource Associate (HRA)",
];

export default function About() {
  const { t } = useTranslation();
  useSEO({
    title: "About Talent Boost Academy | HR & Talent Solutions Leader",
    description: "Learn about Talent Boost Academy's mission to transform organizations through strategic HR consulting, talent development, and data-driven solutions.",
    keywords: [
      "about talent boost academy",
      "HR consulting company",
      "talent development",
      "Fabrice Achu Ngando",
      "HR solutions",
      "people analytics",
    ],
    ogTitle: "About Talent Boost Academy",
    ogDescription: "Discover our mission and expertise in transforming organizations.",
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
              About Us
            </span>
            <h1 className="text-white mb-6">
              Transforming Organizations Through{" "}
              <span className="text-gold">Strategic Excellence</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Talent Boost Academy is a globally-minded consulting and education 
              company dedicated to empowering professionals and organizations to 
              thrive in a data-driven world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-editorial mb-4 block">Our Story</span>
              <h2 className="mb-6">
                Built on a Vision of{" "}
                <span className="text-primary">Global Impact</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Talent Boost Academy was founded with a clear purpose: to bridge the gap 
                between traditional business consulting and the evolving demands of the 
                modern workforce. We recognized that organizations need more than generic 
                advice—they need strategic partners who understand the intersection of 
                business strategy, human capital, and technology.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey began with a commitment to excellence and a passion for 
                developing talent. Today, we serve clients across industries and 
                geographies, helping them navigate complex challenges and seize new 
                opportunities in an increasingly competitive landscape.
              </p>
              <p className="text-muted-foreground">
                We combine deep industry expertise with innovative methodologies, 
                data-driven insights, and a genuine commitment to our clients' success. 
                Every engagement is an opportunity to create lasting, positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  "Our mission is to empower professionals, leaders, and organizations 
                  through strategic consulting, advanced analytics, high-impact training, 
                  and accessible online education."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-serif font-bold">FA</span>
                  </div>
                  <div>
                    <div className="font-semibold">Fabrice Achu Ngando</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Our Purpose</span>
            <h2 className="mb-6">
              Guided by <span className="text-primary">Vision & Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted global partner in developing data-driven, job-ready, and future-focused workforces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations and professionals through practical training, workforce analytics, and ethical talent deployment solutions.
              </p>
            </motion.div>
          </div>

          {/* Brand Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-purple text-white rounded-xl px-8 py-6">
              <div className="text-sm uppercase tracking-wider text-white/70 mb-2">
                Our Promise
              </div>
              <div className="text-2xl md:text-3xl font-serif font-semibold">
                Empowering Growth. Elevating Talent. Driving Results.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Our Values</span>
            <h2 className="mb-6">
              The Principles That{" "}
              <span className="text-primary">Guide Us</span>
            </h2>
            <p className="text-muted-foreground">
              Our core values define who we are and how we work. They are the 
              foundation of every client relationship and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-serif font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile - Updated Executive Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Leadership</span>
            <h2 className="mb-6">
              Meet Our <span className="text-primary">Founder & CEO</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* CEO Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CEO_IMG}
                  alt="Fabrice Achu Ngando, Founder & CEO of Talent Boost Academy"
                  className="w-full h-[550px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A78]/80 via-[#3D1A78]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                      Fabrice Achu Ngando
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/fabrice-achu-ngando/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold transition-colors duration-300 hover:scale-110 transform"
                      title="Connect with Fabrice on LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.604h3.554v1.361c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.683 1.375 3.683 4.338v5.491zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.956-1.703 1.184 0 1.914.752 1.938 1.703 0 .946-.754 1.704-1.979 1.704zm1.581 11.019H3.757V9.848h3.161v10.604zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gold font-medium">Founder & CEO</p>
                  <p className="text-white/80 text-sm mt-1">
                    People Analytics & Talent Development Consultant
                  </p>
                </div>
              </div>

              {/* Education Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 grid grid-cols-2 gap-4"
              >
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-primary mb-2" />
                  <div className="font-semibold text-sm">MBA</div>
                  <div className="text-xs text-muted-foreground">Lincoln University College</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-primary mb-2" />
                  <div className="font-semibold text-sm">BSBA</div>
                  <div className="text-xs text-muted-foreground">University of the People</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CEO Bio Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Professional Summary */}
              <div>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  Fabrice Achu Ngando is a People Analytics and Talent Development professional 
                  who helps organizations make smarter workforce decisions through data, 
                  dashboards, and measurable learning outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With experience supporting multicultural teams in fast-paced, technology-driven 
                  environments, Fabrice bridges the gap between HR strategy and business 
                  intelligence — transforming people data into clear, actionable insights 
                  leaders can confidently act on.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Rather than relying on intuition, his work focuses on evidence-based 
                  decision-making across key workforce areas such as attrition analysis, 
                  training ROI, workforce reporting, performance dashboards, and data-driven 
                  HR strategy.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {ceoExpertise.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm border border-border/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Differentiator */}
              <div className="bg-gradient-purple rounded-xl p-6 text-white">
                <p className="text-white/90 italic leading-relaxed">
                  "What sets Fabrice apart is his ability to understand both the human and 
                  analytical sides of organizations. He doesn't just build reports — he 
                  solves real business and workforce challenges."
                </p>
              </div>

              {/* Certifications */}
              <div className="pt-2">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">
                  Selected Certifications
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {ceoCertifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <BadgeCheck className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Availability */}
              <div className="flex items-start gap-3 pt-4 pb-2 border-t border-border/50">
                <Globe className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Available for strategic consulting, advisory engagements, and partnerships, 
                  supporting organizations across international and remote environments.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Connect with Fabrice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Discover how Talent Boost Academy can help transform your organization 
              and elevate your team's performance.
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
