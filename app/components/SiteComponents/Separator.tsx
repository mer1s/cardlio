import { getPaddingClasses } from "@/lib/getPaddingClasses";

type SeparatorProps = {
  component: {
    color?: string;
    thickness?: "thin" | "normal" | "thick";
    opacity?: "low" | "medium" | "high";
    rounded?: boolean;

    pt?: 0 | 2 | 4 | 6 | 8 | 10;
    pb?: 0 | 2 | 4 | 6 | 8 | 10;
    pl?: 0 | 2 | 4 | 6 | 8 | 10;
    pr?: 0 | 2 | 4 | 6 | 8 | 10;
  };
};

const thicknessMap = {
  thin: "h-px",
  normal: "h-0.5",
  thick: "h-1",
};

const opacityMap = {
  low: "opacity-30",
  medium: "opacity-60",
  high: "opacity-100",
};

export default function Separator({
  component,
}: SeparatorProps) {
  const {
    color = "bg-zinc-700",
    thickness = "thin",
    opacity = "medium",
    rounded = true,
  } = component;

  return (
    <div
      className={getPaddingClasses({
        pt: component.pt,
        pb: component.pb,
        pl: component.pl,
        pr: component.pr,
      })}
    >
      <div
        className={[
          "w-full",
          thicknessMap[thickness],
          opacityMap[opacity],
          rounded ? "rounded-full" : "",
          color,
        ].join(" ")}
      />
    </div>
  );
}