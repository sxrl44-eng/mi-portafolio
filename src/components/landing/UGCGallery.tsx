"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const items = [
  { user: "@luna.paws", city: "Medellín", product: "Collar Velvet · Negro", image: "/images/photo-1632929704073-bf2c8869ba25.jpg" },
  { user: "@michi.bogota", city: "Bogotá", product: "Pechera Oliva", image: "/images/photo-1759299615743-56d242be0925.jpg" },
  { user: "@rocky_89", city: "Cali", product: "Collar Camel", image: "/images/photo-1667716705760-233650f8f3fe.jpg" },
  { user: "@nina.gato", city: "Pereira", product: "Terracota", image: "/images/photo-1769483167932-d4a3487deae2.jpg" },
  { user: "@max.paseos", city: "Barranquilla", product: "Pack Aventura", image: "/images/photo-1762372717252-5141bb453570.jpg" },
  { user: "@cleo.persa", city: "Cartagena", product: "Collar Onyx", image: "/images/photo-1763718346758-76cde512a520.jpg" },
  { user: "@bruno_activo", city: "Bucaramanga", product: "Collar Oliva", image: "/images/photo-1762372717252-5141bb453570.jpg" },
  { user: "@mishi_love", city: "Santa Marta", product: "Placa grabada", image: "/images/photo-1759299615743-56d242be0925.jpg" },
  { user: "@golden_teo", city: "Manizales", product: "Pack Paseo", image: "/images/photo-1632929704073-bf2c8869ba25.jpg" },
  { user: "@sirius_dog", city: "Cali", product: "Collar Negro", image: "/images/photo-1763718346758-76cde512a520.jpg" },
  { user: "@felix.cat", city: "Medellín", product: "Bandana", image: "/images/photo-1667716705760-233650f8f3fe.jpg" },
  { user: "@princesa_p", city: "Bogotá", product: "Pack Manada", image: "/images/photo-1769483167932-d4a3487deae2.jpg" },
] as const;

export default function UGCGallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0]/30 via-[#FAF6F0]/50 to-white py-16 sm:py-24">
      {/* Decorative hashtag */}
      <div className="absolute right-0 top-0 pointer-events-none opacity-[0.03]">
        <svg className="h-64 w-64 text-[#E05C3A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.04 3.76l-.23 1.96 3.1.42.23-1.96 2.96.4-.23 1.96 3.1.42-.23 1.96 3.1.42-.69 6.37-2.86-.4.28-2.64-3.1-.42-.28 2.64-2.96-.4.28-2.64-3.1-.42-.28 2.64-3.1-.4.69-6.37 2.86.4-.28 2.64 3.1.42.28-2.64 2.96.4-.28 2.64 3.1.42.28-2.64.72.1z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge variant="outline" className="mx-auto rounded-full border-[#E8DCC8] bg-white">
            La comunidad CollarPet&apos;s
          </Badge>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#1C1410] md:text-5xl">
            Tu mascota merece ser <span className="italic text-[#E05C3A]">famosa</span>
          </h2>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-[#7A6E66]">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @collarpets · Etiquétanos en Instagram
          </p>
          <p className="mt-2 text-xs font-medium text-[#E05C3A]">
            +12.000 publicaciones con <span className="font-semibold">#CollarPets</span>
          </p>
        </motion.div>

        {/* Galería masonry */}
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {items.map((item, index) => (
            <motion.div
              key={item.user}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className={`group relative mb-3 overflow-hidden rounded-2xl border-0 p-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 break-inside-avoid ${
                  index % 3 === 0 ? "aspect-square" : index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Mascota con ${item.product}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                {/* Badge de producto */}
                <Badge className="absolute left-3 top-3 max-w-[80%] truncate rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-medium text-[#1C1410] shadow-md backdrop-blur-sm sm:text-xs">
                  {item.product}
                </Badge>
                
                {/* Overlay al hover */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-base font-semibold text-white">{item.user}</p>
                    <p className="mt-1 text-sm text-white/80">{item.city}</p>
                    <div className="mt-2 flex items-center justify-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="size-3 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.3 18.2 21l-1.7-7L22 9.3l-7.2-.6L12 2 9.2 8.7 2 9.3 7.5 14 5.8 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA section with submit photo card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          {/* Submit photo card */}
          <Card className="rounded-3xl border-2 border-dashed border-[#E8DCC8] bg-white p-6 shadow-lg md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF6F0]">
                <svg className="size-8 text-[#E05C3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-[#1C1410]">
                  ¿Tu mascota ya tiene su CollarPet&apos;s?
                </h3>
                <p className="mt-1 text-sm text-[#7A6E66]">
                  Publica una foto en Instagram, etiqueta <span className="font-medium text-[#E05C3A]">@collarpets</span> y aparece aquí.
                </p>
              </div>
              <Button
                className="shrink-0 rounded-full bg-[#E05C3A] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[#E05C3A]/90 hover:shadow-lg"
                asChild
              >
                <a href="https://instagram.com/collarpets" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Etiquétanos
                </a>
              </Button>
            </div>
          </Card>

          <Button
            variant="outline"
            className="rounded-full border-2 border-[#E8DCC8] bg-white px-8 py-6 text-[#1C1410] transition-all hover:border-[#E05C3A] hover:bg-[#FAF6F0] hover:text-[#E05C3A]"
            asChild
          >
            <a href="https://instagram.com/collarpets" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Ver más en Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
