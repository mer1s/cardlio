export default function Contact({ component }: any) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      {component.phone && (
        <div className="text-sm text-zinc-300">
          {component.phone}
        </div>
      )}

      {component.email && (
        <div className="text-sm text-zinc-400">
          {component.email}
        </div>
      )}
    </div>
  );
}