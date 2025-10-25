import { motion } from "motion/react";
import { FileSearch, Calculator, CheckCircle, Key } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "initial consultation",
    description: "We evaluate your financial situation and personal goals to create a personalized plan.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calculator,
    title: "credit analysis",
    description: "We review your credit history and identify opportunities for improvement and optimization.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: CheckCircle,
    title: "pre-approval",
    description: "We help you obtain pre-approval so you know exactly how much you can buy.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Key,
    title: "successful closing",
    description: "We accompany you until closing, ensuring you get the best possible terms.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Your Path to the Home of Your Dreams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A clear and transparent process designed to make your goals a reality
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-amber-200 to-emerald-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-slate-50 z-10">
                  <span className="text-slate-900">{index + 1}</span>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-slate-100 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
