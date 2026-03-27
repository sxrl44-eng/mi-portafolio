"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

function CheckGreen() {
  return (
    <svg className="size-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "once">("monthly");
  const [secondsLeft, setSecondsLeft] = useState(2 * 3600 + 45 * 60 + 12);

  useEffect(() => {
    const idTimer = window.setInterval(() => {
      setSecondsLeft((s) => (s <= 0 ? 2 * 3600 + 45 * 60 + 12 : s - 1));
    }, 1000);
    return () => window.clearInterval(idTimer);
  }, []);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  const countdown = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  const disc = billing === "once" ? 0.85 : 1;

  const packs = [
    {
      name: "Pack Paseo",
      desc: "Lo esencial para paseos elegantes",
      price: 45_900,
      old: 59_900,
      savings: 14_000,
      includes: [
        "1 collar Velvet (cuero vegetal)",
        "1 placa personalizada grabada",
        "Bolsa ecológica reutilizable",
        "Guía de tallas premium",
      ],
      cta: "Elegir Pack Paseo",
      variant: "basic" as const,
      badge: null,
    },
    {
      name: "Pack Aventura",
      desc: "Todo lo que tu mascota necesita",
      price: 89_900,
      old: 119_900,
      savings: 30_000,
      includes: [
        "1 collar Velvet (cuero vegetal)",
        "1 pechera ergonómica Oliva",
        "1 placa personalizada grabada",
        "1 bandana de tela premium",
        "Envío express GRATIS (24-48h)",
        "Soporte WhatsApp prioritario",
        "Bolsa ecológica + guía de tallas",
      ],
      cta: "Elegir Pack Aventura",
      variant: "pro" as const,
      badge: "Más elegido",
      sub: "Por dueños de perros activos",
    },
    {
      name: "Pack Manada",
      desc: "Ideal para hogares con 2+ mascotas",
      price: 149_900,
      old: 189_900,
      savings: 40_000,
      includes: [
        "2 collares Velvet (S + M/L)",
        "2 placas personalizadas grabadas",
        "1 pechera ergonómica compartible",
        "2 bandanas de tela premium",
        "Caja regalo premium kraft",
        "Nota manuscrita personalizada",
        "Envío express GRATIS (24-48h)",
      ],
      cta: "Elegir Pack Manada",
      variant: "elite" as const,
      badge: "Mejor valor",
    },
  ];

  function fmtCOP(n: number) {
    return `$${Math.round(n).toLocaleString("es-CO").replace(/,/g, ".")}`;
  }

  return (
    <section id="precios" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] to-white py-16 scroll-mt-24 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white">
              Packs
            </Badge>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
              El regalo perfecto para{" "}
              <span className="italic text-[#E05C3A]">tu mejor amigo</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex items-center gap-2 rounded-full bg-[#E05C3A]/10 px-4 py-2">
              <svg className="size-4 text-[#E05C3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <span className="font-mono text-sm font-semibold text-[#E05C3A]">Oferta termina en: {countdown}</span>
            </div>
            <p className="text-sm text-[#7A6E66]">
              Ahorra hasta <span className="font-bold text-[#2D4A35]">$40.000</span> con los packs
            </p>
          </div>
        </div>

        {/* Packs */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {packs.map((pack, index) => {
            const isPro = pack.variant === "pro";
            const isElite = pack.variant === "elite";

            return (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn("relative", isPro && "lg:z-10 lg:scale-[1.02]")}
              >
                {pack.badge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={cn(
                      "absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg",
                      isPro ? "bg-[#E05C3A] text-white" : isElite ? "bg-[#2D4A35] text-white" : "bg-[#1C1410] text-white"
                    )}
                  >
                    {pack.badge === "Más elegido" && "⭐ "}
                    {pack.badge === "Mejor valor" && "💎 "}
                    {pack.badge}
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    boxShadow: isElite 
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)" 
                      : isPro 
                        ? "0 25px 50px -12px rgba(224, 92, 58, 0.25)"
                        : "0 25px 50px -12px rgba(28, 20, 16, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                <Card
                  className={cn(
                    "flex h-full flex-col rounded-3xl p-8 shadow-lg transition-all duration-300",
                    pack.variant === "basic" && "border-2 border-[#E8DCC8] bg-white",
                    isPro && "border-2 border-[#E05C3A] bg-white",
                    isElite && "border-0 bg-gradient-to-br from-[#2D4A35] to-[#1A2D20] text-white"
                  )}
                >
                  {/* Nombre y descripción */}
                  <div>
                    <h3
                      className={cn(
                        "font-serif text-2xl font-bold",
                        isPro && "text-[#E05C3A]",
                        isElite && "text-white",
                        !isPro && !isElite && "text-[#1C1410]"
                      )}
                    >
                      {pack.name}
                    </h3>
                    <p className={cn("mt-1 text-sm", isElite ? "text-white/70" : "text-[#7A6E66]")}>
                      {pack.desc}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mt-6 flex flex-wrap items-end gap-3">
                    <span
                      className={cn(
                        "font-mono text-4xl font-bold",
                        isPro && "text-5xl text-[#E05C3A]",
                        isElite && "text-white",
                        !isPro && !isElite && "text-[#1C1410]"
                      )}
                    >
                      {fmtCOP(pack.price)}
                    </span>
                    {pack.old && (
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "font-mono text-lg line-through",
                            isElite ? "text-white/50" : "text-[#7A6E66]"
                          )}
                        >
                          {fmtCOP(pack.old)}
                        </span>
                        <span className={cn("text-xs font-semibold", isElite ? "text-green-300" : "text-green-600")}>
                          Ahorras {fmtCOP(pack.savings!)}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator className={cn("my-6", isElite ? "bg-white/20" : "bg-[#E8DCC8]")} />

                  {/* Incluye */}
                  <ul className="flex flex-col gap-3 text-sm">
                    {pack.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className={cn("mt-0.5 size-4 shrink-0", isElite ? "text-green-300" : "text-green-600")}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={cn("leading-relaxed", isElite ? "text-white/90" : "text-[#1C1410]")}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto flex flex-1 flex-col justify-end pt-8">
                    {pack.sub && (
                      <p className={cn("mb-3 text-center text-xs", isPro ? "text-[#E05C3A]" : "text-[#7A6E66]")}>
                        {pack.sub}
                      </p>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "w-full rounded-full py-4 text-base font-semibold transition-all",
                        isElite && "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#2D4A35]",
                        isPro && "bg-[#E05C3A] text-white shadow-lg shadow-[#E05C3A]/25 hover:bg-[#D04C2A]",
                        !isPro && !isElite && "border-2 border-[#E8DCC8] bg-white text-[#1C1410] hover:border-[#E05C3A] hover:bg-[#FAF6F0]"
                      )}
                    >
                      {pack.cta}
                    </motion.button>
                    <p className={cn("mt-3 text-center text-xs", isElite ? "text-white/60" : "text-[#7A6E66]")}>
                      Envío gratis · Garantía 30 días · Pago seguro
                    </p>
                  </div>
                </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: "🔒", text: "Pago seguro SSL" },
            { icon: "📦", text: "Envío gratis +$80.000" },
            { icon: "↩️", text: "30 días devolución" },
            { icon: "💬", text: "Soporte WhatsApp 24/7" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
            >
              <span>{item.icon}</span>
              <span className="text-sm text-[#7A6E66]">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
