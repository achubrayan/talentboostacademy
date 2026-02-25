/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * Blog Page: Thought leadership and industry insights
 * Typography: Cormorant Garamond for titles, Outfit for body
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { useTranslation } from 'react-i18next';

const blogPosts = blogArticles.map((article) => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category,
  author: article.author.name,
  date: new Date(article.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  readTime: `${article.readTime} min read`,
  image: article.image,
  slug: article.slug,
  featured: parseInt(article.id) <= 2,
}));



export default function Blog() {
  const { t } = useTranslation();
  useSEO({
    title: "Blog | HR Insights & Talent Development Articles",
    description: "Read thought leadership articles on HR trends, talent development, people analytics, and workforce optimization. Expert insights from Talent Boost Academy.",
    keywords: [
      "HR blog",
      "talent development articles",
      "HR trends",
      "people analytics",
      "workforce insights",
      "HR best practices",
      "employee engagement",
      "leadership development",
    ],
    ogTitle: "Blog | HR Insights & Talent Development",
    ogDescription: "Discover thought leadership articles on HR trends and talent development.",
  });

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
              Insights & Ideas
            </span>
            <h1 className="text-white mb-6">
              Thought Leadership for <span className="text-gold">HR Excellence</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore industry insights, best practices, and actionable strategies to transform your organization's talent management and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="label-editorial mb-4 block">Featured</span>
            <h2 className="mb-12">
              Latest <span className="text-primary">Insights</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-8">
              All <span className="text-primary">Articles</span>
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-8 hover:shadow-md transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-4 gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <Tag size={16} className="text-primary" />
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {post.author}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-purple text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Stay Updated with Industry Insights</h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our newsletter for exclusive articles, research, and best practices delivered to your inbox.
            </p>
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3">
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
