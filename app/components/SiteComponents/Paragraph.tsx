import { getPaddingClasses } from "@/lib/getPaddingClasses";

type ParagraphProps = {
  component: {
    content: string;

    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    color?: string;
    align?: "left" | "center" | "right";
    leading?: "tight" | "snug" | "normal" | "relaxed" | "loose";
    maxWidth?: "none" | "sm" | "md" | "lg" | "xl";

    pt?: 0 | 2 | 4 | 6 | 8 | 10;
    pb?: 0 | 2 | 4 | 6 | 8 | 10;
    pl?: 0 | 2 | 4 | 6 | 8 | 10;
    pr?: 0 | 2 | 4 | 6 | 8 | 10;
  };
};

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const weightMap = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const leadingMap = {
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-6",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};

const maxWidthMap = {
  none: "",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export default function Paragraph({ component }: ParagraphProps) {
  const {
    content,
    size = "sm",
    weight = "normal",
    color = "text-zinc-400",
    align = "left",
    leading = "normal",
    maxWidth = "none",
  } = component;

  const classes = [
    sizeMap[size],
    weightMap[weight],
    leadingMap[leading],
    maxWidthMap[maxWidth],
    color,
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left",
    "w-full",
    getPaddingClasses({
      pt: component.pt,
      pb: component.pb,
      pl: component.pl,
      pr: component.pr,
    }),
  ].join(" ");

  return <p className={classes}>{content}</p>;
}