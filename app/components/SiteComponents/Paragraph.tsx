import { getPaddingClasses } from "@/lib/getPaddingClasses";

const sizeMap: any = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const weightMap: any = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
};

export default function Paragraph({ component }: any) {
  const {
    content,
    size = "md",
    weight = "normal",
    align = "left",
    color = "text-zinc-400",
  } = component;

  return (
    <p
      className={[
        sizeMap[size],
        weightMap[weight],
        color,
        align === "center"
          ? "text-center"
          : align === "right"
          ? "text-right"
          : "text-left",
        "leading-relaxed",
        getPaddingClasses(component),
      ].join(" ")}
    >
      {content}
    </p>
  );
}