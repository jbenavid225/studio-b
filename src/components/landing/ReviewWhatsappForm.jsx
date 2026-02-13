import { useMemo, useState } from "react";
import { Star, X } from "lucide-react";

const WHATSAPP_NUMBER = "54911XXXXXXXX"; // 👈 REEMPLAZAR POR TU NÚMERO (sin + ni espacios)

function StarPicker({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const v = i + 1;
        const active = v <= value;

        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className="p-1 rounded-md hover:bg-white/5 transition"
          >
            <Star
              className={`w-5 h-5 ${
                active
                  ? "text-violet-400 fill-violet-400"
                  : "text-white/20"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function ReviewWhatsappForm({ open, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [stars, setStars] = useState(5);
  const [text, setText] = useState("");

  const canSend = useMemo(() => {
    return name.trim().length >= 2 && text.trim().length >= 10;
  }, [name, text]);

  const handleSend = () => {
    const message =
      `Hola Studio B! Quiero dejar una reseña:\n\n` +
      `Nombre: ${name}\n` +
      `Empresa: ${company || "-"}\n` +
      `Puntaje: ${stars}/5\n\n` +
      `Reseña:\n${text}\n\n` +
      `Autorizo a Studio B a publicar esta reseña en su sitio web: Sí`;

    const url = `https://wa.me/${+5491137860964}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0A0A0B] p-7 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-violet-400 text-xs font-semibold tracking-widest">
              DEJAR RESEÑA
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Contanos tu experiencia
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-zinc-300">Nombre *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-violet-400 outline-none"
              placeholder="Ej: María García"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">
              Empresa (opcional)
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-violet-400 outline-none"
              placeholder="Ej: Café Aroma"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">Puntaje</label>
            <div className="mt-2">
              <StarPicker value={stars} onChange={setStars} />
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-300">Reseña *</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-violet-400 outline-none resize-none"
              placeholder="Escribí tu experiencia..."
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSend}
            disabled={!canSend}
            className="flex-1 rounded-full bg-violet-600 hover:bg-violet-500 py-4 text-white font-semibold transition disabled:opacity-40"
          >
            Enviar por WhatsApp
          </button>

          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-white/10 py-4 text-white hover:bg-white/5 transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
