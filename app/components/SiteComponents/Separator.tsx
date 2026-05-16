export default function Separator({ component }: any) {
  return (
    <div
      className="w-full border-t border-white/10"
      style={{
        marginTop: `${(component.pt || 0) * 4}px`,
        marginBottom: `${(component.pb || 0) * 4}px`,
      }}
    />
  );
}