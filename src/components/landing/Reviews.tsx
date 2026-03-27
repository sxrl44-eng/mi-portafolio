"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const breakdown = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 8 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0.5 },
  { stars: 1, pct: 0.5 },
];

const reviews = [
  {
    text: "Mi Golden de 28 kg tira fuerte en los paseos: la hebilla no cede y el cuero sigue impecable después de tres semanas de barro y lluvia. ¡Increíble calidad!",
    date: "12 mar 2026",
    name: "Valentina S.",
    city: "Medellín",
    product: "Collar Velvet · L",
    initials: "VS",
    verified: true,
  },
  {
    text: "Pedí grabado con dos líneas y quedó claro y centrado. Llegó en 48 horas a Bogotá con caja lista para regalo. Mi labrador amó su nuevo collar.",
    date: "10 mar 2026",
    name: "Andrés M.",
    city: "Bogotá",
    product: "Pack Aventura",
    initials: "AM",
    verified: true,
  },
  {
    text: "Mi Persa odia todo lo rígido: este collar es liviano y no le roce el pelo del cuello. Por fin dejó de rascarse. Llegó rápido a Cali.",
    date: "5 mar 2026",
    name: "Lucía P.",
    city: "Cali",
    product: "Collar Velvet · S",
    initials: "LP",
    verified: true,
  },
  {
    text: "La talla M calzó perfecto para mi Boston de 11 kg. El soporte por WhatsApp me respondió en 10 minutos con fotos de referencia. Muy atentos.",
    date: "1 mar 2026",
    name: "Diego R.",
    city: "Barranquilla",
    product: "Collar Velvet · M",
    initials: "DR",
    verified: true,
  },
  {
    text: "La pechera Oliva reparte bien la fuerza cuando mi labrador corre en el parque de Bucaramanga. Nada de rozaduras en axilas. La recomiendo.",
    date: "25 feb 2026",
    name: "Camila N.",
    city: "Bucaramanga",
    product: "Pechera Oliva",
    initials: "CN",
    verified: true,
  },
  {
    text: "Compré el Pack Manada para mis dos gatos: los S y M vienen con cierre que no se abre con uñas. Alivio total en casa. Llegó a Pereira sin problema.",
    date: "20 feb 2026",
    name: "Esteban F.",
    city: "Pereira",
    product: "Pack Manada",
    initials: "EF",
    verified: true,
  },
];

function StarRow({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex text-[#E05C3A]"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-5 fill-current">
          <path d="M12 17.3 18.2 21l-1.7-7L22 9.3l-7.2-.6L12 2 9.2 8.7 2 9.3 7.5 14 5.8 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [barWidths, setBarWidths] = useState<number[]>(() => breakdown.map(() => 0));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const t = window.setTimeout(() => {
        setBarWidths(breakdown.map((b) => b.pct));
      }, 200);
      return () => window.clearTimeout(t);
    }
  }, [inView]);

  return (
    <section id="resenas" ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-[#FAF6F0]/30 py-16 scroll-mt-24 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white">
              Reseñas verificadas
            </Badge>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
              Lo que dicen nuestros{" "}
              <span className="italic text-[#E05C3A]">clientes</span>
            </h2>
            <p className="mt-4 text-lg text-[#7A6E66]">
              Más de 1.240 dueños de mascotas en Colombia confían en nosotros.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-6 lg:items-end"
          >
            {/* Rating grande */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-baseline gap-4"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-mono text-8xl font-bold leading-none text-[#E05C3A]"
              >
                4.9
              </motion.span>
              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <StarRow />
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-1 text-sm text-[#7A6E66]"
                >
                  de 5.0 estrellas
                </motion.p>
              </div>
            </motion.div>
            
            {/* Barra de distribución */}
            <div className="w-full max-w-sm space-y-2.5">
              {breakdown.map((row, i) => (
                <motion.div 
                  key={row.stars} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="w-10 shrink-0 font-medium text-[#7A6E66]">
                    {row.stars}★
                  </span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E8DCC8]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${row.pct}%` : 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className={cn(
                        "h-full rounded-full",
                        row.stars >= 4 ? "bg-gradient-to-r from-[#E05C3A] to-[#D04C2A]" : "bg-[#E8DCC8]"
                      )}
                    />
                  </div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    className="w-12 shrink-0 text-right font-semibold text-[#1C1410]"
                  >
                    {row.pct}%
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <svg className="size-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span className="text-xs font-medium text-[#1C1410]">100% verificadas</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <svg className="size-4 text-[#E05C3A]" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="7" cy="8" r="2.2" />
                  <circle cx="12" cy="6.4" r="2.1" />
                  <circle cx="17" cy="8" r="2.2" />
                  <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
                </svg>
                <span className="text-xs font-medium text-[#1C1410]">CollarPet&apos;s</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, index) => (
            <motion.div
              key={r.name + r.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden rounded-2xl border border-[#E8DCC8] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <StarRow className="flex text-[#E05C3A] [&_svg]:size-4" />
                  <span className="rounded-full bg-[#FAF6F0] px-3 py-1 text-xs text-[#7A6E66]">
                    {r.date}
                  </span>
                </div>
                
                {/* Quote */}
                <p className="mb-5 text-sm leading-relaxed text-[#1C1410]">
                  <span className="text-lg text-[#E05C3A]">&ldquo;</span>
                  {r.text}
                  <span className="text-lg text-[#E05C3A]">&rdquo;</span>
                </p>
                
                {/* Autor */}
                <div className="mt-auto flex items-center gap-3 border-t border-[#E8DCC8]/60 pt-4">
                  <Avatar className="size-11 ring-2 ring-[#FAF6F0] transition-all group-hover:ring-[#E05C3A]/30">
                    <AvatarFallback className="bg-gradient-to-br from-[#E05C3A]/10 to-[#E05C3A]/5 text-sm font-bold text-[#E05C3A]">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1C1410]">{r.name}</p>
                    <p className="text-xs text-[#7A6E66]">{r.city}, Colombia</p>
                  </div>
                  {r.verified && (
                    <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 3 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      Verificado
                    </div>
                  )}
                </div>
                
                {/* Producto */}
                <div className="mt-3">
                  <Badge className="w-full justify-center rounded-lg bg-[#FAF6F0] py-2 text-xs font-medium text-[#1C1410]">
                    {r.product}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-[#7A6E66]">
            ¿Listo para que tu mascota sea la próxima en brillar?
          </p>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 rounded-full bg-[#E05C3A] px-8 py-4 font-semibold text-white transition-all hover:bg-[#D04C2A] hover:shadow-lg hover:shadow-[#E05C3A]/25"
          >
            Ver packs disponibles
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}