import Image from "next/image";
import { getImageUrl } from "@/lib/getImageUrl";

type ImageBlockProps = {
  component: {
    path: string;
    alt?: string;

    aspectRatio?: "square" | "video" | "wide";
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
    border?: boolean;

    overlay?: "none" | "dark" | "gradient";
    objectFit?: "cover" | "contain";
  };
};

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[16/9]",
};

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export default function ImageBlock({ component }: ImageBlockProps) {
  const {
    path,
    alt = "",
    aspectRatio = "video",
    rounded = "xl",
    border = true,
    overlay = "gradient",
    objectFit = "cover",
  } = component;

  return (
    <div
      className={[
        "relative overflow-hidden",
        aspectMap[aspectRatio],
        roundedMap[rounded],
        border ? "border border-zinc-800" : "",
      ].join(" ")}
    >
      <Image
        src={getImageUrl(path)}
        alt={alt}
        fill
        className={`w-full h-full ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        }`}
      />

      {/* overlays */}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {overlay === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-top from-black/50 to-transparent" />
      )}
    </div>
  );
}