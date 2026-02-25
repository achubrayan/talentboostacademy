import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { useTranslation } from 'react-i18next';

export default function Disclaimer() {
  const { t } = useTranslation();
  useSEO({
    title: "Disclaimer | Talent Boost Academy",
    description: "Important disclaimers about Talent Boost Academy's services, limitations, and scope of operations.",
    keywords: ["disclaimer", "service limitations", "employment disclaimer", "visa services", "recruitment disclaimer"]
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
              Disclaimer
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Effective Date: February 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <p className="text-gray-800 font-medium">
                  Talent Boost Academy is not a licensed recruitment agency, immigration consultancy, or visa processing service.
                </p>
              </div>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Service Scope
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>We do not guarantee employment, job placement, or visas</li>
                <li>Final hiring decisions are made solely by employers</li>
                <li>Participation in training or talent programs does not ensure employment</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Our Focus
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services focus on skills development, workforce analytics, and talent readiness. We provide training, insights, and facilitation services to help individuals and organizations make informed workforce decisions.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Important Notice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While we strive to provide high-quality training and talent facilitation services, we cannot control or guarantee employment outcomes, hiring decisions, or visa approvals. These decisions are made independently by employers, immigration authorities, and other third parties.
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
