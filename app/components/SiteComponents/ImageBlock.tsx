import Image from "next/image";
import { getImageUrl } from "@/lib/getImageUrl";
import { resolveClasses } from "@/lib/twMap";

export default function ImageBlock({ component }: any) {
  const {
    path,
    alt = "",
    classList = [],
    imageClassList = [],
  } = component;

  return (
    <div className={`relative ${resolveClasses(classList)}`}>
      <Image
        src={getImageUrl(path)}
        alt={alt}
        fill
        sizes="100vw"
        className={resolveClasses(imageClassList)}
      />
    </div>
  );
}