import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  useSEO({
    title: "Frequently Asked Questions | Talent Boost Academy",
    description: "Find answers to common questions about our services, employment guarantees, data ownership, and more.",
    keywords: ["FAQ", "frequently asked questions", "employment guarantee", "visa services", "data ownership", "recruitment services"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Services & Scope",
      questions: [
        {
          question: "Do you guarantee jobs?",
          answer: "No. We provide training and talent facilitation services, not employment guarantees. Final hiring decisions are made solely by employers based on their specific needs and criteria."
        },
        {
          question: "Are you a recruitment agency?",
          answer: "No. Talent Boost Academy is not a licensed recruitment agency. We focus on skills development, workforce analytics, and talent readiness. We facilitate connections between prepared candidates and employers but do not act as a recruitment agency."
        },
        {
          question: "Do you provide visas or immigration services?",
          answer: "No. We do not offer immigration or visa services. We are not an immigration consultancy. Any visa or work permit applications must be handled through appropriate legal channels and immigration authorities."
        },
        {
          question: "What services do you actually provide?",
          answer: "We provide: (1) Business & HR Consulting, (2) Talent Development & Training Programs, (3) HR Analytics & Workforce Intelligence, (4) Online Education through partnerships, (5) HR Tech & AI Solutions, and (6) Talent Outsourcing & Workforce Deployment facilitation."
        }
      ]
    },
    {
      category: "Data & Privacy",
      questions: [
        {
          question: "Who owns candidate data?",
          answer: "Candidates retain ownership of their personal data. By registering on our platform, candidates consent to the collection and processing of professional data for matching purposes, but they maintain the right to access, update, or request deletion of their data at any time."
        },
        {
          question: "How do you protect my personal information?",
          answer: "We implement appropriate technical and organizational measures to protect personal data from unauthorized access, misuse, or loss. We do not sell personal data. Data is only shared with approved employers (limited and relevant information) and trusted technology partners supporting platform operations."
        },
        {
          question: "Can I withdraw my consent or delete my data?",
          answer: "Yes. Users have the right to withdraw consent or request data deletion at any time. Contact us at info@talentboostacademy.com to exercise these rights."
        }
      ]
    },
    {
      category: "Training & Outcomes",
      questions: [
        {
          question: "Does completing training guarantee employment?",
          answer: "No. Participation in training or talent programs does not ensure employment. Our training programs are designed to enhance your skills and improve your job readiness, but hiring decisions are made independently by employers."
        },
        {
          question: "What happens after I complete a training program?",
          answer: "After completing training, your profile may be shared with relevant employers based on your skills and preferences. However, we cannot guarantee interviews or job offers. Your success depends on multiple factors including market demand, employer requirements, and your individual qualifications."
        }
      ]
    },
    {
      category: "Partnerships",
      questions: [
        {
          question: "What is Bradford International Alliance (BIA)?",
          answer: "Bradford International Alliance (BIA) is our education partner that supports access to international online education programs. BIA operates independently under a defined collaboration scope."
        },
        {
          question: "What is Flowmingo AI?",
          answer: "Flowmingo AI is our technology partner that provides HR technology and workforce analytics tools. Flowmingo operates independently and contributes specialized AI-driven solutions to enhance our service delivery."
        },
        {
          question: "Are your partners responsible for employment outcomes?",
          answer: "No. Each partner operates independently within their specific scope of collaboration. Neither Talent Boost Academy nor our partners guarantee employment outcomes, visa approvals, or hiring decisions."
        }
      ]
    },
    {
      category: "Fees & Payment",
      questions: [
        {
          question: "Do candidates pay for your services?",
          answer: "Some training programs may have associated fees. Specific pricing information is provided during the enrollment process. Our talent facilitation services for job-ready candidates are typically employer-funded."
        },
        {
          question: "Do employers pay for your services?",
          answer: "Yes. Employers pay for access to curated talent insights, workforce analytics, and talent facilitation services. We do not act as an employer of record."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF8F5] py-16">
        {/* Hero Section */}
        <div className="container max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D1A78] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, policies, and operations.
            </p>
          </motion.div>
        </div>

        {/* FAQ Categories */}
        <div className="container max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-serif text-[#3D1A78] mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: questionIndex * 0.05 }}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#3D1A78] flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="container max-w-4xl mt-16">
          <div className="bg-gradient-to-r from-[#3D1A78] to-[#5A2B9F] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-serif mb-3">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a
              href="mailto:info@talentboostacademy.com"
              className="inline-block px-6 py-3 bg-[#D4AF37] text-[#3D1A78] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
