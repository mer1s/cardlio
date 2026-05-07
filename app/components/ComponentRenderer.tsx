import AnimatedWrapper from "./AnimatedWrapper";
import { registry } from "./registry";

type Props = {
  components: any[];
  insideBlock?: boolean;
  theme?: "dark" | "light";
};

export default function ComponentRenderer({
  components,
  insideBlock = false,
  theme = "light",
}: Props) {
  const pageThemeClass =
    theme === "dark"
      ? "bg-gradient-to-b sm:rounded-2xl from-zinc-900 to-zinc-950"
      : "bg-gradient-to-b sm:rounded-2xl from-zinc-50 to-zinc-100";

  const containerClass = insideBlock
    ? "flex flex-col px-2 py-2 sm:px-4 sm:py-4"
    : `min-h-screen flex justify-center ${pageThemeClass}`;

  if (insideBlock) {
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
console.log(components)
  return (
    <div className={containerClass}>
      <div className="w-full max-w-3xl px-6 py-6 flex flex-col gap-2">
        {components.map((comp, i) => {
          const Component = registry[comp.type];
          if (!Component) return null;

          return <AnimatedWrapper key={i} delay={i * 25}>
            <Component component={comp} />
          </AnimatedWrapper>
        })}
      </div>
    </div>
  );
}