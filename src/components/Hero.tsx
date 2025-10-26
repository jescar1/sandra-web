import { ArrowRight, Star, Play, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";


export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmU1OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Animated Houses Background */}
      

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 z-10"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-xl border border-slate-200/50"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <span className="text-sm text-slate-700">500+ Satisfied families</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full mb-6 text-sm tracking-wide">
                  BY CARDENAS MORTGAGE GROUP
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight"
              >
                Your path to{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900">
                    American Dream
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                    <path d="M1 5.5C50 2.5 150 1 299 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3"/>
                        <stop offset="50%" stopColor="#1e40af" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-baseline gap-3"
              >
                <h2 className="text-3xl text-blue-900">Sandra Cárdenas</h2>
                <span className="text-slate-600">NMLS #183516</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              More than a decade of experience helping Latino families 
              achieve their dream property with personalized and dedicated advice.
            </motion.p>

            {/* Key Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Pre-approval in 24-48 hours",
                "MMultiple financing options",
                "Spanish-speaking assistance",
                "Credit improvement included"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-700" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="flex flex-wrap gap-4 pt-4"
>
  <Button
    size="lg"
    onClick={() => {
      const el = document.getElementById("contact");
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }}
    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 shadow-2xl shadow-blue-900/30 px-8 py-7 group text-lg"
  >
    Start Now
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
  <Button
    size="lg"
    variant="outline"
    onClick={() => {
      const el = document.getElementById("testimonials");
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }}
    className="border-2 border-slate-300 hover:bg-slate-50 shadow-lg px-8 py-7 group text-lg"
  >
    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
    View Testimonials
  </Button>
</motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-200"
            >
              <div>
                <div className="text-3xl text-slate-900 mb-1">$250M+</div>
                <div className="text-sm text-slate-600">Loans Processed</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl text-slate-900 mb-1">98%</div>
                <div className="text-sm text-slate-600">Approval Rate</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl text-slate-900 mb-1">10+</div>
                <div className="text-sm text-slate-600">Years of Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Image Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-amber-500/10 rounded-[3rem] blur-3xl"></div>
              
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              
              {/* Main Image */}
              <div className="image-frame">
  <img
    src="/sa.jpg"
    alt="Sandra Cárdenas"
    className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-white"
  />
  <div className="image-overlay" />
</div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-slate-900 mb-1">Licensed</div>
                    <div className="text-sm text-slate-600">NMLS Verified</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Award Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-2xl p-5"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <div className="text-2xl text-white">5.0</div>
                  <div className="text-xs text-amber-100">Rating</div>
                </div>
              </motion.div>

              {/* Floating Achievement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
              >
                <div className="text-center">
                  <div className="text-2xl text-blue-900 mb-1">500+</div>
                  <div className="text-xs text-slate-600 whitespace-nowrap">Familias<br/>Felices</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
