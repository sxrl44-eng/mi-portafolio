"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
        <path d="m14.5 12.5 2-2" />
        <path d="m11.5 9.5 2-2" />
        <path d="m8.5 6.5 2-2" />
        <path d="m17.5 15.5 2-2" />
      </svg>
    ),
    q: "¿Cómo sé qué talla elegir para mi mascota?",
    a: "Mide el contorno del cuello con cinta suave, sin apretar demasiado. Compara el resultado con nuestra guía: si queda entre dos tallas, elige la mayor para perros que tiran fuerte y la menor para gatos que necesitan collar más ajustado.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    q: "¿Envían a toda Colombia?",
    a: "Sí, despachamos a todas las ciudades principales de Colombia. Envío gratis en pedidos superiores a $80.000 COP. También enviamos a México, Chile, Perú y Ecuador con tarifas especiales.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    q: "¿En cuánto tiempo llega mi pedido?",
    a: "Para principales ciudades de Colombia: 2-4 días hábiles. Para ciudades secundarias: 4-7 días hábiles. Packs con envío express: 24-48 horas hábiles desde pago confirmado.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
      </svg>
    ),
    q: "¿Puedo personalizar el collar con el nombre de mi mascota?",
    a: "Sí. En productos con placa compatible puedes indicar nombre y teléfono. Te enviamos una vista previa por WhatsApp antes de grabar para confirmar que todo esté perfecto.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    q: "¿Los materiales son seguros para pieles sensibles?",
    a: "Absolutamente. Usamos cuero vegetal curtido sin cromo pesado y acero quirúrgico 316L libre de níquel. Si tu mascota tiene alergia conocida, escríbenos y revisamos la composición del lote.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
      </svg>
    ),
    q: "¿Puedo cambiar o devolver el producto?",
    a: "Tienes 30 días para solicitar cambio de talla o devolución. Si el artículo no fue personalizado y está sin uso con empaque original, te guiamos paso a paso por WhatsApp. El envío de devolución es gratuito.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    q: "¿Qué métodos de pago aceptan?",
    a: "Tarjetas de crédito y débito (Visa, Mastercard, Amex), PSE, Nequi, Daviplata, Bancolombia y contraentrega en la mayoría de ciudades. El cobro se procesa con proveedor PCI-DSS.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    q: "¿Los collares son resistentes al agua y al uso diario?",
    a: "Sí, están diseñados para uso diario. El cuero vegetal resiste agua de manera natural y gana patina con el tiempo. Las costuras son dobles y reforzadas. Recomendamos secar al aire después de mojarse.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="7" cy="8" r="2.2" />
        <circle cx="12" cy="6.4" r="2.1" />
        <circle cx="17" cy="8" r="2.2" />
        <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
      </svg>
    ),
    q: "¿Tienen collar para gatos que se escapan?",
    a: "Sí, tenemos una línea especial para gatos con cierre de seguridad reforzado que se abre solo con presión manual. Este diseño previene que los gatos curiosos se escapen.",
  },
  {
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    q: "¿Cómo contacto al soporte?",
    a: "Nuestro equipo está disponible por WhatsApp al +57 300 123 4567 de lunes a sábado de 8am a 6pm. También puedes escribirnos a hola@collarpets.co o usar el chat en nuestra página.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] to-white py-16 scroll-mt-24 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white">
              FAQ
            </Badge>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
              Resolvemos tus{" "}
              <span className="italic text-[#E05C3A]">dudas</span>
            </h2>
            <p className="mt-4 text-lg text-[#7A6E66]">
              ¿No encuentras lo que buscas? Nuestro equipo está listo para ayudarte.
            </p>

            <Card className="mt-8 overflow-hidden rounded-2xl border border-[#E8DCC8] bg-white shadow-lg">
              <div className="bg-gradient-to-r from-[#2D4A35] to-[#3D5A45] p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="size-14 ring-2 ring-white/30">
                    <AvatarFallback className="bg-white text-lg font-bold text-[#2D4A35]">
                      CS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">Equipo de soporte</p>
                    <p className="text-sm text-white/70">Respuesta en menos de 15 min</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Button
                  className="w-full rounded-xl bg-[#25D366] py-6 text-base font-semibold text-white hover:bg-[#20BD5A]"
                  asChild
                >
                  <a href="https://wa.me/573001234567" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.934a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Escrir WhatsApp →
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Columna derecha - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card
                  className={cn(
                    "overflow-hidden border transition-all duration-300",
                    openIndex === index
                      ? "border-[#E05C3A]/30 shadow-md"
                      : "border-[#E8DCC8] hover:border-[#E05C3A]/20"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                        openIndex === index ? "bg-[#E05C3A]/10 text-[#E05C3A]" : "bg-[#FAF6F0] text-[#7A6E66]"
                      )}
                    >
                      {faq.icon}
                    </div>
                    <span
                      className={cn(
                        "flex-1 font-medium transition-colors",
                        openIndex === index ? "text-[#E05C3A]" : "text-[#1C1410]"
                      )}
                    >
                      {faq.q}
                    </span>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "size-5 shrink-0 transition-colors",
                        openIndex === index ? "text-[#E05C3A]" : "text-[#7A6E66]"
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#E8DCC8] px-5 py-4 pl-19">
                          <p className="leading-relaxed text-[#7A6E66]">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}