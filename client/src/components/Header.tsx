/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * Header: Floating navigation with smooth scroll behavior
 * Logo: Official Talent Boost Academy stacked logo (tree + graduation cap)
 * Typography: Outfit for nav
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Integrated: Translation hook

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332618297/XNLxhXfaMTqzarog.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation(); // Integrated: Translation function

  // Navigation links are now dynamic based on the active language
  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/case-studies", label: t("nav.case_studies") },
    { href: "/partnerships", label: t("nav.partnerships") },
    { href: "/testimonials", label: t("nav.testimonials") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src={LOGO_URL}
            alt="Talent Boost Academy"
            className={`transition-all duration-500 ${
              isScrolled ? "h-12" : "h-16"
            }`}
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Language Switcher & CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
            >
              {t("nav.book_consultation")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-2 text-base font-medium transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="flex items-center py-2 border-t border-border mt-2">
                <LanguageSwitcher />
              </div>
              <Link href="/contact">
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                  {t("nav.book_consultation")}
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
