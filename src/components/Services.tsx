import { TrendingUp, FileText, Award, GraduationCap, Home, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const services = [
  {
    icon: Home,
    title: "First House",
    description: "We guide you every step of the way to buying your first property. Special programs for first-time buyers.",
    color: "from-blue-500 to-blue-600",
    features: ["Pre-approval", "Full advisory", "Best rates"]
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "Improve the terms of your current mortgage and save thousands of dollars each year.",
    color: "from-purple-500 to-purple-600",
    features: ["Lower rates", "Cash-out", "Payment reduction"]
  },
  {
    icon: TrendingUp,
    title: "Credit Improvement",
    description: "Increase your credit score with personalized and effective strategies.",
    color: "from-amber-500 to-amber-600",
    features: ["Detailed analysis", "Action plan", "Follow-up"]
  },
  {
    icon: FileText,
    title: "Financial Assessment",
    description: "Comprehensive review of your financial situation to identify opportunities.",
    color: "from-emerald-500 to-emerald-600",
    features: ["Free consultation", "Detailed report", "Recommendations"]
  },
  {
    icon: Award,
    title: "Commercial Loans",
    description: "Financing for real estate investments and commercial properties.",
    color: "from-red-500 to-red-600",
    features: ["Multi-units", "Investment", "Portfolio"]
  },
  {
    icon: GraduationCap,
    title: "Financial Education",
    description: "Learn to manage your finances, build credit, and plan for your future.",
    color: "from-cyan-500 to-cyan-600",
    features: ["Workshops", "Resources", "Ongoing support"]
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            Professional Services
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From your first home to commercial investments, we support you every step of the way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100 hover:border-transparent hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-slate-900 mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl mb-4">Ready to Get Started?</h3>
            <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
              Request a free consultation and discover how we can help you achieve your financial goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 shadow-xl"
                onClick={() => scrollToSection("contact")}
              >
                Commercial Application
              </Button>

              <Button
               size="lg"
               variant="outline"
                 className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  onClick={() => scrollToSection("contact")}
>
                   Residential Application
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
