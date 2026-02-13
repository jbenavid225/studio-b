import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Headphones } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      title: "Diseño único",
      desc: "Cada proyecto es una obra personalizada, sin plantillas genéricas.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-violet-400" />,
      title: "Código limpio",
      desc: "Desarrollamos con tecnologías modernas para máximo rendimiento.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-violet-400" />,
      title: "Resultados",
      desc: "Sitios optimizados para convertir visitantes en clientes.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-violet-400" />,
      title: "Soporte continuo",
      desc: "Te acompañamos antes, durante y después del lanzamiento.",
    },
  ];

  return (
    <section id="nosotros" className="relative py-28 bg-[#0A0A0B]">
      {/* separador sutil arriba */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Columna izquierda (texto) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <p className="text-violet-400 font-semibold tracking-widest text-sm mb-6">
              SOBRE NOSOTROS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Somos el estudio que <br />
              <span className="text-white">tu negocio necesita</span>
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              En <span className="text-white font-semibold">STUDIO B</span>{" "}
              combinamos creatividad y tecnología para crear sitios web que no
              solo se ven increíbles, sino que también generan resultados reales
              para tu negocio.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Con más de <span className="text-white font-semibold">2 años</span>{" "}
              de experiencia, ayudamos a empresas de todos los tamaños a
              establecer una presencia digital memorable y efectiva. Nuestro
              enfoque es simple: escuchamos, diseñamos y entregamos experiencias
              que importan.
            </p>
          </motion.div>

          {/* Columna derecha (cards) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7
                           hover:border-violet-400/30 hover:bg-white/[0.06]
                           hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
                           transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
                  {c.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

