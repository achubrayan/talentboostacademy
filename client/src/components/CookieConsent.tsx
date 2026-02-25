import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container max-w-6xl">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
            {!showPreferences ? (
              // Main Cookie Banner
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-shrink-0">
                  <Cookie className="w-12 h-12 text-[#3D1A78]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-[#3D1A78] mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All," you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
                    <Link href="/cookie-policy">
                      <span className="text-[#3D1A78] hover:text-[#D4AF37] underline">
                        Cookie Policy
                      </span>
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy-policy">
                      <span className="text-[#3D1A78] hover:text-[#D4AF37] underline">
                        Privacy Policy
                      </span>
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-[#3D1A78] text-white rounded-lg hover:bg-[#5A2B9F] transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    Decline All
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-3 border border-[#3D1A78] text-[#3D1A78] rounded-lg hover:bg-[#3D1A78]/5 transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            ) : (
              // Preferences Panel
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif font-semibold text-[#3D1A78]">
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close preferences"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1 w-4 h-4 rounded border-gray-300"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">
                        Necessary Cookies <span className="text-xs text-gray-500">(Always Active)</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3D1A78] focus:ring-[#3D1A78]"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">
                        Analytics Cookies
                      </div>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors interact with our website to improve user experience.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3D1A78] focus:ring-[#3D1A78]"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">
                        Marketing Cookies
                      </div>
                      <p className="text-sm text-gray-600">
                        Used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-[#3D1A78] text-white rounded-lg hover:bg-[#5A2B9F] transition-colors font-medium text-sm"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
