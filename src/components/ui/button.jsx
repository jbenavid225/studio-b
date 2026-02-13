import React from "react";

export function Button({ className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/40 disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    default: "bg-violet-600 hover:bg-violet-500 text-white",
    outline:
      "bg-transparent border border-zinc-700 text-zinc-300 hover:bg-white/5 hover:text-white hover:border-zinc-600",
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    />
  );
}
