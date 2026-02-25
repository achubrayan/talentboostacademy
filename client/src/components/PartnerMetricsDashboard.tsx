import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Professionals Trained",
    description: "Through BIA's world-class programs",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: "10,000+",
    label: "Candidates Screened",
    description: "Using Flowmingo's AI technology",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "95%",
    label: "Client Satisfaction",
    description: "Across all partnership initiatives",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "3.2x",
    label: "Average ROI",
    description: "For client organizations",
    color: "from-purple-500 to-purple-600",
  },
];

export default function PartnerMetricsDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
              Partnership Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Proven Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our partnerships have delivered measurable results that transform organizations and empower talent globally.
            </p>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                {/* Icon Container */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${metric.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {metric.icon}
                </div>

                {/* Value */}
                <div className="mb-2">
                  <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </p>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>

                {/* Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${metric.color} rounded-b-xl w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of your organization through our integrated solutions combining academic excellence with cutting-edge technology.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            Explore Partnership Opportunities
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
