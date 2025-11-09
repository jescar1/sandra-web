import { motion } from "motion/react";
import { Shield, Award, Users, TrendingUp, CheckCircle, Clock } from "lucide-react";

const indicators = [
  { icon: Shield, value: "NMLS #1183490", label: "Verified License" },
  { icon: Award, value: "10+ Years", label: "Experience" },
  { icon: Users, value: "500+", label: "Families Served" },
  { icon: TrendingUp, value: "$250M+", label: "Loans Processed" },
  { icon: CheckCircle, value: "98%", label: "Approval Rate" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export function TrustIndicators() {
  return (
    <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <indicator.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xl text-slate-900 mb-0.5">{indicator.value}</div>
                <div className="text-sm text-slate-600">{indicator.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}