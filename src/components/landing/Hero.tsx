"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#FAF6F0]"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#E05C3A]/20 blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -left-48 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#2D4A35]/15 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="flex min-h-screen flex-col items-center justify-center py-20 lg:py-0">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Badge
              variant="outline"
              className="rounded-full border-2 border-[#E05C3A]/20 bg-white/80 px-5 py-2 text-sm font-medium text-[#E05C3A] backdrop-blur-sm"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="mr-2"
              >
                ✦
              </motion.span>
              Diseño exclusivo 2026 · Hecho en Colombia
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#1C1410] sm:text-6xl md:text-7xl lg:text-8xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block font-sans"
              >
                Collares que
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block font-sans"
              >
                cuentan{" "}
                <motion.span
                  initial={{ color: "#1C1410" }}
                  animate={{ color: "#E05C3A" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="font-serif italic"
                >
                  historias.
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-lg text-center text-lg leading-relaxed text-[#7A6E66]"
          >
            Hechos a mano con cuero vegetal y telas orgánicas. Para perros y gatos
            que merecen lo mejor de{" "}
            <span className="font-semibold text-[#1C1410]">Colombia</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              className="group h-14 rounded-full bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] px-8 text-lg font-semibold text-white shadow-xl shadow-[#E05C3A]/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#E05C3A]/40"
              asChild
            >
              <a href="#productos" className="flex items-center gap-2">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Comprar ahora
              </a>
            </Button>
            <Button
              variant="ghost"
              className="group h-12 rounded-full text-[#1C1410] transition-all hover:bg-white/80 hover:text-[#E05C3A]"
              asChild
            >
              <a href="#productos" className="flex items-center gap-2">
                Ver colección
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </a>
            </Button>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mt-16 w-full max-w-5xl"
          >
            <div className="relative flex items-end justify-center gap-4 sm:gap-6">
              {/* Left image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ y: -8 }}
                className="relative h-[250px] w-[200px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="/images/photo-1769483167932-d4a3487deae2.jpg"
                  alt="Perro con collar"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">Collar Velvet</p>
                  <p className="text-xs text-white/70">Terracota · $34.900</p>
                </div>
              </motion.div>

              {/* Center image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative h-[250px] w-[200px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="/images/photo-1762372717252-5141bb453570.jpg"
                  alt="Collar premium detalle"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-sm font-bold text-[#1C1410]">Collar Velvet Camel</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-[#E05C3A]">$34.900</span>
                      <span className="font-mono text-xs text-[#7A6E66] line-through">$59.900</span>
                    </div>
                  </div>
                </div>
                {/* Best seller badge */}
                <div className="absolute right-3 top-3">
                  <Badge className="rounded-full bg-[#E05C3A] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    ⭐ Más vendido
                  </Badge>
                </div>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -8 }}
                className="relative h-[250px] w-[200px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="/images/photo-1759299615743-56d242be0925.jpg"
                  alt="Gato con collar"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">Collar Velvet Oliva</p>
                  <p className="text-xs text-white/70">Perfecto para gatos</p>
                </div>
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-4 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl md:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2D4A35]">
                <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1C1410]">100% Sostenible</p>
                <p className="text-xs text-[#7A6E66]">Materiales eco</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl md:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E05C3A]">
                <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1C1410]">Envío GRATIS</p>
                <p className="text-xs text-[#7A6E66]">Pedidos +$80.000</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#7A6E66]"
          >
            <span className="flex items-center gap-2">
              <svg className="size-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Envío gratis
            </span>
            <span className="text-[#E8DCC8]">•</span>
            <span className="flex items-center gap-2">
              <svg className="size-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              30 días devolución
            </span>
            <span className="text-[#E8DCC8]">•</span>
            <span className="flex items-center gap-2">
              <svg className="size-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Pago seguro
            </span>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["V", "A", "L", "D", "C"].map((initial, i) => (
                <motion.div
                  key={initial}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white",
                    i === 0 && "bg-[#E05C3A]",
                    i === 1 && "bg-[#2D4A35]",
                    i === 2 && "bg-[#E05C3A]/80",
                    i === 3 && "bg-[#2D4A35]/80",
                    i === 4 && "bg-[#7A6E66]"
                  )}
                >
                  {initial}
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1C1410]">
                +4.800 mascotas felices
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="size-3 fill-[#E05C3A]" viewBox="0 0 24 24">
                    <path d="M12 17.3 18.2 21l-1.7-7L22 9.3l-7.2-.6L12 2 9.2 8.7 2 9.3 7.5 14 5.8 21z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-[#7A6E66]">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-[#7A6E66]"
        >
          <span className="text-xs">Scroll para explorar</span>
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
