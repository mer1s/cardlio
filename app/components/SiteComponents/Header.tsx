import { getPaddingClasses } from "@/lib/getPaddingClasses";

export default function Header({ component }: any) {
  const {
    content,
    size = "4xl",
    weight = "bold",
    color = "text-white",
    align = "left",
    tracking = "tight",
  } = component;

  // Typography maps
  const sizeMap: any = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  const weightMap: any = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  };

  const alignMap: any = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const trackingMap: any = {
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
  };

  const classes = [
    sizeMap[size],
    weightMap[weight],
    alignMap[align],
    trackingMap[tracking],
    color,
    getPaddingClasses(component)
  ].join(" ");

  return <h2 className={classes}>{content}</h2>;
}