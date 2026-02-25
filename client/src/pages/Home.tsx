/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * Home Page: Magazine-quality hero, service pillars, testimonials, partnerships
 * Typography: Cormorant Garamond headlines, Outfit body
 * Colors: Royal Purple primary, Champagne Gold accents, Cream backgrounds
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import {
  ArrowRight,
  Briefcase,
  Users,
  BarChart3,
  GraduationCap,
  Cpu,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

// Image URLs
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/tLt1nX5aGgyNTi4hZ4yDJo/sandbox/UJmtWBtOBhZeYvjD7BrjCb-img-1_1770132550000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdEx0MW5YNWFHZ3lOVGk0aFo0eURKby9zYW5kYm94L1VKbXRXQnRPQmhaZVl2akQ3QnJqQ2ItaW1nLTFfMTc3MDEzMjU1MDAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sSQm8EeathP8WKz5WiaeDWK46pMFmaquZMlG28R~AdY6gMcMlzTO5AFYVnwNcAvcP4eZTkGRzC7bTJCqksz4XWnR4PW1rER8nQKELsDRt6Ay5sPO2yDM9BGZeIIekHsZB4yPV1v5uM3RdJ~48XkAohLYLIWklrfHI7lMrD2eQEUnC8viNRgbtkqB~ejE4hEOJGLxuBLMzv1JIKWEDbZB3fevNvrsI5CcwN1FqyEr0CxppdAyiOhwymqT53IB5iwmPgPa8KfgNscyojTAsb8-xZhgNvBwxiQ~krcdTJ95a4Jn6yRdHzwm3HzgL5RUuNou7c54~943JQRv-V6UfpnJ0A__";

const CONSULTING_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/tLt1nX5aGgyNTi4hZ4yDJo/sandbox/UJmtWBtOBhZeYvjD7BrjCb-img-2_1770132521000_na1fn_Y29uc3VsdGluZy1zZXJ2aWNlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdEx0MW5YNWFHZ3lOVGk0aFo0eURKby9zYW5kYm94L1VKbXRXQnRPQmhaZVl2akQ3QnJqQ2ItaW1nLTJfMTc3MDEzMjUyMTAwMF9uYTFmbl9ZMjl1YzNWc2RHbHVaeTF6WlhKMmFXTmxjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UajTo-ARJRr~8t96rdkGGelTeepY0bd0jQ5V5PLgQX6l7rwhIKYNVGewaOXy9Xadq364cOaTspLieoMRBOQoZTJxZBYAQ7akHbzEA08Log9druHQUw4bhKaTvSDyp6VENy2EBHkNjfSZhW48Zt-XN1kLm6j9Ctpj2z6MfHi1Te4-1IwF~ks~DGT2CIXXrii1j0YnrX6VYW0JqnLtIp-hNIMS2fXtuyS0nmruOduNuyQN-7Ts6BxslHue0dwWxPRW1~gfYgQIhYEu66CgjdXIgHg0KUWDFHki0sV4H6~SsypxwuIJfWohVWAzCnYHLtf~LzRaEc3~2PthmjbYdOZzRQ__";

const servicePillars = [
  {
    icon: Briefcase,
    title: "Business & HR Consulting",
    description: "Strategic advisory and workforce optimization for sustainable growth.",
    link: "/services#consulting",
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Leadership training and corporate upskilling programs.",
    link: "/services#training",
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    description: "Data-driven insights for smarter workforce decisions.",
    link: "/services#analytics",
  },
  {
    icon: GraduationCap,
    title: "Online Education",
    description: "International academic programs for working professionals.",
    link: "/services#education",
  },
  {
    icon: Cpu,
    title: "HR Tech & AI",
    description: "AI-powered recruitment and digital HR transformation.",
    link: "/services#tech",
  },
];

const whyChooseUs = [
  "Executive-level expertise in business and HR strategy",
  "Global perspective with Africa-focused market understanding",
  "Data-driven approach to talent management",
  "Strategic partnerships with leading institutions",
  "Customized solutions for every organization",
];

const testimonials = [
  {
    quote: "Talent Boost Academy transformed our HR operations. Their strategic insights helped us reduce turnover by 40% and build a stronger leadership pipeline.",
    author: "Sarah Mitchell",
    role: "Chief People Officer",
    company: "Global Tech Solutions",
  },
  {
    quote: "The executive training program exceeded our expectations. Our management team now operates with clarity, confidence, and measurable results.",
    author: "James Okonkwo",
    role: "CEO",
    company: "Innovate Africa Group",
  },
  {
    quote: "Their HR analytics solutions gave us visibility we never had before. We now make data-driven decisions that directly impact our bottom line.",
    author: "Elena Rodriguez",
    role: "VP of Human Resources",
    company: "Continental Industries",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { t } = useTranslation();
  useSEO({
    title: "Premium HR & Talent Solutions | Talent Boost Academy",
    description: "Transform your organization with strategic HR consulting, talent development, analytics, and workforce solutions. Expert-led programs for sustainable business growth.",
    keywords: [
      "HR consulting",
      "talent development",
      "HR analytics",
      "workforce solutions",
      "business consulting",
      "employee training",
      "people analytics",
      "talent management",
    ],
    ogTitle: "Premium HR & Talent Solutions | Talent Boost Academy",
    ogDescription: "Transform your organization with strategic HR consulting, talent development, and analytics.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Talent Boost Academy",
      "url": "https://talentboostacademy.com",
      "description": "Premium HR, talent, analytics, education, and workforce solutions partner",
      "sameAs": [
        "https://www.linkedin.com/company/talent-boost-academy",
        "https://twitter.com/talentboost"
      ]
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D1A78]/95 via-[#3D1A78]/80 to-[#3D1A78]/60" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                Premium Business & HR Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Empowering Growth.{" "}
              <span className="text-gold">Elevating Talent.</span>{" "}
              Driving Results.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl"
            >
              Strategic consulting, advanced analytics, and high-impact training 
              to transform your organization and unlock your team's full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#1E1E28] font-semibold px-8 py-6 text-base shadow-lg"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-editorial mb-4 block">About Us</span>
              <h2 className="mb-6">
                A Global Hub for{" "}
                <span className="text-primary">Talent Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Talent Boost Academy is a premium business, HR, and education solutions 
                company dedicated to empowering professionals, leaders, and organizations 
                through strategic consulting, advanced analytics, and accessible online education.
              </p>
              <p className="text-muted-foreground mb-8">
                We combine executive-level expertise with innovative methodologies to deliver 
                measurable results. Our approach is rooted in data-driven insights and a deep 
                understanding of global talent dynamics.
              </p>
              <Link href="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CONSULTING_IMG}
                  alt="Executive consulting session"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <div className="text-4xl font-serif font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Combined Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Our Services</span>
            <h2 className="mb-6">
              Comprehensive Solutions for{" "}
              <span className="text-primary">Modern Organizations</span>
            </h2>
            <p className="text-muted-foreground">
              From strategic consulting to AI-powered HR solutions, we offer a complete 
              suite of services designed to elevate your organization's performance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicePillars.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href={service.link}>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-editorial mb-4 block">Why Choose Us</span>
              <h2 className="mb-6">
                Your Partner in{" "}
                <span className="text-primary">Business Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We bring together world-class expertise, innovative solutions, and a 
                commitment to your success. Our approach is tailored to meet the unique 
                challenges of modern organizations.
              </p>

              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-purple rounded-2xl p-10 text-white"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-white/80 mb-8">
                Schedule a complimentary strategy session with our experts to discuss 
                your goals and discover how we can help you achieve them.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#1E1E28] font-semibold w-full sm:w-auto shadow-lg"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Testimonials</span>
            <h2 className="mb-6">
              Trusted by{" "}
              <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground">
              See how we've helped organizations across industries achieve 
              transformational results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm relative"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <p className="text-foreground mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/testimonials">
              <Button variant="outline" className="group">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="label-editorial mb-4 block">Our Partners</span>
            <h2 className="mb-6">
              Strategic <span className="text-primary">Alliances</span>
            </h2>
            <p className="text-muted-foreground">
              We collaborate with leading institutions and technology partners to 
              deliver world-class solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto"
          >
            <a
              href="https://bradfordia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-border/50 hover:border-primary/30"
              >
                <div className="w-full h-24 flex items-center justify-center mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/adNoybxozIHkXWzv.png"
                    alt="Bradford International Alliance"
                    className="h-16 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">Bradford International Alliance</h3>
                <div className="text-sm text-muted-foreground text-center">Academic Partner</div>
              </motion.div>
            </a>
            <a
              href="https://flowmingo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-border/50 hover:border-primary/30"
              >
                <div className="w-full h-24 flex items-center justify-center mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/OsZqukRDmHRlQosA.ico"
                    alt="Flowmingo AI"
                    className="h-16 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-center">Flowmingo AI</h3>
                <div className="text-sm text-muted-foreground text-center">HR Technology Partner</div>
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/partnerships">
              <Button variant="outline" className="group">
                View All Partnerships
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Ready to Elevate Your Organization?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how Talent Boost Academy can help you achieve your 
              strategic goals and build a high-performing team.
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
