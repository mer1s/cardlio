import ComponentRenderer from "../ComponentRenderer";
import { resolveClasses } from "@/lib/twMap";

export default function Block({ component }: any) {
  const {
    colFlex = false,
    flexGap = 0,
    items = [],
    classList = [],
  } = component;

  return (
      <div className={resolveClasses(classList)}>
        <ComponentRenderer
          insideBlock={true}
          components={items}
          name=""
          colFlex = {colFlex}
          flexGap = {flexGap}
        />
      </div>
  );
}