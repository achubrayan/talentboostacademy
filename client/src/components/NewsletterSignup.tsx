/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * Newsletter Signup: Email capture with elegant form
 * Typography: Cormorant Garamond for titles, Outfit for body
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
      setIsLoading(false);
      toast.success("Thank you for subscribing! Check your email for confirmation.");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get exclusive insights, industry trends, and best practices delivered to your inbox monthly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 whitespace-nowrap"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2">
                Subscription Confirmed!
              </h4>
              <p className="text-muted-foreground">
                Thank you for subscribing. Check your email for a confirmation link.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
