import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { useTranslation } from 'react-i18next';

export default function CookiePolicy() {
  const { t } = useTranslation();
  useSEO({
    title: "Cookie Policy | Talent Boost Academy",
    description: "Learn how Talent Boost Academy uses cookies to enhance user experience and analyze platform performance.",
    keywords: ["cookie policy", "cookies", "website cookies", "tracking", "analytics cookies"]
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
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Effective Date: February 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Talent Boost Academy uses cookies to enhance user experience and analyze platform performance.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our platform.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Understand website usage patterns</li>
                <li>Improve functionality and user experience</li>
                <li>Monitor system performance and reliability</li>
                <li>Remember your preferences and settings</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Users may manage or disable cookies through their browser settings. Please note that disabling cookies may affect some features of our website.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about our cookie usage, contact:{" "}
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
