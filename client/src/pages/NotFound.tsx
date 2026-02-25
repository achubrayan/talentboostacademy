import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl md:text-9xl font-serif font-bold text-primary/20 mb-4">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
