import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();
  useSEO({
    title: "Terms & Conditions | Talent Boost Academy",
    description: "Terms and conditions for using Talent Boost Academy's platform and services. Please read carefully before using our services.",
    keywords: ["terms and conditions", "terms of service", "user agreement", "platform terms", "service terms"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF8F5] py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D1A78] mb-4">
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Effective Date: February 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                By accessing or using Talent Boost Academy's website or platform, you agree to the following terms.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Platform Use
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Users must provide accurate and truthful information</li>
                <li>Unauthorized use or misuse of the platform is prohibited</li>
                <li>We reserve the right to suspend or terminate access at our discretion</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                No Employment Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Talent Boost Academy provides training, analytics, and talent facilitation services. We do not guarantee employment, job placement, or hiring outcomes.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All website content, designs, materials, and systems are the intellectual property of Talent Boost Academy and may not be copied or reused without permission.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are not liable for hiring decisions, employment outcomes, or business decisions made by employers or candidates.
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
