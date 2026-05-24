import { resolveClasses } from "@/lib/twMap";

type ParagraphProps = {
  component: {
    content: string;
    classList: string[];
  };
};

export default function Paragraph({ component }: ParagraphProps) {
  const { content, classList } = component;
  return (
    <p className={resolveClasses(classList)}>
      {content}
    </p>
  );
}