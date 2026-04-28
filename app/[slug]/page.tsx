import ComponentRenderer from "../components/ComponentRenderer";
export const dynamic = "force-dynamic"

type Site = {
  id: string
  slug: string,
  data: JSON,
  theme: string
}

const mockData = [
  {
    "type": "header",
    "content": "Build something modern",
    "size": "6xl",
    "weight": "black",
    "color": "text-blue-500",
    "align": "left",
    "tracking": "tight",
    "pt": 4,
    "pb": 8
  },
  {

    "type": "paragraph",
    "content": "Modern web applications today rely heavily on component-based architecture, which allows developers to build reusable, scalable, and maintainable user interfaces.",
    "size": "lg",
    "leading": "normal",
    "color": "text-zinc-300",
    "maxWidth": "",
    "pb": "4",
  },
  {
    "type": "link",
    "content": "Get Started",
    "href": "https://instagram.com",
    "variant": "primary",
    "size": "md",
    "fullWidth": false
  }, {
    "type": "header",
    "content": "Build something modern",
    "size": "6xl",
    "weight": "black",
    "color": "text-blue-500",
    "align": "left",
    "tracking": "tight",
    "pt": 4,
    "pb": 8
  },
  {

    "type": "paragraph",
    "content": "Modern web applications today rely heavily on component-based architecture, which allows developers to build reusable, scalable, and maintainable user interfaces.",
    "size": "lg",
    "leading": "normal",
    "color": "text-zinc-300",
    "maxWidth": "",
    "pb": "4",
  },
  {
    "type": "link",
    "content": "Get Started",
    "href": "https://instagram.com",
    "variant": "primary",
    "size": "md",
    "fullWidth": false
  }, {
    "type": "header",
    "content": "Build something modern",
    "size": "6xl",
    "weight": "black",
    "color": "text-blue-500",
    "align": "left",
    "tracking": "tight",
    "pt": 4,
    "pb": 8
  },
  {

    "type": "paragraph",
    "content": "Modern web applications today rely heavily on component-based architecture, which allows developers to build reusable, scalable, and maintainable user interfaces.",
    "size": "lg",
    "leading": "normal",
    "color": "text-zinc-300",
    "maxWidth": "",
    "pb": "4",
  },
  {
    "type": "link",
    "content": "Get Started",
    "href": "https://instagram.com",
    "variant": "primary",
    "size": "md",
    "fullWidth": false
  }, {
    "type": "header",
    "content": "Build something modern",
    "size": "6xl",
    "weight": "black",
    "color": "text-blue-500",
    "align": "left",
    "tracking": "tight",
    "pt": 4,
    "pb": 8
  },
  {

    "type": "paragraph",
    "content": "Modern web applications today rely heavily on component-based architecture, which allows developers to build reusable, scalable, and maintainable user interfaces.",
    "size": "lg",
    "leading": "normal",
    "color": "text-zinc-300",
    "maxWidth": "",
    "pb": "4",
  },
  {
    "type": "link",
    "content": "Get Started",
    "href": "https://instagram.com",
    "variant": "primary",
    "size": "md",
    "fullWidth": false
  },
];


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  //   const { data, error } = await supabase
  //     .from("sites")
  //     .select("*")
  //     .eq("slug", slug)
  //     .single()

  //   if (!data || error) {
  //     return <div>Not found</div>
  //   }
  // const site = data as Site
  return (
    <div>
      <main
        className="
        w-full max-w-2xl
        mx-auto 
        md:py-2
      "
      >
        <ComponentRenderer theme="dark" components={mockData} />
      </main>
    </div>
  )
}