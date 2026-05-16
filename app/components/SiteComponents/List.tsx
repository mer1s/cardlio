export default function List({ component }: any) {
  return (
    <ul className="flex flex-col gap-3">
      {component.items.map((item: string, i: number) => (
        <li
          key={i}
          className="text-sm text-zinc-300 flex items-center gap-3"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}