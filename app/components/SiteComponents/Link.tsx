import Link from "next/link";
import { getPaddingClasses } from "@/lib/getPaddingClasses";

const variantMap: any = {
  primary:
    "bg-white text-black hover:opacity-90",

  secondary:
    "bg-zinc-900 text-white border border-white/10 hover:bg-zinc-800",
};

export default function ButtonLink({ component }: any) {
  const {
    content,
    href,
    variant = "primary",
    fullWidth = false,
  } = component;

  return (
    <div className={getPaddingClasses(component)}>
      <Link
        href={href}
        className={[
          "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200",
          variantMap[variant],
          fullWidth ? "w-full" : "",
        ].join(" ")}
      >
        {content}
      </Link>
    </div>
  );
}