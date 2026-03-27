"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const materials = [
  {
    value: "cuero",
    tab: "Cuero Vegetal",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Cuero vegetal de curtido limpio",
    p1: "Trabajamos con proveedores que curtien sin cromo pesado. El resultado es una piel flexible que gana patina con el tiempo en lugar de agrietarse.",
    p2: "Ideal para mascotas con piel sensible: menos químicos agresivos y un tacto más natural desde el primer paseo.",
    badges: ["Hipoalergénico", "Aging noble", "Fácil de limpiar", "Resistente al roce"],
    cert: "Leather Working Group (LWG)",
    image: "/images/photo-1667716705760-233650f8f3fe.jpg",
    color: "bg-amber-100",
    textColor: "text-amber-700",
  },
  {
    value: "telas",
    tab: "Telas Orgánicas",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    ),
    title: "Telas orgánicas con soporte interno",
    p1: "Mezcla de algodón orgánico y refuerzo interno para que el collar no se deforme cuando tiran de la correa.",
    p2: "Lavado suave a mano o en ciclo delicado: mantienen color y textura sin necesidad de químicos fuertes.",
    badges: ["Transpirable", "Color estable", "Ultra liviano", "Secado rápido"],
    cert: "GOTS (partner)",
    image: "/images/photo-1769483167932-d4a3487deae2.jpg",
    color: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    value: "metal",
    tab: "Metal Premium",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Hebillas de acero inoxidable 316L",
    p1: "Priorizamos acero quirúrgico por su resistencia al sudor, la lluvia y los golpes del día a día.",
    p2: "Mecanizado preciso: menos holgura entre hebilla y lengüeta, más seguridad cuando la mascota tira fuerte.",
    badges: ["Antioxidante", "Cierre firme", "Sin níquel expuesto", "Prueba de carga"],
    cert: "Norma ISO de acero inoxidable",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    color: "bg-slate-200",
    textColor: "text-slate-700",
  },
  {
    value: "costuras",
    tab: "Costuras",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    title: "Costuras dobles y puntadas selladas",
    p1: "Dobladillo reforzado en zonas de tensión (enganche y argolla) para repartir la fuerza cuando el collar trabaja al máximo.",
    p2: "Hilo encerado y control de tensión por tramo: menos riesgo de que un burrito se abra con el uso.",
    badges: ["Doble costura", "Esquinas reforzadas", "Control QA por lote", "Garantía extendida"],
    cert: "Protocolo interno CollarPet QA-02",
    image: "/images/photo-1759299615743-56d242be0925.jpg",
    color: "bg-orange-100",
    textColor: "text-orange-700",
  },
] as const;

export default function MaterialStory() {
  const [activeTab, setActiveTab] = useState("cuero");
  const activeMaterial = materials.find((m) => m.value === activeTab) || materials[0];

  return (
    <section id="materiales" className="relative overflow-hidden bg-gradient-to-b from-white to-[#FAF6F0]/50 py-16 scroll-mt-24 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white">
              Materiales
            </Badge>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
              Cada detalle <span className="italic text-[#E05C3A]">importa</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#7A6E66]">
            Publicamos la ficha de cada material porque tu mascota merece saber qué
            lleva al cuello.
          </p>
        </div>

        {/* Tabs con iconos */}
        <div className="mb-8 flex flex-wrap gap-2">
          {materials.map((m) => (
            <motion.button
              key={m.value}
              onClick={() => setActiveTab(m.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeTab === m.value
                  ? "bg-[#1C1410] text-white shadow-lg"
                  : "bg-white text-[#7A6E66] hover:bg-[#FAF6F0] hover:text-[#1C1410] border border-[#E8DCC8]"
              )}
            >
              {m.icon}
              {m.tab}
            </motion.button>
          ))}
        </div>

        {/* Contenido del material activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12"
          >
            {/* Imagen con color de fondo */}
            <div className="relative">
              <div className={cn("absolute inset-0 rounded-3xl opacity-30", activeMaterial.color)} />
              <Card className="relative overflow-hidden rounded-3xl border-0 shadow-xl">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.tab}
                  className="aspect-[4/3] w-full object-cover transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </Card>
            </div>

            {/* Detalles del material */}
            <div className="flex flex-col justify-center gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", activeMaterial.color, activeMaterial.textColor)}>
                  {activeMaterial.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1410]">
                  {activeMaterial.title}
                </h3>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base leading-relaxed text-[#7A6E66]"
              >
                {activeMaterial.p1}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base leading-relaxed text-[#7A6E66]"
              >
                {activeMaterial.p2}
              </motion.p>

              {/* Badges de propiedades */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {activeMaterial.badges.map((b) => (
                  <Badge
                    key={b}
                    className={cn("rounded-full px-4 py-1.5 font-medium", activeMaterial.color, activeMaterial.textColor)}
                  >
                    {b}
                  </Badge>
                ))}
              </motion.div>

              {/* Certificación */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="rounded-2xl border-2 border-[#2D4A35]/20 bg-gradient-to-r from-[#FAF6F0] to-white p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D4A35] to-[#1A2D20] shadow-lg">
                      <svg className="size-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#2D4A35]">
                        ✓ Certificación verificada
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[#1C1410]">
                        {activeMaterial.cert}
                      </p>
                      <p className="mt-1 text-xs text-[#7A6E66]">
                        Cada lote pasa por control de calidad
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
