import { supabase } from "@/lib/supabase";
import ComponentRenderer from "../components/ComponentRenderer";
export const dynamic = "force-dynamic"

type Site = {
  id: string
  slug: string,
  data: any[],
  theme: string
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data, error } = await supabase
    .from("sites")
    .select("*")
    .eq("slug", slug)
    .single();

  console.log(data, error)

  if (!data || error) {
    return <div className="text-zinc-800 text-center py-5 my-5">Not found</div>
  }
  const site = data as Site
  console.log(site)

  return (
    <div>
      <main
        className="
        w-full max-w-2xl
        mx-auto 
        md:py-2
      "
      >
        <ComponentRenderer theme="dark" components={site.data} />
      </main>
    </div>
  )
}