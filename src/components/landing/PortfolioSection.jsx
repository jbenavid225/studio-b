import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cafeAromaImg from "../../assets/portfolio/cafe-aroma.jpg";


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 + i * 0.06 },
  }),
};

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

function PortfolioCard({ item }) {
  return (
   <a
  href={item.url ? item.url : `/portfolio/${item.slug}`}
  target={item.url ? "_blank" : "_self"}
  rel={item.url ? "noopener noreferrer" : undefined}
  className="group flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden
             hover:border-violet-400/30 hover:bg-white/[0.06]
             hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]
             transition-all"
>

      {/* Imagen */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-500"
          loading="lazy"
        />
        {/* Fade inferior como en la referencia */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/20 to-transparent" />
      </div>

      {/* Contenido (flex para que la card no se estire raro) */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-widest text-violet-400">
            {item.type.toUpperCase()}
          </p>

          <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-zinc-400 leading-relaxed">{item.desc}</p>

        {/* Tags pegadas abajo siempre */}
        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {item.isDemo ? <Tag>Proyecto demo</Tag> : null}
        </div>
      </div>
    </a>
  );
}

export default function PortfolioSection() {
  const items = [
   {
  type: "Landing Page",
  title: "Café Aroma",
  slug: "cafe-aroma",
  url: "https://www.cafearoma.com.ar", // 👈 AGREGAR ESTO
  desc: "Landing para cafetería artesanal con reservas online.",
  tags: ["React", "Tailwind", "Node.js"],
  isDemo: false,
  image: cafeAromaImg,

}
,
    {
      type: "Sitio Web",
      title: "TechFlow",
      slug: "techflow",
      desc: "Sitio corporativo para empresa de software.",
      tags: ["Next.js", "TypeScript", "Prisma"],
      isDemo: true,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70",
    },
    {
      type: "E-Shop",
      title: "Bella Mode",
      slug: "bella-mode",
      desc: "E-commerce de moda con pasarela de pagos integrada.",
      tags: ["Shopify", "React", "Stripe"],
      isDemo: true,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=70",
    },
    {
      type: "Web App",
      title: "FitTracker",
      slug: "fittracker",
      desc: "Panel para seguimiento de hábitos y rutinas.",
      tags: ["React", "API", "Auth"],
      isDemo: true,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=70",
    },
    {
      type: "Landing Page",
      title: "Nova Dental",
      slug: "nova-dental",
      desc: "Landing para clínica con turnos y WhatsApp directo.",
      tags: ["SEO", "UI/UX", "Performance"],
      isDemo: true,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=70",
    },
    {
      type: "Brand + Web",
      title: "Art Studio",
      slug: "art-studio",
      desc: "Sitio para portafolio artístico con galería.",
      tags: ["Framer Motion", "Tailwind", "UX"],
      isDemo: true,
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=70",
    },
  ];

  return (
    <section id="portafolio" className="relative py-28 bg-[#0A0A0B]">
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
            PORTAFOLIO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos que hablan por sí solos
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Cada proyecto es único. Aquí algunos trabajos demo para mostrar estilo y calidad.
            (Luego reemplazás slugs, textos e imágenes por casos reales.)
          </p>
        </motion.div>

        {/* grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
