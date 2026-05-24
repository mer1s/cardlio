export const twMap: Record<string, string> = {
  /* =====================
     LAYOUT
  ===================== */
  "block": "block",
  "inline-block": "inline-block",
  "inline": "inline",
  "hidden": "hidden",
  "flex": "flex",
  "inline-flex": "inline-flex",
  "grid": "grid",

  "flex-col": "flex-col",
  "flex-row": "flex-row",
  "items-center": "items-center",
  "items-start": "items-start",
  "items-end": "items-end",
  "justify-center": "justify-center",
  "justify-between": "justify-between",
  "justify-start": "justify-start",
  "justify-end": "justify-end",

  /* =====================
     SPACING
  ===================== */
  "p-0": "p-0",
  "p-2": "p-2",
  "p-4": "p-4",
  "p-6": "p-6",

  "px-2": "px-2",
  "px-3": "px-3",
  "px-4": "px-4",
  "px-6": "px-6",

  "py-1": "py-1",
  "py-2": "py-2",
  "py-4": "py-4",

  "m-0": "m-0",
  "m-2": "m-2",
  "m-4": "m-4",

  "mx-auto": "mx-auto",
  "my-2": "my-2",
  "my-3": "my-3",

  "mr-auto": "mr-auto",
  "ml-3": "ml-3",

  "gap": "gap-2",
  "gap-2": "gap-2",
  "gap-4": "gap-4",
  "gap-6": "gap-6",

  /* =====================
     TYPOGRAPHY
  ===================== */
  "text-xs": "text-xs",
  "text-sm": "text-sm",
  "text-base": "text-base",
  "text-lg": "text-lg",
  "text-xl": "text-xl",
  "text-2xl": "text-2xl",
  "text-3xl": "text-3xl",
  "text-4xl": "text-4xl",
  "text-5xl": "text-5xl",

  "font-light": "font-light",
  "font-normal": "font-normal",
  "font-medium": "font-medium",
  "font-semibold": "font-semibold",
  "font-bold": "font-bold",

  "text-left": "text-left",
  "text-center": "text-center",
  "text-right": "text-right",

  "text-zinc-500": "text-zinc-500",
  "text-zinc-600": "text-zinc-600",
  "text-zinc-700": "text-zinc-700",
  "text-zinc-900": "text-zinc-900",

  /* =====================
     BACKGROUND
  ===================== */
  "bg-white": "bg-white",
  "bg-black": "bg-black",
  "bg-zinc-50": "bg-zinc-50",
  "bg-zinc-100": "bg-zinc-100",
  "bg-zinc-900": "bg-zinc-900",

  /* =====================
     BORDER + RADIUS
  ===================== */
  "border": "border",
  "border-0": "border-0",
  "border-zinc-200": "border-zinc-200",
  "border-zinc-300": "border-zinc-300",

  "rounded-sm": "rounded-sm",
  "rounded": "rounded",
  "rounded-md": "rounded-md",
  "rounded-lg": "rounded-lg",
  "rounded-xl": "rounded-xl",
  "rounded-2xl": "rounded-2xl",
  "rounded-full": "rounded-full",

  /* =====================
     SHADOW
  ===================== */
  "shadow": "shadow",
  "shadow-sm": "shadow-sm",
  "shadow-md": "shadow-md",
  "shadow-lg": "shadow-lg",
  "shadow-xl": "shadow-xl",
  "shadow-none": "shadow-none",

  /* =====================
     WIDTH / HEIGHT
  ===================== */
  "w-full": "w-full",
  "w-auto": "w-auto",
  "h-full": "h-full",
  "h-auto": "h-auto",

  /* =====================
     POSITION
  ===================== */
  "relative": "relative",
  "absolute": "absolute",
  "fixed": "fixed",
  "sticky": "sticky",

  /* =====================
     INTERACTION
  ===================== */
  "cursor": "cursor-pointer",
  "cursor-pointer": "cursor-pointer",
  "select-none": "select-none",
  "pointer-events-none": "pointer-events-none",
  "pointer-events-auto": "pointer-events-auto",

  /* =====================
     EFFECTS
  ===================== */
  "opacity-0": "opacity-0",
  "opacity-50": "opacity-50",
  "opacity-100": "opacity-100",

  "transition": "transition",
  "duration-150": "duration-150",
  "duration-200": "duration-200",
  "duration-300": "duration-300",
};

export function resolveClasses(classList?: string[]) {
  if (!classList) return "";

  return classList
    .map((cls) => twMap[cls])
    .filter(Boolean)
    .join(" ");
}