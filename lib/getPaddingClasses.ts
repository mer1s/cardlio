type Spacing = 0 | 2 | 4 | 6 | 8 | 10;

type PaddingProps = {
  pt?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  pr?: Spacing;
};

// Tailwind-safe maps
const ptMap = {
  0: "pt-0",
  2: "pt-2",
  4: "pt-4",
  6: "pt-6",
  8: "pt-8",
  10: "pt-10",
};

const pbMap = {
  0: "pb-0",
  2: "pb-2",
  4: "pb-4",
  6: "pb-6",
  8: "pb-8",
  10: "pb-10",
};

const plMap = {
  0: "pl-0",
  2: "pl-2",
  4: "pl-4",
  6: "pl-6",
  8: "pl-8",
  10: "pl-10",
};

const prMap = {
  0: "pr-0",
  2: "pr-2",
  4: "pr-4",
  6: "pr-6",
  8: "pr-8",
  10: "pr-10",
};

export function getPaddingClasses({
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
}: PaddingProps) {
  return [
    ptMap[pt],
    pbMap[pb],
    plMap[pl],
    prMap[pr],
  ].join(" ");
}