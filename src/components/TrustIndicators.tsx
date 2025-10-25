import { motion } from "motion/react";
import { Shield, Award, Users, TrendingUp, CheckCircle, Clock } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    value: "NMLS #183516",
    label: "Verified License",
  },
  {
    icon: Award,
    value: "10+ Years",
    label: "Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Families Served",
  },
  {
    icon: TrendingUp,
    value: "$250M+",
    label: "Loans Processed",
  },
  {
    icon: CheckCircle,
    value: "98%",
    label: "Approval Rate",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
  },
];

const certifications = [
  {
    title: "NMLS Licensed",
    description: "Nationwide Mortgage Licensing System",
    number: "#183516",
  },
  {
    title: "Florida Licensed",
    description: "State Licensed Mortgage Broker",
    number: "FL-LIC",
  },
  {
    title: "Better Business Bureau",
    description: "A+ Rating Accredited Business",
    number: "A+",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <indicator.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl text-slate-900 mb-1">{indicator.value}</div>
                <div className="text-sm text-slate-600">{indicator.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl text-slate-900 mb-3">Certifications and Accreditations</h3>
            <p className="text-slate-600">Backed by the most recognized institutions in the industry</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-900" />
                  </div>
                  <h4 className="text-slate-900 mb-2">{cert.title}</h4>
                  <p className="text-slate-600 text-sm mb-3">{cert.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-900 rounded-lg text-sm">
                    {cert.number}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-12 text-center"
        >
          <Shield className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h3 className="text-3xl text-white mb-4">Your Trust is My Priority</h3>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Each transaction is handled with the utmost professionalism, transparency, and commitment.
            Your information is protected, and your satisfaction is guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
