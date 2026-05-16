import { getPaddingClasses } from "@/lib/getPaddingClasses";

const sizeMap: any = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
  xl: "text-6xl",
};

const weightMap: any = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  black: "font-black",
};

export default function Header({ component }: any) {
  const {
    content,
    size = "lg",
    weight = "bold",
    align = "left",
    color = "text-white",
  } = component;

  return (
    <h1
      className={[
        sizeMap[size],
        weightMap[weight],
        color,
        align === "center"
          ? "text-center"
          : align === "right"
          ? "text-right"
          : "text-left",
        "tracking-tight leading-none",
        getPaddingClasses(component),
      ].join(" ")}
    >
      {content}
    </h1>
  );
}