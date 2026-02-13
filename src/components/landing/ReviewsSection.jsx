import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import ReviewWhatsappForm from "./ReviewWhatsappForm";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 + i * 0.06 },
  }),
};

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "w-4 h-4",
            i < value ? "text-violet-400 fill-violet-400" : "text-white/10",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
      <span className="text-sm font-semibold text-white">{initials}</span>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="relative h-full flex flex-col justify-between
                 rounded-3xl bg-white/5 border border-white/10 p-8
                 hover:border-violet-400/25 hover:bg-white/[0.06]
                 hover:shadow-[0_0_35px_rgba(139,92,246,0.10)]
                 transition-all"
    >
      <div>
        <Quote className="w-10 h-10 text-violet-500/25" />

        <div className="mt-3">
          <Stars value={review.stars} />
        </div>

        <p className="mt-5 text-zinc-300 leading-relaxed">
          “{review.text}”
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.name}
            className="w-11 h-11 rounded-full object-cover border border-white/10"
            loading="lazy"
          />
        ) : (
          <Avatar name={review.name} />
        )}

        <div>
          <div className="font-semibold text-white leading-tight">
            {review.name}
          </div>
          <div className="text-sm text-zinc-500">{review.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [openReviewForm, setOpenReviewForm] = useState(false);

  const reviews = [
    {
      stars: 5,
      text:
        "Increíble trabajo. Entendieron perfectamente lo que necesitaba y el resultado superó mis expectativas.",
      name: "María García",
      company: "Café Aroma",
      avatarUrl: "/avatars/usuario1.jpg",
    },
    {
      stars: 5,
      text:
        "Profesionales de principio a fin. Cumplieron con los tiempos y el presupuesto.",
      name: "Carlos Mendoza",
      company: "TechFlow Solutions",
      avatarUrl: "/avatars/usuario2.jpg",
    },
    {
      stars: 5,
      text:
        "Mi tienda online quedó espectacular. El proceso de compra es súper fluido.",
      name: "Ana Rodríguez",
      company: "Bella Mode",
    },
    {
      stars: 5,
      text:
        "La app web nos ayudó a digitalizar todo el gimnasio.",
      name: "Julián Pérez",
      company: "FitTracker Gym",
    },
    {
      stars: 5,
      text:
        "Excelente comunicación durante todo el proyecto.",
      name: "Sofía Torres",
      company: "Nova Dental",
    },
    {
      stars: 5,
      text:
        "La galería online es una extensión perfecta de mi trabajo.",
      name: "Lucía Fernández",
      company: "Art Studio",
    },
  ];

  return (
    <section id="resenas" className="relative py-28 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-violet-400 font-semibold tracking-widest text-sm mb-6">
            TESTIMONIOS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>

          {/* Botón dejar reseña */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setOpenReviewForm(true)}
              className="inline-flex items-center justify-center rounded-full px-7 py-4
                         bg-white/10 border border-white/10 text-white font-semibold
                         hover:bg-white/15 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]
                         transition-all"
            >
              Dejar reseña
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="h-full"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal WhatsApp */}
      <ReviewWhatsappForm
        open={openReviewForm}
        onClose={() => setOpenReviewForm(false)}
      />
    </section>
  );
}
