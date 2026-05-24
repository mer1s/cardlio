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
    <div className="relative overflow-x-clip bg-black">
      
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