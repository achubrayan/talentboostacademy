/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * Footer: Premium dark footer with gold accents
 * Typography: Cormorant Garamond for headings, Outfit for body
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/XNLxhXfaMTqzarog.png";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#consulting", label: "Business & HR Consulting" },
  { href: "/services#training", label: "Talent Development" },
  { href: "/services#analytics", label: "HR Analytics" },
  { href: "/services#education", label: "Online Education" },
  { href: "/services#tech", label: "HR Tech & AI" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-purple text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Talent Boost Academy"
              className="h-20 mb-6"
              style={{ width: "auto" }}
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium business, HR, and education solutions dedicated to empowering professionals and organizations across Africa, the Middle East, and Europe.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:info@talentboostacademyglobal.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@talentboostacademyglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:support@talentboostacademyglobal.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  support@talentboostacademyglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <div>📍 Cameroon: +237 698 23 25 14</div>
                  <div>🌍 UAE: +971 55 729 4128</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Douala, Cameroon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Talent Boost Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center md:justify-end">
            <Link href="/privacy-policy">
              <span className="text-white/50 hover:text-white/70 transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-white/50 hover:text-white/70 transition-colors">
                Terms & Conditions
              </span>
            </Link>
            <Link href="/cookie-policy">
              <span className="text-white/50 hover:text-white/70 transition-colors">
                Cookie Policy
              </span>
            </Link>
            <Link href="/disclaimer">
              <span className="text-white/50 hover:text-white/70 transition-colors">
                Disclaimer
              </span>
            </Link>
            <Link href="/code-of-ethics">
              <span className="text-white/50 hover:text-white/70 transition-colors">
                Code of Ethics
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
