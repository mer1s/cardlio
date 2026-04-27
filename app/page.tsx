import { supabase } from "@/lib/supabase"

export default async function Home() {
  const { data } = await supabase
    .from('sites')
    .select('*')

  return (
    <div>
      <h1>This is the startpoint.</h1>
      <h1>Sites:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}