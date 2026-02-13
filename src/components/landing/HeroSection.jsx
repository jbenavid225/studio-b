import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-violet-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-500/15 rounded-full blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-300">Diseño web de alto impacto</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-[-2px] leading-none mb-6">
            <span className="text-white">STUDIO</span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              B
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Creamos experiencias digitales que transforman visitantes en clientes.
            <span className="text-white font-medium"> Diseño, desarrollo y estrategia</span> en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="group px-8 py-6 text-lg rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              Iniciar proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection("portafolio")}
              variant="outline"
              className="px-8 py-6 text-lg rounded-full"
            >
              Ver trabajos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { number: "50+", label: "Proyectos" },
            { number: "98%", label: "Clientes felices" },
            { number: "5", label: "Años experiencia" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 border border-white/10 rounded-2xl py-6 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
