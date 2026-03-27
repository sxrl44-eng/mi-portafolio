"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const rows = [
  { label: "Materiales naturales", other: "x", us: "check", luxury: "check" },
  { label: "Envío express", other: "dash", us: "check", luxury: "check" },
  { label: "Personalización", other: "x", us: "check", luxury: "check" },
  { label: "Garantía 30 días", other: "dash", us: "check", luxury: "check" },
  { label: "Tallas para gatos", other: "x", us: "check", luxury: "dash" },
  { label: "Precio justo", other: "check", us: "check", luxury: "x" },
  { label: "Soporte WhatsApp", other: "x", us: "check", luxury: "dash" },
  { label: "Diseño exclusivo", other: "x", us: "check", luxury: "check" },
] as const;

function Cell({ kind }: { kind: "check" | "x" | "dash" }) {
  if (kind === "dash") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF6F0] font-mono text-sm text-[#7A6E66]">
        —
      </span>
    );
  }
  if (kind === "check") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
        <svg className="size-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
      <svg className="size-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function WhyDifferent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FAF6F0] py-20 sm:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E05C3A]/5 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#2D4A35]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mx-0 lg:mb-20 lg:text-left"
        >
          <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white px-4 py-2">
            Por qué CollarPet&apos;s
          </Badge>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl lg:text-6xl">
            Lo que nos hace{" "}
            <span className="italic text-[#E05C3A]">únicos</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#7A6E66]">
            Comparación honesta: misma obsesión por el detalle, sin inflar el precio.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {/* Otras marcas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="h-full border border-[#E8DCC8]/60 bg-white/80 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                  <svg className="size-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                  </svg>
                </div>
                <p className="font-semibold text-[#7A6E66]">Otras marcas</p>
                <p className="mt-1 text-xs text-[#7A6E66]/70">Genérico</p>
              </div>
              <div className="space-y-4 border-t border-[#E8DCC8]/60 pt-6">
                {rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex-1 text-[#7A6E66]">{r.label}</span>
                    <Cell kind={r.other} />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-2xl font-bold text-gray-400">$25.000+</p>
                <p className="text-xs text-gray-500">Collar básico</p>
              </div>
            </Card>
          </motion.div>

          {/* CollarPet's */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className="relative md:-mt-4 md:mb-4"
          >
            <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
              <Badge className="rounded-full bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#E05C3A]/30">
                ⭐ Mejor opción
              </Badge>
            </div>
            <Card className="relative h-full border-2 border-[#E05C3A] bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <div className="mb-6 pt-2 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E05C3A]/10 to-[#E05C3A]/5">
                  <svg className="h-7 w-7 text-[#E05C3A]" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="7" cy="8" r="2.2" />
                    <circle cx="12" cy="6.4" r="2.1" />
                    <circle cx="17" cy="8" r="2.2" />
                    <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-[#1C1410]">CollarPet&apos;s</p>
                <p className="mt-1 text-sm font-medium text-[#E05C3A]">Premium accesible</p>
              </div>
              <div className="space-y-4 border-t border-[#E8DCC8] pt-6">
                {rows.map((r) => (
                  <motion.div 
                    key={r.label} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between gap-3 text-sm font-medium text-[#1C1410]"
                  >
                    <span className="flex-1">{r.label}</span>
                    <Cell kind={r.us} />
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-[#E05C3A]/10 to-[#E05C3A]/5 p-4 text-center border border-[#E05C3A]/20">
                <p className="text-3xl font-bold text-[#E05C3A] font-mono">$45.900</p>
                <p className="text-sm text-[#E05C3A]/80">Pack completo</p>
              </div>
            </Card>
          </motion.div>

          {/* Marcas de lujo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="h-full border border-[#E8DCC8]/60 bg-white/80 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">
                  <svg className="size-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <p className="font-semibold text-[#7A6E66]">Marcas de lujo</p>
                <p className="mt-1 text-xs text-[#7A6E66]/70">Premium costoso</p>
              </div>
              <div className="space-y-4 border-t border-[#E8DCC8]/60 pt-6">
                {rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex-1 text-[#7A6E66]">{r.label}</span>
                    <Cell kind={r.luxury} />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-amber-50 p-4 text-center">
                <p className="text-2xl font-bold text-amber-600">$150.000+</p>
                <p className="text-xs text-amber-600/70">Collar premium</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: "🏆", text: "12.000+ vendidos" },
            { icon: "⭐", text: "4.9/5 estrellas" },
            { icon: "🇨🇴", text: "Hecho en Colombia" },
            { icon: "🌱", text: "Materiales sustentables" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-[#7A6E66]">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}