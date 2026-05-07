import { registry } from "../registry";

type GridProps = {
  component: {
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 0 | 2 | 4 | 6 | 8 | 10;

    items: any[]; // nested components

    pt?: 0 | 2 | 4 | 6 | 8 | 10;
    pb?: 0 | 2 | 4 | 6 | 8 | 10;
  };
};

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const gapMap = {
  0: "gap-0",
  2: "gap-2",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
};

const paddingMap = {
  0: "0",
  2: "2",
  4: "4",
  6: "6",
  8: "8",
  10: "10",
};

export default function Grid({ component }: GridProps) {
  const {
    cols = 2,
    gap = 4,
    items = [],
    pt = 0,
    pb = 0,
  } = component;

  return (
    <div
      className={[
        "grid w-full",
        colsMap[cols],
        gapMap[gap],
        pt ? `pt-${paddingMap[pt]}` : "",
        pb ? `pb-${paddingMap[pb]}` : "",
      ].join(" ")}
    >
      {items.map((item, i) => {
        const Component = registry[item.type];
        if (!Component) return null;

        return <Component key={i} component={item} />;
      })}
    </div>
  );
}