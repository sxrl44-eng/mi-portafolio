import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const columns: Record<string, { title: string; links: { label: string; href: string }[] }> = {
  Tienda: {
    title: "Tienda",
    links: [
      { label: "Collares", href: "#productos" },
      { label: "Pecheras", href: "#productos" },
      { label: "Placas", href: "#productos" },
      { label: "Bandanas", href: "#productos" },
      { label: "Juguetes", href: "#productos" },
      { label: "Ropa", href: "#productos" },
    ],
  },
  CollarPet: {
    title: "CollarPet's",
    links: [
      { label: "Nuestra historia", href: "/nosotros" },
      { label: "Materiales", href: "/materiales" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  Ayuda: {
    title: "Ayuda",
    links: [
      { label: "Guía de tallas", href: "#tallas" },
      { label: "Envíos", href: "#faq" },
      { label: "Cambios", href: "/garantia" },
      { label: "FAQ", href: "#faq" },
      { label: "WhatsApp", href: "https://wa.me/573001234567" },
    ],
  },
  Legal: {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "Cookies", href: "/cookies" },
      { label: "Garantía", href: "/garantia" },
    ],
  },
};

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  );
}

function PawPrint({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="12" cy="6.4" r="2.1" />
      <circle cx="17" cy="8" r="2.2" />
      <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E8DCC8] bg-[#FAF6F0]">
      {/* Better distributed paw prints pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Row 1 */}
        <PawPrint className="absolute left-[5%] top-[10%] size-8 text-[#E05C3A]/[0.06] rotate-[-15deg]" />
        <PawPrint className="absolute left-[25%] top-[5%] size-6 text-[#E05C3A]/[0.04] rotate-[20deg]" />
        <PawPrint className="absolute left-[45%] top-[12%] size-7 text-[#E05C3A]/[0.05] rotate-[-8deg]" />
        <PawPrint className="absolute left-[65%] top-[8%] size-5 text-[#E05C3A]/[0.04] rotate-[12deg]" />
        <PawPrint className="absolute left-[85%] top-[15%] size-8 text-[#E05C3A]/[0.06] rotate-[-25deg]" />
        
        {/* Row 2 */}
        <PawPrint className="absolute left-[10%] top-[35%] size-6 text-[#E05C3A]/[0.04] rotate-[10deg]" />
        <PawPrint className="absolute left-[30%] top-[30%] size-8 text-[#E05C3A]/[0.05] rotate-[-20deg]" />
        <PawPrint className="absolute left-[55%] top-[38%] size-5 text-[#E05C3A]/[0.04] rotate-[15deg]" />
        <PawPrint className="absolute left-[75%] top-[32%] size-7 text-[#E05C3A]/[0.06] rotate-[-10deg]" />
        <PawPrint className="absolute left-[92%] top-[40%] size-6 text-[#E05C3A]/[0.04] rotate-[5deg]" />
        
        {/* Row 3 */}
        <PawPrint className="absolute left-[3%] top-[55%] size-7 text-[#E05C3A]/[0.05] rotate-[18deg]" />
        <PawPrint className="absolute left-[20%] top-[60%] size-5 text-[#E05C3A]/[0.04] rotate-[-12deg]" />
        <PawPrint className="absolute left-[40%] top-[52%] size-8 text-[#E05C3A]/[0.06] rotate-[8deg]" />
        <PawPrint className="absolute left-[60%] top-[58%] size-6 text-[#E05C3A]/[0.04] rotate-[-18deg]" />
        <PawPrint className="absolute left-[80%] top-[55%] size-7 text-[#E05C3A]/[0.05] rotate-[22deg]" />
        
        {/* Row 4 */}
        <PawPrint className="absolute left-[8%] top-[78%] size-6 text-[#E05C3A]/[0.04] rotate-[-8deg]" />
        <PawPrint className="absolute left-[28%] top-[82%] size-7 text-[#E05C3A]/[0.05] rotate-[15deg]" />
        <PawPrint className="absolute left-[48%] top-[75%] size-5 text-[#E05C3A]/[0.04] rotate-[-20deg]" />
        <PawPrint className="absolute left-[70%] top-[80%] size-8 text-[#E05C3A]/[0.06] rotate-[10deg]" />
        <PawPrint className="absolute left-[90%] top-[72%] size-6 text-[#E05C3A]/[0.04] rotate-[-15deg]" />
        
        {/* Row 5 */}
        <PawPrint className="absolute left-[15%] top-[95%] size-7 text-[#E05C3A]/[0.05] rotate-[12deg]" />
        <PawPrint className="absolute left-[35%] top-[92%] size-6 text-[#E05C3A]/[0.04] rotate-[-10deg]" />
        <PawPrint className="absolute left-[55%] top-[98%] size-8 text-[#E05C3A]/[0.06] rotate-[20deg]" />
        <PawPrint className="absolute left-[78%] top-[95%] size-5 text-[#E05C3A]/[0.04] rotate-[-5deg]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E05C3A]">
                <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="7" cy="8" r="2.2" />
                  <circle cx="12" cy="6.4" r="2.1" />
                  <circle cx="17" cy="8" r="2.2" />
                  <ellipse cx="12" cy="15.6" rx="5.4" ry="4.2" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold text-[#1C1410]">CollarPet&apos;s</span>
                <Badge variant="outline" className="ml-2 rounded-full border-[#E8DCC8] text-xs text-[#1C1410]">
                  Bogotá, Colombia
                </Badge>
              </div>
            </div>
            
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7A6E66]">
              Accesorios premium hechos con amor para los mejores compañeros de vida. 
              <span className="font-medium text-[#1C1410]"> Cada detalle importa.</span>
            </p>

            {/* Newsletter */}
            <div className="mt-6 rounded-2xl border border-[#E8DCC8] bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-[#1C1410]">
                📧 Suscríbete y obtén <span className="font-semibold text-[#E05C3A]">10% OFF</span> en tu primera compra
              </p>
              <form
                className="flex flex-col gap-2 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  suppressHydrationWarning
                  className="h-10 flex-1 rounded-full border-[#E8DCC8] bg-[#FAF6F0] px-4 text-sm text-[#1C1410] placeholder:text-[#7A6E66]/60 focus:bg-white"
                />
                <Button type="submit" className="h-10 shrink-0 rounded-full bg-[#E05C3A] px-6 text-sm font-medium text-white shadow-md transition-all hover:bg-[#E05C3A]/90 hover:shadow-lg">
                  Suscribir
                </Button>
              </form>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white text-xs text-[#7A6E66]">
                Envío gratis +$99.000
              </Badge>
              <Badge variant="outline" className="rounded-full border-[#E8DCC8] bg-white text-xs text-[#7A6E66]">
                Garantía 1 año
              </Badge>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(columns).map(([key, { title, links }]) => (
            <div key={key}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1C1410]">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-[#7A6E66] transition-colors hover:text-[#E05C3A]"
                    >
                      <span className="h-0.5 w-0 rounded-full bg-[#E05C3A] transition-all duration-300 group-hover:w-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-[#E8DCC8]" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-[#7A6E66]">
            © 2026 CollarPet&apos;s. Todos los derechos reservados.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1410] text-white transition-all hover:bg-[#E05C3A] hover:scale-110"
              aria-label="Instagram"
            >
              <SocialIcon path="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m5 4.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 6.5m5.25-4.5a1.125 1.125 0 1 1-1.125 1.125A1.125 1.125 0 0 1 17.25 2" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1410] text-white transition-all hover:bg-[#E05C3A] hover:scale-110"
              aria-label="TikTok"
            >
              <SocialIcon path="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.5a6.33 6.33 0 0 0-1 12.46 6.34 6.34 0 0 0 7-6.26V9.19a8.16 8.16 0 0 0 4.77 1.52v-3.5a4.85 4.85 0 0 1-1.66-.52" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1410] text-white transition-all hover:bg-[#E05C3A] hover:scale-110"
              aria-label="Facebook"
            >
              <SocialIcon path="M13.5 22v-8.33h2.8l.53-3.32H13.5V8.05c0-.91.26-1.53 1.58-1.53h1.7V3.28a18.5 18.5 0 0 0-2.63-.13c-2.6 0-4.38 1.58-4.38 4.5v2.54H7v3.32h2.17V22z" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C1410] text-white transition-all hover:bg-[#E05C3A] hover:scale-110"
              aria-label="Pinterest"
            >
              <SocialIcon path="M12 2a10 10 0 0 0-3.76 19.27c-.07-.66-.14-1.67.03-2.39l.77-3.28S8.05 14 8.05 12.5c0-1.65.95-2.9 2.14-2.9 1 0 1.48.77 1.48 1.68 0 1-.64 2.5-1 3.89-.28 1.16.6 2.1 1.78 2.1 2.13 0 3.77-2.25 3.77-5.5a5.3 5.3 0 0 0-5.6-5.46A5.8 5.8 0 0 0 6 11.28c0 1.12.43 2.32 1.35 2.73.15.06.23 0 .27-.17l.33-1.36c.05-.17.03-.23-.1-.38-.57-.69-1-2-1-3.21 0-2.78 2.11-5.33 5.55-5.33 3 0 4.73 1.82 4.73 4.26 0 3.05-1.35 5.33-3.35 5.33-1.05 0-1.83-.86-1.58-1.92l.6-2.53c.2-.83.14-1.52-.1-2.04L10.52 7a6.5 6.5 0 0 0-.33 1.9c0 1.46.55 1.89 1.16 2.63.14.17.16.23.11.38l-.45 1.75c-.09.36-.36.5-.67.36C8.36 12.82 7 10.9 7 9.27 7 6.2 9.53 3.9 13 3.9c3.3 0 5.5 2.26 5.5 5.59 0 3.64-2.07 6.45-5.1 6.45-.76 0-1.47-.39-1.71-.88l-.46 1.77c-.17.66-.63 1.49-.94 2l1.68.26L12 22a10 10 0 0 0 0-20" />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-[#7A6E66]">
            Hecho con <span className="text-[#E05C3A]">♥</span> en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
