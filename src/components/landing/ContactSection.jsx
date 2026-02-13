import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";

const WHATSAPP_NUMBER = "5491137860964"; // 👈 CAMBIAR (sin +, sin espacios)
const EMAIL_CONTACTO = "hola@studiob.com"; // 👈 CAMBIAR si querés
const LOCATION_TEXT = "Buenos Aires, Argentina";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 + i * 0.06 },
  }),
};

function InfoItem({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-400/15 flex items-center justify-center">
        <Icon className="w-5 h-5 text-violet-300" />
      </div>
      <div>
        <div className="text-sm text-zinc-400">{label}</div>
        <div className="text-white font-semibold">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-2xl hover:bg-white/[0.03] transition p-2 -m-2"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);

  const canSend = useMemo(() => {
    return (
      name.trim().length >= 2 &&
      isValidEmail(email.trim()) &&
      message.trim().length >= 10 &&
      projectType.trim().length > 0
    );
  }, [name, email, message, projectType]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg =
      `Hola Studio B! Quiero iniciar un proyecto.\n\n` +
      `Nombre: ${name.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Teléfono/WhatsApp: ${phone.trim() || "-"}\n` +
      `Tipo de proyecto: ${projectType}\n` +
      `Presupuesto estimado: ${budget || "-"}\n\n` +
      `Mensaje:\n${message.trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="relative py-28 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="pt-2"
          >
            <p className="text-violet-400 font-semibold tracking-widest text-sm mb-6">
              CONTACTO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              ¿Listo para empezar tu <span className="text-white">proyecto</span>?
            </h2>

            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
              Cuéntanos sobre tu idea y te responderemos en menos de 24 horas con una propuesta
              personalizada.
            </p>

            <div className="mt-10 space-y-6">
              <InfoItem
                icon={Mail}
                label="Email"
                value={EMAIL_CONTACTO}
                href={`mailto:${EMAIL_CONTACTO}`}
              />
              <InfoItem
                icon={Phone}
                label="WhatsApp"
                value={"+54 9 11 3786-0964"}
                href={`https://wa.me/${5491137860964}`}
              />
              <InfoItem icon={MapPin} label="Ubicación" value={LOCATION_TEXT} />
            </div>
          </motion.div>

          {/* RIGHT (FORM CARD) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(500px_circle_at_30%_0%,rgba(139,92,246,0.12),transparent_60%)]" />

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Nombre *</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none
                               focus:border-violet-400/40"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-300">Email *</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none
                               focus:border-violet-400/40"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Teléfono</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none
                               focus:border-violet-400/40"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-300">Tipo de proyecto</label>
                  <select
  value={projectType}
  onChange={(e) => setProjectType(e.target.value)}
  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 
             text-white outline-none focus:border-violet-400/40"
>
  <option value="" className="text-black">
    Seleccionar
  </option>
  <option value="Landing Page" className="text-black">
    Landing Page
  </option>
  <option value="Sitio Web" className="text-black">
    Sitio Web
  </option>
  <option value="E-Shop" className="text-black">
    E-Shop
  </option>
  <option value="Web App" className="text-black">
    Web App
  </option>
  <option value="Otras Consultas" className="text-black">
    Otras Consultas
    </option>
</select>

                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-300">Presupuesto estimado</label>
                <select
  value={budget}
  onChange={(e) => setBudget(e.target.value)}
  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 
             text-white outline-none focus:border-violet-400/40"
>
  <option value="" className="text-black">
    Seleccionar rango
  </option>
  <option value="USD 200 - 400" className="text-black">
    USD 200 - 400
  </option>
  <option value="USD 400 - 800" className="text-black">
    USD 400 - 800
  </option>
  <option value="USD 800 - 1500" className="text-black">
    USD 800 - 1500
  </option>
  <option value="USD 1500+" className="text-black">
    USD 1500+
  </option>
  <option value="A consultar" className="text-black">
    A consultar
  </option>
</select>

              </div>

              <div>
                <label className="text-sm text-zinc-300">Cuéntanos tu proyecto *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Describe brevemente qué necesitas..."
                  className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none
                             focus:border-violet-400/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={!canSend}
                className="w-full rounded-full py-6 text-base
                           bg-violet-600 hover:bg-violet-500
                           hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </Button>

              <p className="text-xs text-zinc-500 pt-1">
                * Este formulario abre WhatsApp con el mensaje preparado.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
