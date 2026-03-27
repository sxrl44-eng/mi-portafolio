"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StickyCartBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-[#E8DCC8] bg-white/95 backdrop-blur-sm transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ minHeight: "64px" }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Izquierda */}
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-[#1C1410]">Collar Velvet Premium</p>
          <p className="text-xs text-[#7A6E66]">4.9 ★ · 1.240 reseñas</p>
        </div>

        {/* Centro - Precio */}
        <p className="font-mono text-xl font-bold text-[#E05C3A]">$45.000</p>

        {/* Derecha - CTA */}
        <Button className="rounded-full bg-[#E05C3A] text-white hover:bg-[#E05C3A]/90">
          Agregar al carrito →
        </Button>
      </div>
    </div>
  );
}
