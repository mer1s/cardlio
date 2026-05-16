import Image from "next/image";
import { getImageUrl } from "@/lib/getImageUrl";

export default function ImageBlock({ component }: any) {
  const {
    path,
    alt = "",
    aspect = "square",
    rounded = "3xl",
  } = component;

  const aspectMap: any = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[4/5]",
  };

  const roundedMap: any = {
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-zinc-900
        ${aspectMap[aspect]}
        ${roundedMap[rounded]}
      `}
    >
      <Image
        src={getImageUrl(path)}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}