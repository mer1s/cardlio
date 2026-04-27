type ListProps = {
  component: {
    items: string[];

    size?: "sm" | "base" | "lg";
    spacing?: "sm" | "md" | "lg";

    variant?: "dot" | "check" | "number";
    color?: string; // text color e.g. "text-zinc-300"
    markerColor?: string; // e.g. "bg-blue-500"
  };
};

const sizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const spacingMap = {
  sm: "space-y-1",
  md: "space-y-2",
  lg: "space-y-3",
};

export default function List({ component }: ListProps) {
  const {
    items,
    size = "base",
    spacing = "md",
    variant = "dot",
    color = "text-zinc-300",
    markerColor = "bg-blue-500",
  } = component;

  const renderMarker = (index: number) => {
    switch (variant) {
      case "check":
        return (
          <div
            className={`mt-1 h-4 w-4 rounded-full flex items-center justify-center text-xs ${markerColor} text-white`}
          >
            ✓
          </div>
        );

      case "number":
        return (
          <div
            className={`mt-0.5 min-w-5 text-right text-xs font-medium ${markerColor.replace(
              "bg-",
              "text-"
            )}`}
          >
            {index + 1}.
          </div>
        );

      case "dot":
      default:
        return (
          <div
            className={`mt-2 h-2 w-2 rounded-full ${markerColor} shadow-[0_0_10px_rgba(59,130,246,0.8)]`}
          />
        );
    }
  };

  return (
    <ul className={[spacingMap[spacing]].join(" ")}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 ${sizeMap[size]} ${color}`}
        >
          {renderMarker(i)}
          <p className="leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}