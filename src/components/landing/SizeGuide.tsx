"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dogRows = [
  { size: "XS", neck: "22–28 cm", weight: "2–4 kg", breeds: "Chihuahua, Yorkshire mini" },
  { size: "S", neck: "28–35 cm", weight: "4–8 kg", breeds: "Poodle toy, Frenchie pequeño" },
  { size: "M", neck: "35–43 cm", weight: "8–18 kg", breeds: "Beagle, Border collie", popular: true },
  { size: "L", neck: "43–51 cm", weight: "18–32 kg", breeds: "Labrador, Golden joven" },
  { size: "XL", neck: "51–60 cm", weight: "32–45 kg", breeds: "Pastor alemán, Rottweiler" },
];

const catRows = [
  { size: "S", neck: "20–24 cm", weight: "2–3,5 kg", breeds: "Gatito, Sphynx" },
  { size: "M", neck: "24–30 cm", weight: "3,5–5,5 kg", breeds: "Común europeo, Persa", popular: true },
  { size: "L", neck: "30–35 cm", weight: "5,5–8 kg", breeds: "Maine Coon joven" },
];

export default function SizeGuide() {
  const [activeTab, setActiveTab] = useState<"perro" | "gato">("perro");

  return (
    <section id="tallas" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0]/50 to-white py-16 scroll-mt-24 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 h-40 w-px bg-gradient-to-b from-transparent via-[#E8DCC8] to-transparent" />
      <div className="absolute right-10 bottom-20 h-40 w-px bg-gradient-to-b from-transparent via-[#E8DCC8] to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white">
            Guía de tallas
          </Badge>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
            El collar perfecto para{" "}
            <span className="italic text-[#E05C3A]">cada tamaño</span>
          </h2>
          <p className="mt-4 text-[#7A6E66]">Encuentra la talla ideal para tu mascota</p>
        </motion.div>

        {/* Toggle Perro/Gato - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 flex max-w-md rounded-full bg-white p-2 shadow-xl"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab("perro")}
            className={cn(
              "flex flex-1 items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold transition-all",
              activeTab === "perro"
                ? "bg-gradient-to-r from-[#1C1410] to-[#2a231d] text-white shadow-lg"
                : "text-[#7A6E66] hover:text-[#1C1410]"
            )}
          >
            <svg className={cn("size-8", activeTab === "perro" ? "text-[#E05C3A]" : "text-[#7A6E66]")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
              <path d="M8 14v.5" />
              <path d="M16 14v.5" />
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a12.15 12.15 0 0 0-.493-3.309" />
            </svg>
            <span className="text-base">Perros</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab("gato")}
            className={cn(
              "flex flex-1 items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold transition-all",
              activeTab === "gato"
                ? "bg-gradient-to-r from-[#1C1410] to-[#2a231d] text-white shadow-lg"
                : "text-[#7A6E66] hover:text-[#1C1410]"
            )}
          >
            <svg className={cn("size-8", activeTab === "gato" ? "text-[#E05C3A]" : "text-[#7A6E66]")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
              <path d="M8 14v.5" />
              <path d="M16 14v.5" />
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
            </svg>
            <span className="text-base">Gatos</span>
          </motion.button>
        </motion.div>

        {/* Tabla de tallas - Enhanced Design */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Cards de tallas */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(activeTab === "perro" ? dogRows : catRows).map((row, index) => (
                <motion.div
                  key={row.size}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card
                    className={cn(
                      "relative overflow-hidden rounded-2xl border-2 p-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                      row.popular 
                        ? "border-[#E05C3A] bg-white" 
                        : "border-[#E8DCC8] bg-white hover:border-[#E05C3A]/30"
                    )}
                  >
                    {row.popular && (
                      <div className="absolute right-0 top-0 bg-gradient-to-l from-[#E05C3A] to-[#D04C2A] px-4 py-1.5 text-xs font-semibold text-white">
                        ⭐ Más popular
                      </div>
                    )}
                    
                    <div className="p-6">
                      {/* Size header */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className={cn(
                          "flex h-16 w-16 items-center justify-center rounded-2xl font-mono text-2xl font-bold shadow-lg",
                          row.popular 
                            ? "bg-gradient-to-br from-[#E05C3A] to-[#D04C2A] text-white" 
                            : "bg-[#FAF6F0] text-[#1C1410]"
                        )}>
                          {row.size}
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#7A6E66]">Rango de cuello</p>
                          <p className="font-mono text-lg font-bold text-[#1C1410]">{row.neck}</p>
                        </div>
                      </div>

                      {/* Info grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl bg-[#FAF6F0] p-3">
                          <div className="flex items-center gap-2 text-[#E05C3A]">
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 3v18" />
                              <path d="M17 8h-5a2 2 0 1 0 0-4h4a2 2 0 0 1 0 4h-5" />
                              <circle cx="17" cy="17" r="3" />
                              <circle cx="7" cy="17" r="3" />
                            </svg>
                            <span className="text-xs font-medium">Peso</span>
                          </div>
                          <p className="mt-1 font-mono text-sm font-semibold text-[#1C1410]">{row.weight}</p>
                        </div>
                        <div className="rounded-xl bg-[#FAF6F0] p-3">
                          <div className="flex items-center gap-2 text-[#2D4A35]">
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                              <path d="M8 12h8M12 8v8" />
                            </svg>
                            <span className="text-xs font-medium">Razas</span>
                          </div>
                          <p className="mt-1 text-xs font-medium text-[#1C1410]">{row.breeds}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Card de ayuda - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Card className="relative overflow-hidden rounded-3xl border-2 border-[#E8DCC8] bg-white p-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] to-white" />
            <div className="relative flex flex-col items-center gap-6 p-8 sm:flex-row sm:p-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E05C3A] to-[#D04C2A] shadow-lg">
                <svg className="size-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
                  <path d="m14.5 12.5 2-2" />
                  <path d="m11.5 9.5 2-2" />
                  <path d="m8.5 6.5 2-2" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl font-bold text-[#1C1410]">
                  ¿No sabes la talla de tu mascota?
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#7A6E66]">
                  Mide el contorno del cuello con una cinta métrica. Deja espacio de 2
                  dedos entre la cinta y el cuello para un ajuste cómodo y seguro.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <div className="flex items-center gap-2 text-sm text-[#7A6E66]">
                    <svg className="size-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Medición en 30 segundos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#7A6E66]">
                    <svg className="size-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Asesoría personalizada</span>
                  </div>
                </div>
              </div>
              <Button className="shrink-0 rounded-full bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl">
                Contactar soporte
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
