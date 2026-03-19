import { ChevronLeft, Bell, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a2236] flex">

      {/* SIDEBAR */}
      <div className="w-[220px] bg-white border-r border-black/5 flex flex-col p-5 shadow-sm">
        <div className="mb-8">
          <div className="text-xl font-black tracking-widest">CUSTOS</div>
          <div className="text-[10px] text-gray-400">AI Surveillance</div>
        </div>

        <div className="flex flex-col gap-2 text-sm font-semibold">
          <div className="bg-blue-50 text-blue-500 px-3 py-2 rounded-xl">Dashboard</div>
          <div className="hover:bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">Monitor</div>
          <div className="hover:bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">Alerts</div>
          <div className="hover:bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">Evidence</div>
          <div className="hover:bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">Analytics</div>
          <div className="hover:bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">Settings</div>
        </div>

        <div className="mt-auto text-xs text-gray-400">
          ● System Active <br />
          ● Recording
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <div className="h-[64px] bg-white border-b border-black/5 flex items-center justify-between px-6 shadow-sm">
          <div>
            <div className="font-black text-lg tracking-wide">Dashboard</div>
            <div className="text-xs text-gray-400">AI Security Monitoring</div>
          </div>

          <div className="bg-green-100 text-green-600 px-5 py-1 rounded-full text-xs font-bold">
            ● SAFE
          </div>

          <div className="flex gap-2">
            <button className="p-2 border rounded-xl"><Bell size={16} /></button>
            <button className="p-2 border rounded-xl"><Settings size={16} /></button>
            <button className="p-2 border rounded-xl"><LogOut size={16} /></button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 grid grid-cols-3 gap-6 flex-1">

          {/* LEFT - FEED */}
          <div className="col-span-2 flex flex-col gap-6">

            <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
              <div className="flex gap-2 mb-3">
                <button className="px-3 py-1 rounded-lg bg-blue-50 text-blue-500 text-xs font-bold">All Zones</button>
                <button className="px-3 py-1 rounded-lg border text-xs">Zone A</button>
                <button className="px-3 py-1 rounded-lg border text-xs">Zone B</button>
              </div>

              <div className="bg-[#0f1520] rounded-xl h-[300px] flex items-center justify-center text-gray-400 text-sm">
                📹 Live Feed (UI Only)
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Detections", value: "847" },
                { label: "Accuracy", value: "99.8%" },
                { label: "Alerts", value: "12" },
                { label: "Critical", value: "0" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow">
                  <div className="text-2xl font-black">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* RISK */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <div className="text-xs font-bold text-gray-400 mb-2">RISK SCORE</div>
              <div className="text-6xl font-black text-green-500">15</div>
              <div className="text-sm text-gray-400">LOW</div>

              <div className="h-2 bg-gray-200 rounded mt-4">
                <div className="h-full bg-green-500 w-[15%] rounded"></div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-white p-4 rounded-2xl shadow">
              <div className="text-xs font-bold text-gray-400 mb-3">RECENT ACTIVITY</div>

              {[
                "Person detected in Zone A",
                "Loitering detected",
                "Vehicle detected"
              ].map((text, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg mb-2 text-sm">
                  {text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <a
        href="/"
        className="fixed bottom-5 left-5 bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
      >
        <ChevronLeft size={16} />
        Back
      </a>
    </div>
  );
}