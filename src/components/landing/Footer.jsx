import { Instagram, Facebook, MessageCircle } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com"; // cambiar
const FACEBOOK_URL = "https://facebook.com"; // cambiar
const WHATSAPP_NUMBER = "5491123456789"; // sin +

function Pill({ href, icon: Icon, label, type }) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all duration-300";

  const variants = {
    instagram:
      "bg-black border-white/10 text-zinc-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",

    facebook:
      "bg-black border-white/10 text-zinc-300 hover:text-white hover:border-transparent hover:bg-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]",

    whatsapp:
      "bg-black border-white/10 text-zinc-300 hover:text-white hover:border-transparent hover:bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[type]}`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
          <div className="text-2xl font-bold">
            <span className="text-white">STUDIO</span>
            <span className="text-violet-400"> B</span>
          </div>

          <div className="flex items-center gap-4">
            <Pill
              href={INSTAGRAM_URL}
              icon={Instagram}
              label="Instagram"
              type="instagram"
            />
            <Pill
              href={FACEBOOK_URL}
              icon={Facebook}
              label="Facebook"
              type="facebook"
            />
            <Pill
              href={`https://wa.me/${541137860964}`}
              icon={MessageCircle}
              label="WhatsApp"
              type="whatsapp"
            />
          </div>

          <div className="text-sm text-zinc-500 text-center md:text-right">
            © {year} STUDIO B. Todos los derechos reservados.
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* BOTTOM ROW */}
        <div className="py-10">
          <nav className="flex flex-wrap items-center justify-center gap-10 text-sm text-zinc-400">
            <button onClick={() => scrollTo("nosotros")} className="hover:text-white transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollTo("servicios")} className="hover:text-white transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollTo("portafolio")} className="hover:text-white transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollTo("contacto")} className="hover:text-white transition-colors">
              Contacto
            </button>
          </nav>
        </div>

      </div>
    </footer>
  );
}
