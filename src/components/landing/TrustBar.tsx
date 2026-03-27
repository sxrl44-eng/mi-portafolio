"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: 4800,
    suffix: "+",
    label: "Mascotas felices",
    icon: (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 9.164 9 9.75 9.168 8.25 9.375 8.25.75 8.586.75 9.75 1.168 10.5 1.375 10.5 1.5 9.75 1.5 9.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.082-.375-.75.168-.75.375-.75.375.082.375.75Zm6 0c0 .414-.168.75-.375.75s-.375-.082-.375-.75.168-.75.375-.75.375.082.375.75Z" />
      </svg>
    ),
    color: "from-[#E05C3A]/20 to-[#E05C3A]/5",
    iconColor: "text-[#E05C3A]",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfacción",
    icon: (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    color: "from-[#2D4A35]/20 to-[#2D4A35]/5",
    iconColor: "text-[#2D4A35]",
  },
  {
    value: 72,
    suffix: "h",
    label: "Envío express",
    icon: (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
    ),
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-600",
  },
  {
    value: 30,
    suffix: " días",
    label: "Garantía total",
    icon: (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-600",
  },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2500;
    const steps = 80;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-mono text-4xl font-bold text-[#1C1410] md:text-5xl">
      {count.toLocaleString("es-CO")}{suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/50 to-white" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative rounded-3xl border border-[#E8DCC8] bg-white p-6 transition-all duration-300 hover:border-[#E05C3A]/30 hover:shadow-lg">
                {/* Background gradient */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  metric.color
                )} />
                
                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300",
                      metric.color,
                      metric.iconColor
                    )}
                  >
                    {metric.icon}
                  </motion.div>
                  
                  {/* Number */}
                  <AnimatedNumber target={metric.value} suffix={metric.suffix} inView={inView} />
                  
                  {/* Label */}
                  <span className="mt-2 text-sm font-medium text-[#7A6E66]">
                    {metric.label}
                  </span>
                </div>

                {/* Decorative corner */}
                <div className="absolute -right-1 -top-1 h-8 w-8">
                  <div className={cn(
                    "absolute right-0 top-0 h-px w-6 transition-colors duration-300",
                    "bg-transparent group-hover:bg-[#E05C3A]/20"
                  )} />
                  <div className={cn(
                    "absolute right-0 top-0 h-6 w-px transition-colors duration-300",
                    "bg-transparent group-hover:bg-[#E05C3A]/20"
                  )} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#7A6E66]">
            Confían en nosotros mascotas y dueños de{" "}
            <span className="font-semibold text-[#1C1410]">Bogotá, Medellín, Cali</span>{" "}
            y toda Colombia
          </p>
        </motion.div>
      </div>
    </section>
  );
}