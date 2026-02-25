import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Shield, Users, FileCheck, Heart } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function CodeOfEthics() {
  const { t } = useTranslation();
  useSEO({
    title: "Code of Ethics & Professional Standards | Talent Boost Academy",
    description: "Our commitment to ethical practices, professional standards, and responsible workforce development.",
    keywords: ["code of ethics", "professional standards", "ethical practices", "integrity", "responsible workforce development"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      icon: Shield,
      title: "Confidentiality & Data Protection",
      description: "We handle all personal and professional data with the highest standards of confidentiality and security."
    },
    {
      icon: Users,
      title: "Fair & Transparent Practices",
      description: "We maintain non-discriminatory, transparent, and equitable practices in all our operations."
    },
    {
      icon: FileCheck,
      title: "Ethical Engagement",
      description: "We engage with employers and partners ethically, ensuring mutual respect and professional conduct."
    },
    {
      icon: Heart,
      title: "Integrity in Service",
      description: "We deliver training, analytics, and talent facilitation with honesty, accuracy, and commitment to excellence."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF8F5] py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D1A78] mb-4">
              Code of Ethics & Professional Standards
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Effective Date: February 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                Talent Boost Academy is guided by the following principles in all our operations and interactions:
              </p>

              <div className="grid gap-6 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-[#FAF8F5] rounded-lg border border-gray-200">
                    <div className="flex-shrink-0">
                      <principle.icon className="w-8 h-8 text-[#3D1A78]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-[#3D1A78] mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are committed to responsible workforce development that benefits individuals, organizations, and communities. Our ethical standards guide every decision we make and every service we provide.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Reporting Concerns
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have concerns about ethical practices or professional conduct, please contact us at:{" "}
                <a href="mailto:info@talentboostacademy.com" className="text-[#3D1A78] hover:text-[#D4AF37] transition-colors">
                  info@talentboostacademy.com
                </a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#3D1A78] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
              >
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
