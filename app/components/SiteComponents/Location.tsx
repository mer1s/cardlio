export default function Location({ component }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800">
      <iframe
        src={component.googleUrl}
        className="w-full h-64"
        loading="lazy"
      />
    </div>
  );
}