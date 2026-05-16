import { registry } from "./registry";

type Props = {
  components: any[];
  insideBlock?: boolean;
  theme?: "light" | "dark";
  padded?: boolean;
};

export default function ComponentRenderer({
  components,
  insideBlock = false,
  theme = "dark",
  padded = true,
}: Props) {
  const isDark = theme === "dark";

  const containerClass = insideBlock
    ? "flex flex-col gap-4"
    : `
      flex flex-col gap-6 min-h-screen
      ${isDark ? "bg-zinc-950 text-white" : "bg-white text-black"}
      ${padded ? "px-5 py-6" : ""}
    `;

  return (
    <div className={containerClass}>
      {components.map((comp, i) => {
        const Component = registry[comp.type];

        if (!Component) return null;

        return <Component key={i} component={comp} />;
      })}
    </div>
  );
}