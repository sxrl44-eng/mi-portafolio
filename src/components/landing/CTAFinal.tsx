"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D4A35] via-[#2D4A35] to-[#1A2D20] py-28 sm:py-36">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E05C3A]/30 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -left-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-[#E05C3A]/20 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        />
        
        {/* Floating paw prints - enhanced */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.04, 0.08, 0.04],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            className="absolute text-white"
            style={{
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i * 7) % 80}%`,
            }}
          >
            <svg className={cn("size-12", i % 3 === 0 ? "size-16" : i % 3 === 1 ? "size-14" : "size-12")} viewBox="0 0 24 24" fill="currentColor">
              <circle cx="7" cy="8" r="2.2" />
              <circle cx="12" cy="6.4" r="2.1" />
              <circle cx="17" cy="8" r="2.2" />
              <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        {/* Icon with glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#E05C3A] blur-2xl opacity-40" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E05C3A] to-[#D04C2A] shadow-2xl">
              <svg className="size-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="7" cy="8" r="2.2" />
                <circle cx="12" cy="6.4" r="2.1" />
                <circle cx="17" cy="8" r="2.2" />
                <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Main heading - enhanced */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Dale a tu mascota el{" "}
          <motion.span
            initial={{ color: "#FFFFFF" }}
            whileInView={{ color: "#E05C3A" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="italic"
          >
            look
          </motion.span>
          <br />
          que se merece
        </motion.h2>
        
        {/* Subtitle - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Collares, pecheras y accesorios premium hechos con amor en{" "}
            <span className="font-semibold text-white">Colombia</span>.
          </p>
          <p className="mt-2 text-lg font-medium text-white/90">
            Envío rápido y asesoría personalizada incluida.
          </p>
        </motion.div>
        
        {/* Trust badges - enhanced with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              ), text: "Envío rápido a Colombia" },
            { icon: (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
                </svg>
              ), text: "Cambios sin costo" },
            { icon: (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              ), text: "Soporte WhatsApp 24/7" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm border border-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E05C3A]/20 text-[#E05C3A]">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-white">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main CTA - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 w-full max-w-lg"
        >
          <motion.a
            href="#precios"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 30px 60px -15px rgba(224, 92, 58, 0.6)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="flex h-18 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] text-xl font-bold text-white shadow-2xl transition-all"
          >
            <span>Ver toda la colección</span>
            <svg className="ml-3 size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
        
        {/* Sub text - enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50"
        >
          <span>Sin registro</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Pago 100% seguro</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Envío en 72h</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Garantía 30 días</span>
        </motion.div>
        
        {/* Trust indicators - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-10 rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10"
        >
          {[
            { icon: (
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ), text: "Compra Protegida" },
            { icon: (
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ), text: "Pago SSL" },
            { icon: (
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ), text: "Envío 72h" },
          ].map((item, i) => (
            <motion.div 
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-3 text-white/60"
            >
              <div className="text-white/40">
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}