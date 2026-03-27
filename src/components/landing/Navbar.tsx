"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Productos", href: "#productos", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8 4" },
  { label: "Materiales", href: "#materiales", icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" },
  { label: "Tallas", href: "#tallas", icon: "M7.5 3.75H6A2.25 2.25 0 0 0 2.25 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 2.25 18v-1.5M15 9.75 12 12.75m0 0L9 9.75M12 12.75v-7.5" },
  { label: "Reseñas", href: "#resenas", icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" },
  { label: "Precios", href: "#precios", icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" },
];

function Logo() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="12" cy="6.4" r="2.1" />
      <circle cx="17" cy="8" r="2.2" />
      <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-[#E8DCC8]/50 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-white/70 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E05C3A] to-[#D04C2A] shadow-md shadow-[#E05C3A]/20"
          >
            <Logo />
            <span className="sr-only">CollarPet&apos;s</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold italic leading-tight text-[#1C1410] transition-colors group-hover:text-[#E05C3A]">
              CollarPet&apos;s
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#7A6E66]">
              Premium Pet Co.
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-[#7A6E66] transition-all hover:bg-[#E05C3A]/10 hover:text-[#E05C3A]"
              >
                <svg className="size-4 opacity-60 transition-opacity group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            className="group h-11 rounded-full bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] px-6 text-sm font-semibold text-white shadow-lg shadow-[#E05C3A]/25 transition-all hover:scale-[1.03] hover:shadow-xl"
          >
            <a href="#productos" className="flex items-center gap-2">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Comprar ahora
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="rounded-xl p-2 text-[#1C1410] transition-colors hover:bg-[#FAF6F0] md:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm border-[#E8DCC8]/50 bg-white/95 backdrop-blur-xl">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <div className="flex h-full flex-col pt-6">
              <a href="#inicio" className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#E05C3A] to-[#D04C2A] shadow-md">
                  <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="7" cy="8" r="2.2" />
                    <circle cx="12" cy="6.4" r="2.1" />
                    <circle cx="17" cy="8" r="2.2" />
                    <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
                  </svg>
                </div>
                <div>
                  <span className="block font-serif text-xl font-bold italic text-[#1C1410]">
                    CollarPet&apos;s
                  </span>
                  <span className="text-xs text-[#7A6E66]">Premium Pet Co.</span>
                </div>
              </a>
              
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 rounded-2xl px-4 py-4 text-[#1C1410] transition-all hover:bg-[#E05C3A]/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF6F0]">
                        <svg className="size-5 text-[#E05C3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-4 pb-8">
                <Button
                  asChild
                  className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#E05C3A] to-[#D04C2A] text-base font-bold text-white shadow-lg shadow-[#E05C3A]/25"
                >
                  <a href="#productos" className="flex items-center justify-center gap-2">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Comprar ahora
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}