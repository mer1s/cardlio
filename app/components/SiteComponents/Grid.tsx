import { registry } from "../registry";

const colsMap: any = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

export default function Grid({ component }: any) {
  const {
    cols = 2,
    gap = 4,
    items = [],
  } = component;

  return (
    <div
      className={[
        "grid",
        colsMap[cols],
        `gap-${gap}`,
      ].join(" ")}
    >
      {items.map((item: any, i: number) => {
        const Component = registry[item.type];

        if (!Component) return null;

        return <Component key={i} component={item} />;
      })}
    </div>
  );
}