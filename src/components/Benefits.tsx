import { motion } from "motion/react";
import { Shield, Clock, Heart, Sparkles, Target, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Trustworthy Advice",
    description: "Over 10 years of experience supporting every decision you make.",
  },
  {
    icon: Clock,
    title: "Fast Process",
    description: "We optimize timelines to get you quick answers and results.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every client is unique. Your financial strategy will be tailored to you.",
  },
  {
    icon: Sparkles,
    title: "Best Rates",
    description: "Access to multiple lenders to get you the most favorable terms.",
  },
  {
    icon: Target,
    title: "Results-Oriented Approach",
    description: "Your success is our goal. We work until we achieve your objectives.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Available whenever you need me, answering all your questions.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4">
            Beneficios
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Why Choose Cardenas Mortgage Group?
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Committed to your financial success at every step of the way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:bg-white/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-200 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
