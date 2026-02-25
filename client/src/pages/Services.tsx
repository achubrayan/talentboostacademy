/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * Services Page: Complete HR, Talent & Workforce Solutions
 * Typography: Cormorant Garamond headlines, Outfit body
 * Updated: Clean, modern corporate layout with 9 service offerings
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
  Building2,
  Target,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Globe,
  Bot,
  Zap,
  Award,
  LineChart,
  UserCheck,
  Settings,
  Layers,
  PieChart,
  MapPin,
  Shield,
  Handshake,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

// Partner logos
const BIA_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/uFPpThlOAvUJRocD.PNG";
const FLOWMINGO_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/STYllyTZYhkRsbEm.ICO";

// Service Pillars for Overview Grid
const servicePillars = [
  {
    icon: Briefcase,
    title: "Consulting & Strategy",
    description: "Strategic HR advisory and workforce optimization for sustainable business growth.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Practical, outcome-focused programs that build in-demand skills and capabilities.",
  },
  {
    icon: BarChart3,
    title: "Analytics & HR Technology",
    description: "Data-driven insights and AI-powered tools for smarter workforce decisions.",
  },
  {
    icon: Users,
    title: "Talent Outsourcing & Deployment",
    description: "Strategic talent solutions connecting trained professionals with global employers.",
  },
];

// Detailed Services Data
const detailedServices = [
  {
    id: "consulting",
    number: "01",
    icon: Briefcase,
    title: "Business & HR Consulting",
    description: "Strategic HR and workforce consulting designed to align people, data, and business objectives. We help organizations improve decision-making, optimize workforce performance, and build sustainable HR strategies.",
    services: [
      "HR strategy & workforce planning",
      "People analytics advisory",
      "HR transformation & process optimization",
      "Workforce performance assessment",
    ],
  },
  {
    id: "talent-development",
    number: "02",
    icon: Users,
    title: "Talent Development & Training Programs",
    description: "Practical, outcome-focused training programs that equip professionals and teams with relevant, in-demand skills.",
    services: [
      "Professional upskilling programs",
      "HR & People Analytics training",
      "Business Intelligence for HR professionals",
      "Career development & capability building",
    ],
  },
  {
    id: "leadership",
    number: "03",
    icon: Award,
    title: "Leadership & Management Training",
    description: "Leadership programs designed to build confident, data-aware leaders capable of driving performance and engagement.",
    services: [
      "Leadership development programs",
      "Management effectiveness training",
      "Data-driven decision-making for leaders",
      "Team performance & engagement workshops",
    ],
  },
  {
    id: "corporate-upskilling",
    number: "04",
    icon: TrendingUp,
    title: "Corporate Upskilling Programs",
    description: "Customized learning solutions aligned with organizational goals and measurable business outcomes.",
    services: [
      "Organization-wide upskilling initiatives",
      "Role-based learning programs",
      "Training needs analysis",
      "Learning impact & ROI measurement",
    ],
  },
  {
    id: "analytics",
    number: "05",
    icon: BarChart3,
    title: "HR Analytics & People Analytics",
    description: "Advanced analytics solutions that transform HR data into actionable insights for leadership teams.",
    services: [
      "Workforce dashboards & reporting",
      "Attrition & retention analytics",
      "Recruitment & hiring analytics",
      "Performance & engagement analytics",
      "Executive dashboards (Power BI & BI tools)",
    ],
  },
  {
    id: "workforce-optimization",
    number: "06",
    icon: Settings,
    title: "Strategy & Workforce Optimization",
    description: "Data-driven workforce optimization strategies that improve productivity, efficiency, and organizational effectiveness.",
    services: [
      "Workforce optimization strategy",
      "Talent segmentation & modeling",
      "Organizational effectiveness analysis",
      "Performance and productivity insights",
    ],
  },
];

// Partnership Services
const partnershipServices = [
  {
    id: "online-degrees",
    number: "07",
    icon: GraduationCap,
    title: "Online Degree Programs",
    partner: "Bradford International Alliance (BIA)",
    partnerLogo: BIA_LOGO,
    description: "Flexible, internationally delivered online degree programs designed for working professionals seeking recognized academic qualifications.",
    highlights: [
      "Undergraduate and postgraduate degree pathways",
      "Online and remote learning delivery",
      "International academic partnership",
      "Career-aligned education programs",
    ],
  },
  {
    id: "hr-tech",
    number: "08",
    icon: Cpu,
    title: "HR Technology & Digital HR Solutions",
    partner: "Flowmingo AI",
    partnerLogo: FLOWMINGO_LOGO,
    description: "Modern HR technology solutions that enable organizations to manage talent, analytics, and workforce insights more effectively.",
    highlights: [
      "AI-powered HR tools",
      "Talent analytics and workforce insights",
      "Candidate and employee experience platforms",
      "Data-driven HR decision support",
    ],
  },
];

// Why Choose Us differentiators
const differentiators = [
  {
    icon: Layers,
    title: "End-to-End HR & Talent Ecosystem",
    description: "Complete solutions from consulting to deployment",
  },
  {
    icon: LineChart,
    title: "Data-Driven, Analytics-Led Approach",
    description: "Evidence-based decisions for measurable outcomes",
  },
  {
    icon: Globe,
    title: "International Education & Technology Partnerships",
    description: "Global reach through strategic alliances",
  },
  {
    icon: Target,
    title: "Practical, Outcome-Focused Solutions",
    description: "Real results that impact your bottom line",
  },
  {
    icon: Shield,
    title: "Ethical and Compliant Talent Practices",
    description: "Integrity in every engagement",
  },
];

export default function Services() {
  const { t } = useTranslation();
  useSEO({
    title: "Our Services | HR Consulting, Talent Development & Analytics",
    description: "Comprehensive HR, talent development, analytics, and workforce solutions. From business consulting to talent outsourcing, we offer end-to-end services for organizational transformation.",
    keywords: [
      "HR services",
      "talent development",
      "HR consulting",
      "HR analytics",
      "workforce solutions",
      "employee training",
      "recruitment solutions",
      "talent outsourcing",
      "business consulting",
    ],
    ogTitle: "Our Services | HR & Talent Solutions",
    ogDescription: "Explore our comprehensive HR, talent development, and workforce solutions.",
  });

  return (
    <Layout>
      {/* SECTION 1: Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-white mb-6">
              End-to-End HR, Talent &{" "}
              <span className="text-gold">Workforce Solutions</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-3xl">
              From talent development and analytics to workforce deployment and global education 
              partnerships, Talent Boost Academy helps organizations and professionals grow through 
              data-driven, future-ready HR solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-gold hover:bg-gold/90 text-[#1a1a2e] font-semibold px-8 py-6 text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#pillars">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore Our Services
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Service Pillars Overview Grid */}
      <section id="pillars" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="mb-4">
              Our <span className="text-primary">Service Pillars</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four integrated pillars delivering comprehensive HR and talent solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-secondary/30 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Detailed Services (1-6) */}
      <section className="py-20 bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Core Services
            </span>
            <h2 className="mb-4">
              Comprehensive <span className="text-primary">Service Offerings</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed solutions tailored to your organization's unique needs
            </p>
          </motion.div>

          <div className="space-y-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Service Number & Icon */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                    <span className="text-5xl font-serif font-bold text-primary/20">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Services List */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Partnership-Led Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Strategic Partnerships
            </span>
            <h2 className="mb-4">
              Partnership-Led <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extended capabilities through our trusted global partners
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-10 border border-primary/10"
              >
                {/* Partner Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden p-2">
                    <img 
                      src={service.partnerLogo} 
                      alt={service.partner}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      In Partnership With
                    </span>
                    <p className="text-lg font-semibold text-foreground">{service.partner}</p>
                  </div>
                </div>

                {/* Service Number & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-serif font-bold text-primary/20">
                    {service.number}
                  </span>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Talent Outsourcing & Workforce Deployment */}
      <section id="talent-outsourcing" className="py-20 bg-gradient-purple text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-serif font-bold text-white/20">09</span>
                <Handshake className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-white mb-6">
                Talent Outsourcing &{" "}
                <span className="text-gold">Workforce Deployment</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                A strategic talent deployment service connecting trained, job-ready professionals 
                with employers through an ethical, data-informed outsourcing model.
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {[
                  "Workforce outsourcing & contract staffing",
                  "Remote talent deployment",
                  "Job-ready talent pipelines",
                  "Analytics-informed candidate screening",
                  "Employer–candidate matching",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* Geographic Focus */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-white/10 rounded-xl">
                <MapPin className="w-6 h-6 text-gold" />
                <div>
                  <span className="text-sm text-white/60 block">Geographic Focus</span>
                  <span className="text-white font-medium">Cameroon, UAE, Europe, and remote markets</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-white/60 italic border-l-2 border-gold/50 pl-4">
                Talent Boost Academy is not an immigration agency. Talent deployment is subject 
                to employer requirements and local labor regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                  How It Works
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Talent Assessment", desc: "We identify and evaluate job-ready professionals" },
                    { step: "02", title: "Skills Matching", desc: "Analytics-driven matching with employer requirements" },
                    { step: "03", title: "Deployment", desc: "Seamless onboarding and workforce integration" },
                    { step: "04", title: "Ongoing Support", desc: "Continuous performance monitoring and support" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-2xl font-serif font-bold text-gold/50">{item.step}</span>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Choose Talent Boost Academy */}
      <section className="py-20 bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Our Difference
            </span>
            <h2 className="mb-4">
              Why Choose <span className="text-primary">Talent Boost Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in delivering HR and talent solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Block */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">!</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Important Service Disclaimer
                </h3>
                <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <p>
                    <strong>No Employment Guarantee:</strong> Talent Boost Academy provides training, analytics, and talent facilitation services. We do not guarantee job placements, interviews, or employment outcomes.
                  </p>
                  <p>
                    <strong>Not a Recruitment Agency:</strong> We are not a licensed recruitment agency. We facilitate talent readiness and connections but do not act as an employer or recruiter.
                  </p>
                  <p>
                    <strong>No Visa/Immigration Services:</strong> We do not provide visa sponsorship, immigration consulting, or work permit services.
                  </p>
                  <p>
                    For complete terms and conditions, please review our{" "}
                    <Link href="/disclaimer">
                      <span className="text-primary hover:text-gold underline">Disclaimer</span>
                    </Link>
                    {" "}and{" "}
                    <Link href="/terms">
                      <span className="text-primary hover:text-gold underline">Terms & Conditions</span>
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Call to Action */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6">
              Ready to Transform Your{" "}
              <span className="text-primary">Workforce</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how Talent Boost Academy can help you achieve your HR and talent objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
