import { resolveClasses } from "@/lib/twMap";
import { getPaddingClasses } from "@/lib/getPaddingClasses";

type ListItem = {
  content: string;
  classList?: string[];
};

type ListProps = {
  component: {
    items: ListItem[];
    classList?: string[];
    itemClassList?: string[];
    ordered?: boolean;
  };
};

export default function List({ component }: ListProps) {
  const {
    items = [],
    classList = [],
    itemClassList = [],
    ordered = false,
  } = component;

  const Tag = ordered ? "ol" : "ul";

  return (
      <Tag className={resolveClasses(classList)}>
        {items.map((item, index) => (
          <li
            key={index}
            className={[
              resolveClasses(itemClassList),
              resolveClasses(item.classList),
            ].join(" ")}
          >
            {item.content}
          </li>
        ))}
      </Tag>
  );
}