import ProgressCard from "./ProgressCard";

export default function StatsCard() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-400 text-sm">Monthly Leads</p>
          <h3 className="text-4xl font-bold mt-2">+327%</h3>
        </div>

        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
          📈
        </div>
      </div>

      <div className="space-y-5">
        <ProgressCard title="Instagram Growth" value="87%" width="87%" />
        <ProgressCard title="Google Reach" value="72%" width="72%" />
        <ProgressCard title="WhatsApp Leads" value="91%" width="91%" />
      </div>
    </div>
  );
}