import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  useSEO({
    title: "Privacy Policy | Talent Boost Academy",
    description: "Our commitment to protecting your privacy and personal data. Learn how we collect, use, and safeguard your information.",
    keywords: ["privacy policy", "data protection", "GDPR", "personal data", "data security", "privacy rights"]
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
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              Effective Date: February 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Talent Boost Academy ("we," "our," or "us") is committed to protecting the privacy and personal data of our users, including candidates, employers, partners, and website visitors.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Professional information (CVs, skills, education, work experience)</li>
                <li>Employer information (company name, role requirements, contact details)</li>
                <li>Usage data (pages visited, interactions, analytics data)</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Deliver training, talent, and workforce intelligence services</li>
                <li>Match candidates with relevant employer opportunities</li>
                <li>Improve platform performance and user experience</li>
                <li>Communicate service updates and professional information</li>
                <li>Meet legal, regulatory, and operational obligations</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Data Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell personal data. Data may be shared only with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Approved employers (limited and relevant candidate data)</li>
                <li>Trusted technology partners supporting platform operations</li>
                <li>Legal or regulatory authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect personal data from unauthorized access, misuse, or loss.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Users have the right to access, update, request deletion of, or restrict processing of their personal data, subject to applicable laws.
              </p>

              <h2 className="text-2xl font-serif text-[#3D1A78] mt-8 mb-4">
                Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For data-related inquiries, contact:{" "}
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
