import { CheckCircle2, Quote } from "lucide-react";
import { motion } from "motion/react";

const experience = [
  "loans",
  "Bank Evaluation",
  "Financial Education",
  "Credit and Planning",
  "Regulatory Compliance",
  "Customer Service",
  "Market Analysis",
];

const skills = [
  "Effective Communication",
  "Conflict Resolution",
  "Document Management",
  "Adaptability",
  "Digital Tools Proficiency",
  "Teamwork",
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full mb-4">
            About Me
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Sandra Cárdenas
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl mb-4">Professional Experience</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                With over a decade in the mortgage industry, I have advised and
                served clients from Latino families in the U.S. My approach
                combines empathy, strategy, and commitment, offering personalized
                financial solutions for every stage of life.
              </p>

              <div className="space-y-3">
                {experience.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <Quote className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-blue-900 mb-3">In My Words</h3>
              <p className="text-slate-700 italic leading-relaxed">
                "My mission is to help you make clear and reliable financial
                decisions. I guide you with committed advice on first homes,
                refinancing, or restructuring credits, step by step, accompanying
                you every step of the way."
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-slate-900 mb-6">Additional Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-slate-700 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Licenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-slate-900 mb-6 text-center">
            Licenses and Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl text-blue-900 mb-1">NMLS</div>
              <div className="text-slate-600">#183516</div>
            </div>
            <div className="w-px bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl text-blue-900 mb-1">Estado</div>
              <div className="text-slate-600">Florida</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
