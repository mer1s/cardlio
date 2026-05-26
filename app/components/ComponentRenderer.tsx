import Link from "next/link";
import { registry } from "./registry";

type Props = {
  components: any[];
  insideBlock?: boolean;
  theme?: "light" | "dark";
  name: string;
  colFlex?: boolean,
  flexGap?: number,
  justify?: string,
  align?: string
  fill?: boolean
};

export default function ComponentRenderer({
  components,
  name,
  insideBlock = false,
  theme = "dark",
  colFlex = false,
  flexGap = 0,
  justify,
  align,
  fill,
}: Props) {
  return (
    <div
      className={[
        "flex",
        flexGap &&`gap-${flexGap}`,
        insideBlock && `${justify ? 'justify-' + justify : ""}`,
        insideBlock && `${fill ? 'h-full w-full' : ""}`,
        insideBlock && `${align ? 'items-' + align: ""}`,
        insideBlock ? colFlex && "flex-col" : "min-h-screen flex-col",
        !insideBlock ? theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black" : ""
      ].filter(Boolean).join(" ")}
    >
      {name && (
        <div
          className={[
            "sticky top-0 z-50",
            "px-6 py-4 border-b mb-4 font-medium",
            "flex items-center justify-between",
            theme === "dark"
              ? "bg-black border-b-zinc-800"
              : "bg-white border-b-zinc-200",
          ].join(" ")}
        >
          <span>{name}</span>

          <Link
            href="/"
            className={[
              "text-sm px-3 py-1 rounded-md border transition",
              theme === "dark"
                ? "border-zinc-700 hover:bg-zinc-900"
                : "border-zinc-300 hover:bg-zinc-100",
            ].join(" ")}
          >
            Back to Home
          </Link>
        </div>
      )}

      {components.map((comp, i) => {
        const Component = registry[comp.type];
        if (!Component) return null;

        return <Component key={i} component={comp} />;
      })}
    </div>
  );
}