export default function ProgressCard({ title, value, width }) {
  return (
    <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
      <div className="flex justify-between text-sm mb-2">
        <span>{title}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-400 rounded-full"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}