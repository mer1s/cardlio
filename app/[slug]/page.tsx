import { supabase } from "@/lib/supabase";
import ComponentRenderer from "../components/ComponentRenderer";

export const dynamic = "force-dynamic";

type Site = {
  id: string;
  name: string;
  slug: string;
  data: any[];
  theme: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("sites")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data || error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">
        Not found
      </div>
    );
  }

  const site = data as Site;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      {/* Glow effects */}
      <div
        className="
          absolute
          top-[-150px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* Centered mobile canvas */}
      <div className="relative z-10 flex justify-center">
        <main
          className="
            w-full
            max-w-md
            min-h-screen
            bg-zinc-950/90
            backdrop-blur-xl
            border-0
            border-white/5
            shadow-[0_0_60px_rgba(0,0,0,0.6)]
          "
        >
          <ComponentRenderer
            theme={(site.theme as "light" | "dark") || "dark"}
            components={site.data}
            name={site.name}
          />
        </main>
      </div>
    </div>
  );
}