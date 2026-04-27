import ComponentRenderer from "../ComponentRenderer";

export default function Block({ component }: any) {
  const variant = "glass";

  const base =
    "relative group rounded-2xl p-[1px] transition-all duration-300";

  const variants: any = {
    default:
      "bg-gradient-to-b from-zinc-800 to-zinc-900",

    highlight:
      "bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-transparent",

    glass:
      "bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl",
  };

  const inner =
    "relative overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/5 transition-all duration-300 group-hover:bg-zinc-900/90";

  return (
    <div className={`${base} ${variants[variant]}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition duration-500 blur-xl bg-blue-500/20" />

      {/* Content */}
      <div className={inner}>
        <ComponentRenderer components={component.children} />
      </div>
    </div>
  );
}