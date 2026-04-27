import Link from "next/link";

type ButtonLinkProps = {
  component: {
    content: string;
    href: string;

    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "ghost";

    fullWidth?: boolean;
    external?: boolean;
  };
};

const sizeMap = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantMap = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-sm",
  secondary:
    "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
  ghost:
    "bg-transparent text-blue-400 hover:bg-blue-500/10",
};

export default function LinkComponent({ component }: ButtonLinkProps) {
  const {
    content,
    href,
    size = "md",
    variant = "primary",
    fullWidth = true,
    external = false,
  } = component;

  const classes = [
    "inline-flex items-center justify-center rounded-xl font-medium",
    "transition-all duration-200",
    "active:scale-[0.98]",
    sizeMap[size],
    variantMap[variant],
    fullWidth ? "w-full" : "",
  ].join(" ");

  const inner = <span>{content}</span>;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <section>
      <Link href={href} className={classes}>
        {inner}
      </Link>
    </section>
  );
}