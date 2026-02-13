import { useParams, Link } from "react-router-dom";

export default function PortfolioDetail() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-4"
        >
          ← Volver al inicio
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold capitalize">
          Proyecto: {slug.replaceAll("-", " ")}
        </h1>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          Esta pagina se encuentra en proceso...
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-zinc-300">
            ✅ Working...
          </p>
        </div>
      </div>
    </div>
  );
}
