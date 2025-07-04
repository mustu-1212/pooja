import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ value, label, suffix = "+" }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (2000 / 16); // 2 seconds duration
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-8 rounded-2xl bg-gradient-to-br from-theme-primary/5 to-theme-accent/5 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl font-bold text-theme-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 20, label: "Collaborations" },
    { value: 50, label: "Stage Shows" },
    { value: 100, label: "Followers", suffix: "K+" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
