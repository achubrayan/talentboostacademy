/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * Partnerships Page: Strategic partners and alliances
 * Typography: Cormorant Garamond headlines, Outfit body
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import PartnerMetricsDashboard from "@/components/PartnerMetricsDashboard";
import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Cpu,
  Handshake,
  Globe,
  Shield,
  Award,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/XNLxhXfaMTqzarog.png";
const BIA_LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/uFPpThlOAvUJRocD.PNG";
const FLOWMINGO_LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/STYllyTZYhkRsbEm.ICO";

export default function Partnerships() {
  const { t } = useTranslation();

  const partners = [
    {
      id: "bia",
      name: "Bradford International Alliance",
      shortName: "BIA",
      type: "Academic Partner",
      logo: "BIA",
      logoImage: BIA_LOGO_URL,
      url: "https://bradfordia.org/",
      description: "Bradford International Alliance is our strategic academic partner, enabling us to deliver world-class online degree and academic programs to professionals worldwide.",
      partnership: "Through our partnership with BIA, we offer internationally recognized undergraduate and postgraduate programs designed for working professionals seeking to advance their careers through flexible, accessible education.",
      offerings: [
        "Online undergraduate degree programs",
        "Postgraduate and master's programs",
        "International academic pathways",
        "Flexible learning for working professionals",
      ],
      icon: GraduationCap,
      color: "primary",
    },
    {
      id: "flowmingo",
      name: "Flowmingo AI",
      shortName: "Flowmingo",
      type: "HR Technology Partner",
      logo: "F",
      logoImage: FLOWMINGO_LOGO_URL,
      url: "https://rebrand.ly/6b9b3hy", // UPDATED: Your Referral Link
      description: "Flowmingo AI powers our cutting-edge HR technology and AI solutions, bringing intelligent automation and advanced recruitment capabilities to our clients.",
      partnership: "Our partnership with Flowmingo AI enables us to offer state-of-the-art AI-powered recruitment tools, candidate screening solutions, and digital HR transformation services that help organizations hire smarter and faster.",
      offerings: [
        "AI-powered recruitment tools",
        "Intelligent candidate screening & matching",
        "HR automation solutions",
        "Talent intelligence platforms",
      ],
      icon: Cpu,
      color: "gold",
    },
  ];

  const partnershipValues = [
    {
      icon: Handshake,
      title: "Strategic Collaboration",
      description: "We carefully select partners who share our commitment to excellence and innovation.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our partnerships extend our capabilities to serve clients across industries and geographies.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every partnership is built on rigorous standards and mutual accountability.",
    },
    {
      icon: Award,
      title: "Shared Excellence",
      description: "Together, we deliver solutions that exceed expectations and drive real results.",
    },
  ];

  const comparisonData = [
    {
      feature: "Core Expertise",
      bia: "Academic programs & professional development",
      flowmingo: "AI-powered recruitment & HR automation"
    },
    {
      feature: "Primary Focus",
      bia: "Talent education & skill development",
      flowmingo: "Talent acquisition & retention"
    },
    {
      feature: "Key Offerings",
      bia: "Degree programs, certifications, online courses",
      flowmingo: "Recruitment tools, candidate screening, analytics"
    },
    {
      feature: "Client Benefit",
      bia: "Build internal talent pipeline through education",
      flowmingo: "Optimize hiring & reduce turnover with AI"
    },
    {
      feature: "Global Reach",
      bia: "International academic pathways & recognition",
      flowmingo: "Multi-language support & global deployment"
    },
  ];

  useSEO({
    title: "Strategic Partnerships | Talent Boost Academy",
    description: "Discover our strategic partnerships with Bradford International Alliance and Flowmingo AI. Together, we deliver comprehensive talent, education, and HR technology solutions.",
    keywords: [
      "partnerships",
      "strategic alliances",
      "Bradford International Alliance",
      "Flowmingo AI",
      "talent partnerships",
      "HR solutions",
      "education partnerships",
    ],
    ogTitle: "Strategic Partnerships | Talent Boost Academy",
    ogDescription: "Explore our partnerships with leading talent and HR technology providers.",
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
              {t("partnerships.label")}
            </span>
            <h1 className="text-white mb-6" dangerouslySetInnerHTML={{ __html: t("partnerships.title") }} />
            <p className="text-xl text-white/80 leading-relaxed">
              {t("partnerships.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Philosophy Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="label-editorial mb-4 block">Our Approach</span>
            <h2 className="mb-6">
              Built on <span className="text-primary">Trust & Excellence</span>
            </h2>
            <p className="text-muted-foreground">
              Our partnerships are carefully cultivated relationships with organizations 
              that share our values and commitment to delivering exceptional results. 
              Together, we create synergies that benefit our clients and advance our 
              shared mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Cards Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex justify-center mb-8">
              <img src={LOGO_URL} alt="Talent Boost Academy" className="h-24" style={{ width: "auto" }} />
            </div>
            <span className="label-editorial mb-4 block">Our Partners</span>
            <h2 className="mb-6">Meet Our <span className="text-primary">Strategic Partners</span></h2>
            <p className="text-muted-foreground">
              Talent Boost Academy partners with leading organizations to deliver world-class solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="p-8 md:p-10 lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                        partner.color === "gold" ? "bg-gold/20" : "bg-primary/10"
                      }`}>
                        <img src={partner.logoImage} alt={partner.name} className="w-full h-full object-contain p-2 rounded-xl" />
                      </div>
                      <div>
                        <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                          partner.color === "gold" ? "text-gold" : "text-primary"
                        }`}>
                          {partner.type}
                        </div>
                        <h3 className="text-2xl font-serif font-semibold">{partner.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{partner.description}</p>
                    <p className="text-muted-foreground mb-6">{partner.partnership}</p>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Visit {partner.shortName} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className={`p-8 md:p-10 ${partner.color === "gold" ? "bg-gradient-to-br from-gold/10 to-gold/5" : "bg-gradient-to-br from-primary/10 to-primary/5"}`}>
                    <h4 className="font-serif font-semibold text-lg mb-4">What We Offer Together</h4>
                    <ul className="space-y-3">
                      {partner.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <partner.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${partner.color === "gold" ? "text-gold" : "text-primary"}`} />
                          <span className="text-sm text-foreground">{offering}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <Link href="/services">
                        <Button variant="outline" className="w-full">
                          View Related Services <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartnerMetricsDashboard />

      {/* Comparison Table Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="label-editorial mb-4 block">Partnership Synergy</span>
            <h2 className="mb-6">How Our Partners <span className="text-primary">Complement Each Other</span></h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Our partnerships create a powerful ecosystem where academic excellence meets cutting-edge technology.
            </p>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-secondary/30">
                    <th className="px-6 py-4 text-left font-serif font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-serif font-semibold text-primary">Bradford International Alliance</th>
                    <th className="px-6 py-4 text-left font-serif font-semibold text-gold">Flowmingo AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-secondary/5 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.bia}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.flowmingo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-purple rounded-2xl p-8 md:p-12 text-white text-center">
              <Handshake className="w-16 h-16 text-gold mx-auto mb-6" />
              <h2 className="text-white mb-4">Interested in Partnering with Us?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                We're always looking for strategic partners who share our vision.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#1E1E28] font-semibold px-8 shadow-lg">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Disclosure Section */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Partnership Disclosure</h3>
            <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p><strong>Independent Operations:</strong> Bradford International Alliance (BIA) and Flowmingo AI operate independently.</p>
              <p><strong>No Employment Guarantees:</strong> Neither Talent Boost Academy nor our partners guarantee employment outcomes.</p>
              <p>For more information, see our <Link href="/disclaimer"><span className="text-primary hover:text-gold underline">Disclaimer</span></Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Work with Us?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button size="lg" className="bg-primary hover:bg-primary/90">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/services"><Button size="lg" variant="outline">Explore Services</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
