import { motion } from "motion/react";

const partners = [
  { name: "Wells Fargo", width: "120" },
  { name: "Bank of America", width: "140" },
  { name: "Chase", width: "100" },
  { name: "Quicken Loans", width: "130" },
  { name: "US Bank", width: "110" },
  { name: "CitiBank", width: "100" },
];

export function Partners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-slate-600 mb-8">I work with the most reliable financial institutions</p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Partners grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div 
                  className="h-12 flex items-center justify-center px-4"
                  style={{ width: `${partner.width}px` }}
                >
                  {/* Placeholder for partner logo */}
                  <div className="text-slate-400 text-center">
                    <div className="text-xl tracking-tight">{partner.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500">
          Many more financial institutions available to offer you the best options
          </p>
        </motion.div>
      </div>
    </section>
  );
}
