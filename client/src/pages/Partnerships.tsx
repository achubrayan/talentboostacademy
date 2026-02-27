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
      type: t("partnerships.bradfordRole"),
      logo: "BIA",
      logoImage: BIA_LOGO_URL,
      url: "https://bradfordia.org/",
      description: t("services_page.education_description"),
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
      type: t("partnerships.flowmingoRole"),
      logo: "F",
      logoImage: FLOWMINGO_LOGO_URL,
      url: "https://rebrand.ly/6b9b3hy", // UPDATED: Your Referral Link
      description: t("services_page.tech_description"),
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
