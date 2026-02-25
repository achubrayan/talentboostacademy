import { useParams, useLocation, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogArticleBySlug, getRelatedArticles } from "@/data/blogArticles";
import { Streamdown } from "streamdown";
import { useTranslation } from 'react-i18next';

export default function BlogArticle() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  if (!slug) {
    navigate("/blog");
    return null;
  }

  const article = getBlogArticleBySlug(slug);
  const relatedArticles = article ? getRelatedArticles(slug, 3) : [];

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen bg-background">
          <div className="container py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The article you're looking for doesn't exist.
              </p>
            <a href="/blog">
              <Button className="bg-gold hover:bg-gold/90 text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const publishDate = new Date(article.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="container">
            <a href="/blog">
              <Button variant="ghost" className="mb-6 text-gold hover:text-gold/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </a>

            <div className="max-w-3xl">
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {article.category}
              </div>

              <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
                {article.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="bg-gradient-to-b from-background to-secondary/5 py-8">
            <div className="container">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none text-foreground">
                  <Streamdown>{article.content}</Streamdown>
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-border">
                  <div className="flex gap-6">
                    {article.author.image && (
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="h-24 w-24 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {article.author.name}
                      </h3>
                      <p className="text-gold font-medium mb-3">{article.author.role}</p>
                      <p className="text-muted-foreground">{article.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-card rounded-lg p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-serif">
                      Related Articles
                    </h3>

                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <a
                          key={relatedArticle.id}
                          href={`/blog/${relatedArticle.slug}`}
                          className="block group cursor-pointer"
                        >
                          <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {relatedArticle.readTime} min read
                          </p>
                        </a>
                      ))}
                    </div>

                    <a href="/blog">
                      <Button
                        variant="outline"
                        className="w-full mt-6 border-gold text-gold hover:bg-gold/10"
                      >
                        View All Articles
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts can help you implement the strategies discussed in this article.
              Schedule a consultation to learn more.
            </p>
            <a href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-primary">
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
