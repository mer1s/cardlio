import ComponentRenderer from "../ComponentRenderer";

export default function Block({ component }: any) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
      <ComponentRenderer
        insideBlock={true}
        components={component.items}
        name=""
      />
    </div>
  );
}