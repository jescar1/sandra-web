import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Users, Home, Award } from "lucide-react";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ElementType;
}

function AnimatedStat({ value, suffix = "", prefix = "", label, icon: Icon }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl lg:text-5xl text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-blue-200">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmU1OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4">
           Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            More than a decade helping Latino families achieve the American dream
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedStat
            value={10}
            suffix="+"
            label="Years of Experience"
            icon={TrendingUp}
          />
          <AnimatedStat
            value={500}
            suffix="+"
            label="Families Served"
            icon={Users}
          />
          <AnimatedStat
            value={250}
            suffix="M+"
            prefix="$"
            label="In Loans Secured"
            icon={Home}
          />
          <AnimatedStat
            value={98}
            suffix="%"
            label="Customer Satisfaction"
            icon={Award}
          />
        </div>
      </div>
    </section>
  );
}
