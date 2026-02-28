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
      logoImage: FLOWMINGO_LOGO_URL,
      url: "https://rebrand.ly/6b9b3hy",
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

  const comparisonData = [
    {
      feature: "Core Expertise",
      bia: "Academic programs",
      flowmingo: "AI-powered recruitment"
    },
    {
      feature: "Primary Focus",
      bia: "Talent education",
      flowmingo: "Talent acquisition"
    },
    {
      feature: "Client Benefit",
      bia: "Internal talent pipeline",
      flowmingo: "Optimize hiring ROI"
    },
  ];

  useSEO({
    title: "Strategic Partnerships | Talent Boost Academy",
    description: "Discover our strategic partnerships with Bradford International Alliance and Flowmingo AI.",
    keywords: ["partnerships", "BIA", "Flowmingo", "HR Tech", "Education"], // Added to fix the .join() error
  });

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <img src={LOGO_URL} alt="TBA" className="h-20 mx-auto mb-8" />
            <h2 className="mb-6">Meet Our <span className="text-primary">Strategic Partners</span></h2>
          </div>
          <div className="space-y-12">
            {partners.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden grid lg:grid-cols-3">
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 p-2 rounded-xl flex items-center justify-center ${p.color === "gold" ? "bg-gold/20" : "bg-primary/10"}`}>
                      <img src={p.logoImage} alt={p.name} className="max-h-full" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase ${p.color === "gold" ? "text-gold" : "text-primary"}`}>{p.type}</div>
                      <h3 className="text-2xl font-serif font-semibold">{p.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{p.description}</p>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-primary font-medium inline-flex items-center gap-2 hover:underline">
                    Visit {p.shortName} <ExternalLink size={16} />
                  </a>
                </div>
                <div className={`p-8 ${p.color === "gold" ? "bg-gold/5" : "bg-primary/5"}`}>
                  <h4 className="font-serif font-semibold mb-4">What We Offer</h4>
                  <ul className="space-y-2 text-sm">
                    {p.offerings.map((o, idx) => (
                      <li key={idx} className="flex gap-2">
                        <p.icon size={16} className={p.color === "gold" ? "text-gold" : "text-primary"} />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerMetricsDashboard />

      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="mb-12 text-center">Partnership <span className="text-primary">Synergy</span></h2>
          <div className="bg-white rounded-2xl shadow-sm border overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-secondary/30 text-left">
                  <th className="px-6 py-4 font-serif">Feature</th>
                  <th className="px-6 py-4 font-serif text-primary">Bradford Alliance</th>
                  <th className="px-6 py-4 font-serif text-gold">Flowmingo AI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.bia}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.flowmingo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container max-w-4xl text-center">
          <div className="bg-gradient-purple rounded-2xl p-10 text-white mb-12">
            <h2 className="text-white mb-4">{t("partnerships_page.cta_title")}</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-black px-8">
                {t("partnerships_page.cta_button")}
              </Button>
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-left">
            <h3 className="font-serif text-lg font-semibold mb-2">Disclosure</h3>
            <p className="text-sm text-muted-foreground">
              Bradford International Alliance and Flowmingo AI are strategic partners of Talent Boost Academy. 
              We operate independently to provide comprehensive talent solutions. 
              <Link href="/disclaimer" className="ml-1 text-primary underline">Learn more.</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
