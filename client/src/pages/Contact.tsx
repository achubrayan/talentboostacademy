/*
 * DESIGN: Executive Horizon - Editorial Luxury with Kinetic Depth
 * Contact Page: Professional contact form and role-based information
 * Typography: Cormorant Garamond headlines, Outfit body
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSEO } from "@/hooks/useSEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Briefcase,
  Users,
  Handshake,
  Headphones,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const serviceOptions = [
  { value: "consulting", label: "Business & HR Consulting" },
  { value: "training", label: "Talent Development & Training" },
  { value: "analytics", label: "HR Analytics & People Analytics" },
  { value: "education", label: "Online Degree Programs" },
  { value: "tech", label: "HR Tech & AI Solutions" },
  { value: "partnerships", label: "Partnership Opportunities" },
  { value: "careers", label: "Career Opportunities" },
  { value: "other", label: "Other / General Inquiry" },
];

const contactChannels = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "For general questions and service inquiries",
    email: "info@talentboostacademyglobal.com",
    label: "General Inquiries",
  },
  {
    icon: Briefcase,
    title: "Partnerships & Collaborations",
    description: "For partnership and collaboration opportunities",
    email: "partnerships@talentboostacademyglobal.com",
    label: "Partnerships & Collaborations",
  },
  {
    icon: Users,
    title: "Employer & HR Services",
    description: "For talent outsourcing and workforce deployment",
    email: "hr@talentboostacademyglobal.com",
    label: "Employer & HR Services",
  },
  {
    icon: GraduationCap,
    title: "Careers & Talent Opportunities",
    description: "For career opportunities and talent onboarding",
    email: "careers@talentboostacademyglobal.com",
    label: "Careers & Talent Opportunities",
  },
  {
    icon: Headphones,
    title: "Platform & Technical Support",
    description: "For technical support and platform assistance",
    email: "support@talentboostacademyglobal.com",
    label: "Platform & Technical Support",
  },
];

const executiveContact = {
  icon: Briefcase,
  title: "Founder & Executive Contact",
  description: "For direct executive or consulting inquiries",
  email: "fabrice@talentboostacademyglobal.com",
  label: "Primary Contact / Founder",
};

const officeLocations = [
  {
    country: "Cameroon",
    icon: "📍",
    phone: "+237 698 23 25 14",
    address: "Rue Akwa, Douala, Cameroon",
  },
  {
    country: "UAE / International",
    icon: "🌍",
    phone: "+971 55 729 4128",
    address: "Dubai, United Arab Emirates",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  useSEO({
    title: "Contact Us | Talent Boost Academy",
    description: "Get in touch with Talent Boost Academy for HR consulting, talent development, and workforce solutions. Schedule a free consultation with our team.",
    keywords: [
      "contact talent boost academy",
      "HR consulting contact",
      "schedule consultation",
      "talent development inquiry",
      "HR solutions contact",
    ],
    ogTitle: "Contact Us | Talent Boost Academy",
    ogDescription: "Reach out to schedule your free consultation with our HR and talent experts.",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </span>
            <h1 className="text-white mb-6">
              Let's Start a{" "}
              <span className="text-gold">Conversation</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We operate across Africa, the Middle East, and Europe. Reach out to the right team for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Contact by Department
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Route your inquiry to the right team for faster, more efficient service.
            </p>
          </motion.div>

          {/* Contact Channels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={channel.email}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {channel.description}
                  </p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="text-primary hover:text-primary/80 font-medium text-sm break-all"
                  >
                    {channel.email}
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Executive Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{executiveContact.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {executiveContact.description}
                </p>
                <a
                  href={`mailto:${executiveContact.email}`}
                  className="text-primary hover:text-primary/80 font-medium break-all"
                >
                  {executiveContact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phone & Location Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us through our international offices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {officeLocations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-purple text-white rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{location.icon}</span>
                  <h3 className="text-2xl font-serif font-semibold">{location.country}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/70 text-sm mb-1">Phone</p>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-white hover:text-gold transition-colors font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/70 text-sm mb-1">Address</p>
                      <p className="text-white">{location.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-serif font-semibold mb-2">
                Book a Strategy Call
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and one of our consultants will reach out 
                to schedule a complimentary strategy session.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How Can We Help? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your goals, challenges, or questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </Layout>
  );
}
