import Link from "next/link";
import { getPaddingClasses } from "@/lib/getPaddingClasses";
import { resolveClasses } from "@/lib/twMap";

export default function ButtonLink({ component }: any) {
  const {
    content,
    href,
    classList = [],
    fullWidth = false,
  } = component;

  return (
    <div className={getPaddingClasses(component)}>
      <Link
        href={href}
        className={[
          resolveClasses(classList),
          fullWidth ? "w-full" : "",
        ].join(" ")}
      >
        {content}
      </Link>
    </div>
  );
}