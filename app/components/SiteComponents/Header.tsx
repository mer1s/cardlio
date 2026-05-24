import { resolveClasses } from "@/lib/twMap";

type HeaderProps = {
  component: {
    content: string;
    classList?: string[];
  };
};

export default function Header({
  component: { content, classList },
}: HeaderProps) {
  return <h1 className={resolveClasses(classList)}>{content}</h1>;
}