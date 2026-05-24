import { registry } from "./registry";

type Props = {
  components: any[];
  insideBlock?: boolean;
  theme?: "light" | "dark";
  name: string
};

export default function ComponentRenderer({
  components,
  name,
  insideBlock = false,
  theme = "dark",
}: Props) {
  return (
    <div
      className={[
        "flex flex-col",
        insideBlock ? "" : "min-h-screen",
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black",
      ].join(" ")}
    >
      <div className="p-3 border-b border-b-zinc-300 mb-4 font-medium">{name}</div>
      {components.map((comp, i) => {
        const Component = registry[comp.type];
        if (!Component) return null;
        return <Component key={i} component={comp} />;
      })}
    </div>
  );
}