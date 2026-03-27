"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const variants = [
  {
    id: "camel",
    label: "Marrón Camel",
    collarName: "Collar Velvet Camel",
    color: "bg-amber-700",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/photo-1762372717252-5141bb453570.jpg",
    description: "Clásico atemporal para cualquier ocasión. El tono camel se combina con todo.",
    features: [
      "Cuero vegetal curtido al natural",
      "Hebilla en bronce envejecido",
      "Costuras reforzadas tono camel",
      "Acabado resistente al agua",
    ],
  },
  {
    id: "onyx",
    label: "Negro Onyx",
    collarName: "Collar Velvet Onyx",
    color: "bg-neutral-900",
    badgeClass: "bg-neutral-100 text-neutral-800",
    image: "/images/photo-1667716705760-233650f8f3fe.jpg",
    description: "Elegancia moderna para mascotas sofisticadas. El negro nunca falla.",
    features: [
      "Cuero vegetal teñido premium",
      "Hebilla acero quirúrgico 316L",
      "Costuras dobles reforzadas",
      "100% hipoalergénico",
    ],
  },
  {
    id: "terracota",
    label: "Terracota",
    collarName: "Collar Velvet Terracota",
    color: "bg-[#E05C3A]",
    badgeClass: "bg-[#E05C3A]/10 text-[#E05C3A]",
    image: "/images/photo-1769483167932-d4a3487deae2.jpg",
    description: "Nuestro color estrella, único en Colombia. Destaca en cada paseo.",
    features: [
      "Cuero vegetal pigmentado artesanal",
      "Hebilla en acero inoxidable",
      "Tintes naturales sin químicos",
      "Patina única con el uso",
    ],
  },
  {
    id: "oliva",
    label: "Oliva",
    collarName: "Collar Velvet Oliva",
    color: "bg-[#2D4A35]",
    badgeClass: "bg-[#2D4A35]/10 text-[#2D4A35]",
    image: "/images/photo-1759299615743-56d242be0925.jpg",
    description: "Inspirado en la naturaleza colombiana. Fresco y versátil.",
    features: [
      "Cuero vegetal color oliva",
      "Hebilla en acero pulido",
      "Resistente a manchas",
      "Ajuste suave desde el primer día",
    ],
  },
  {
    id: "cognac",
    label: "Cognac",
    collarName: "Collar Velvet Cognac",
    color: "bg-amber-900",
    badgeClass: "bg-amber-100 text-amber-900",
    image: "/images/photo-1763718346758-76cde512a520.jpg",
    description: "Tonos profundos que se ven mejor con el tiempo. Elegancia natural.",
    features: [
      "Cuero vegetal curtido lento",
      "Hebilla latón envejecido",
      "Color que se intensifica",
      "Máxima durabilidad al uso diario",
    ],
  },
] as const;

const sizes = ["XS", "S", "M", "L", "XL"] as const;

function CheckIcon() {
  return (
    <svg className="size-5 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductShowcase() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState<(typeof sizes)[number]>("M");
  const v = variants[selectedVariant];

  return (
    <section
      id="productos"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] to-white py-20 scroll-mt-24 sm:py-32"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 h-32 w-px bg-[#E8DCC8]" />
      <div className="absolute left-0 top-40 h-24 w-px bg-[#E8DCC8]/60" />
      <div className="absolute right-0 bottom-20 h-40 w-px bg-[#E8DCC8]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="w-fit rounded-full border-2 border-[#E05C3A]/20 bg-[#E05C3A]/5 px-5 py-2 text-sm font-medium text-[#E05C3A]"
            >
              ✦ Producto estrella
            </Badge>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#1C1410] md:text-5xl lg:text-6xl">
              El collar que tu mascota{" "}
              <span className="italic text-[#E05C3A]">merece</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#7A6E66] lg:text-right">
            Diseñado en Colombia para el día a día: ajuste firme, tacto suave y un
            acabado que aguanta paseos, juegos y fotos.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Card className="relative overflow-hidden rounded-3xl border-0 bg-[#FAF6F0] shadow-2xl shadow-[#1C1410]/10">
              {/* Imagen principal - aspect ratio fijo */}
              <div className="aspect-square">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={v.image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={v.image}
                    alt={`Collar Velvet Premium color ${v.label}`}
                    className="h-full w-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Badge flotante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm"
              >
                <p className="font-serif text-lg font-semibold text-[#1C1410]">{v.label}</p>
              </motion.div>
            </Card>

            {/* Miniaturas - Todas del mismo tamaño */}
            <div className="mt-4 grid grid-cols-5 gap-3">
              {variants.map((variant, i) => (
                <motion.button
                  key={variant.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedVariant(i)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl transition-all duration-300",
                    selectedVariant === i
                      ? "ring-2 ring-[#E05C3A] ring-offset-2 ring-offset-white"
                      : "hover:ring-2 hover:ring-[#E8DCC8]"
                  )}
                >
                  {/* Tamaño fijo pequeño */}
                  <div className="h-20 w-full">
                    <img
                      src={variant.image}
                      alt={variant.label}
                      className="h-full w-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  {selectedVariant === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20"
                    >
                      <div className="h-2 w-2 rounded-full bg-white shadow-lg ring-2 ring-[#E05C3A]" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Columna de detalles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 lg:pl-4"
          >
            {/* Badge de variante */}
            <AnimatePresence mode="wait">
              <Badge key={v.id} className={cn("w-fit rounded-full px-4 py-1.5", v.badgeClass)}>
                {v.label}
              </Badge>
            </AnimatePresence>

            {/* Nombre del producto dinámico */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={v.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-3xl font-bold text-[#1C1410] md:text-4xl"
              >
                {v.collarName}
              </motion.h3>
            </AnimatePresence>

            {/* Descripción dinámica */}
            <AnimatePresence mode="wait">
              <motion.p
                key={v.id + '-desc'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-base text-[#7A6E66]"
              >
                {v.description}
              </motion.p>
            </AnimatePresence>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="size-5 fill-[#E05C3A]">
                    <path d="M12 17.3 18.2 21l-1.7-7L22 9.3l-7.2-.6L12 2 9.2 8.7 2 9.3 7.5 14 5.8 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#7A6E66]">
                <span className="font-semibold text-[#1C1410]">4.9</span> · 1.240 reseñas
              </span>
            </div>

            {/* Precio */}
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-5xl font-bold text-[#E05C3A]">$34.900</span>
                <span className="text-sm text-[#7A6E66]">COP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xl text-[#7A6E66] line-through">$59.900</span>
                <Badge className="mt-1 w-fit bg-green-100 text-green-700">
                  Ahorras $25.000 (42% OFF)
                </Badge>
              </div>
            </div>

            <Separator className="bg-[#E8DCC8]" />

            {/* Selector de talla */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1C1410]">
                Talla
              </p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <motion.button
                    key={s}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(s)}
                    className={cn(
                      "min-w-[3.5rem] rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                      selectedSize === s
                        ? "border-[#E05C3A] bg-[#E05C3A] text-white shadow-lg shadow-[#E05C3A]/25"
                        : "border-[#E8DCC8] bg-white text-[#1C1410] hover:border-[#E05C3A]/50",
                    )}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Atributos dinámicos */}
            <div className="grid grid-cols-2 gap-3">
              <AnimatePresence mode="wait">
                {v.features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-[#1C1410]"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-16 w-full rounded-2xl bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] text-lg font-semibold text-white shadow-xl shadow-[#E05C3A]/30 transition-all hover:shadow-2xl"
              >
                Agregar al carrito — $34.900
              </motion.button>
              <p className="flex items-center justify-center gap-2 text-sm text-[#7A6E66]">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Envío gratis +$80.000 · Llega en 2–4 días
              </p>
              <Button variant="outline" className="h-12 rounded-2xl border-2 border-[#E8DCC8] text-[#1C1410] hover:bg-[#FAF6F0] hover:border-[#E05C3A]" asChild>
                <a href="#precios">Ver packs con descuento →</a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { 
                  icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>,
                  text: "Pago seguro SSL" 
                },
                { 
                  icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" /></svg>,
                  text: "30 días devolución" 
                },
                { 
                  icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>,
                  text: "Soporte WhatsApp" 
                },
              ].map((item) => (
                <Badge
                  key={item.text}
                  variant="secondary"
                  className="gap-1.5 rounded-full bg-[#FAF6F0] px-4 py-2 text-xs font-medium text-[#1C1410]"
                >
                  {item.icon}
                  {item.text}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
