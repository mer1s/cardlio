export type ComponentType =
  | { type: "image"; path: string; alt?: string }
  | { type: "header"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }
  | { type: "contact"; phone: string; email?: string }
  | { type: "location"; googleUrl: string }
  | { type: "block";  component : any }
  | { type: "block";  content : string; href: string };