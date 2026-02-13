import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layout,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { Button } from "../ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 + i * 0.06 },
  }),
};

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-zinc-300">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
      <span className="text-sm md:text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

function ServiceCard({ icon, title, price, desc, bullets, featured = false, badge }) {
  return (
    <div
      className={[
        // ✅ OJO: sin overflow-hidden para que el pill no se recorte
        "relative rounded-3xl border backdrop-blur-sm p-8 transition-all",
        // glow sutil en hover para TODAS
        "hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]",
        featured
          ? "border-violet-500/35 bg-gradient-to-br from-violet-500/12 via-white/[0.04] to-white/[0.02]"
          : "border-white/10 bg-white/5 hover:border-violet-400/30 hover:bg-white/[0.06]",
      ].join(" ")}
    >
      {/* badge (Más popular) ✅ ahora se lee y no se recorta */}
      {badge ? (
        <div className="absolute -top-3 left-8 z-10">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5
                       text-xs font-semibold tracking-wide text-white
                       bg-gradient-to-r from-violet-600 to-purple-500
                       shadow-lg shadow-violet-500/30
                       border border-white/10"
          >
            {badge}
          </span>
        </div>
      ) : null}

      {/* glow extra solo para la destacada */}
      {featured ? (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/20 blur-3xl rounded-full" />
        </div>
      ) : null}

      {/* header */}
      <div className="flex items-start justify-between gap-6">
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>

        <div className="text-right">
          <div className="text-lg md:text-xl font-bold text-white">{price}</div>
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-zinc-400 leading-relaxed">{desc}</p>

      <ul className="mt-6 space-y-3">
        {bullets.map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          onClick={() =>
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
          }
          className={[
            "w-full rounded-full py-6 text-base font-semibold",
            featured
              ? "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
              : "bg-white/10 hover:bg-white/15 text-white border border-white/10",
          ].join(" ")}
        >
          Solicitar cotización
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-5 h-5 text-violet-400" />,
      title: "Landing Page",
      price: "Desde $150.000",
      desc: "Página única diseñada para convertir. Perfecta para campañas, lanzamientos o captar leads.",
      bullets: ["Diseño responsive", "Optimización SEO", "Formulario de contacto", "Entrega en 7 días"],
      featured: false,
    },
    {
      icon: <Globe className="w-5 h-5 text-violet-400" />,
      title: "Sitio Web",
      price: "Desde $300.000",
      desc: "Presencia digital completa con múltiples páginas. Ideal para empresas establecidas.",
      bullets: ["Hasta 8 páginas", "Blog integrado", "Panel de administración", "Analytics incluido"],
      featured: true,
      badge: "Más popular",
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-violet-400" />,
      title: "E-Shop",
      price: "Desde $700.000",
      desc: "Tu tienda online completa. Vendé productos físicos o digitales las 24 horas.",
      bullets: ["Catálogo ilimitado", "Pasarela de pagos", "Gestión de inventario", "Carrito de compras"],
      featured: false,
    },
    {
      icon: <Smartphone className="w-5 h-5 text-violet-400" />,
      title: "Web App",
      price: "A consultar",
      desc: "Aplicaciones web personalizadas con funcionalidades avanzadas para tu negocio.",
      bullets: ["Desarrollo a medida", "Base de datos", "Autenticación usuarios", "API personalizada"],
      featured: false,
    },
  ];

  return (
    <section id="servicios" className="relative py-28 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-violet-400 font-semibold tracking-widest text-sm mb-6">
            SERVICIOS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones para cada necesidad
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Desde una landing simple hasta una aplicación web compleja, tenemos el servicio perfecto para ti.
          </p>
        </motion.div>

        {/* grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
