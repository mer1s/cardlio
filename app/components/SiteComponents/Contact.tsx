type ContactProps = {
  component: {
    phone?: string;
    email?: string;
    address?: string;

    size?: "sm" | "base" | "lg";
    variant?: "glass" | "solid" | "default";
  };
};

const sizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

export default function Contact({ component }: ContactProps) {
  const { phone, email, address, size = "base", variant = "glass" } = component;

  return (
    <div
      className={[
        "rounded-2xl border backdrop-blur-xl p-6 space-y-5",
        variant === "glass"
          ? "bg-zinc-800/40 border-zinc-700"
          : variant === "solid"
          ? "bg-zinc-900 border-zinc-800"
          : "bg-white border-zinc-200",
      ].join(" ")}
    >
      <div className="space-y-4">
        {phone && (
          <div className={`flex items-center gap-3 ${sizeMap[size]} text-zinc-300`}>
            <span className="text-zinc-400 min-w-5">📞</span>
            <span className="leading-relaxed">{phone}</span>
          </div>
        )}

        {email && (
          <div className={`flex items-center gap-3 ${sizeMap[size]} text-zinc-300`}>
            <span className="text-zinc-400 min-w-5">✉️</span>
            <span className="leading-relaxed">{email}</span>
          </div>
        )}

        {address && (
          <div className={`flex items-center gap-3 ${sizeMap[size]} text-zinc-300`}>
            <span className="text-zinc-400 min-w-5">📍</span>
            <span className="leading-relaxed">{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}