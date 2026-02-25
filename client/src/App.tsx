import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Partnerships from "./pages/Partnerships";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CaseStudies from "./pages/CaseStudies";
import ChatBot from "./components/ChatBot";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import CodeOfEthics from "./pages/CodeOfEthics";
import FAQ from "./pages/FAQ";

function Router() {
  return (
    <Switch>
      {/* English routes with /en prefix */}
      <Route path="/en" component={Home} />
      <Route path="/en/about" component={About} />
      <Route path="/en/services" component={Services} />
      <Route path="/en/partnerships" component={Partnerships} />
      <Route path="/en/testimonials" component={Testimonials} />
      <Route path="/en/blog" component={Blog} />
      <Route path="/en/blog/:slug" component={BlogArticle} />
      <Route path="/en/case-studies" component={CaseStudies} />
      <Route path="/en/contact" component={Contact} />
      <Route path="/en/privacy-policy" component={PrivacyPolicy} />
      <Route path="/en/terms" component={Terms} />
      <Route path="/en/cookie-policy" component={CookiePolicy} />
      <Route path="/en/disclaimer" component={Disclaimer} />
      <Route path="/en/code-of-ethics" component={CodeOfEthics} />
      <Route path="/en/faq" component={FAQ} />

      {/* French routes with /fr prefix */}
      <Route path="/fr" component={Home} />
      <Route path="/fr/about" component={About} />
      <Route path="/fr/services" component={Services} />
      <Route path="/fr/partnerships" component={Partnerships} />
      <Route path="/fr/testimonials" component={Testimonials} />
      <Route path="/fr/blog" component={Blog} />
      <Route path="/fr/blog/:slug" component={BlogArticle} />
      <Route path="/fr/case-studies" component={CaseStudies} />
      <Route path="/fr/contact" component={Contact} />
      <Route path="/fr/privacy-policy" component={PrivacyPolicy} />
      <Route path="/fr/terms" component={Terms} />
      <Route path="/fr/cookie-policy" component={CookiePolicy} />
      <Route path="/fr/disclaimer" component={Disclaimer} />
      <Route path="/fr/code-of-ethics" component={CodeOfEthics} />
      <Route path="/fr/faq" component={FAQ} />

      {/* Default routes (redirect to /en) */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogArticle} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/code-of-ethics" component={CodeOfEthics} />
      <Route path="/faq" component={FAQ} />

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
            <ChatBot />
          </TooltipProvider>
        </ThemeProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;
