"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Wind,
  Droplets,
  Thermometer,
  Cloud,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */

const data = {
  india: {
    Gujarat: { pm25: 68, pm10: 97, humidity: 62, temp: 32 },
    Rajasthan: { pm25: 92, pm10: 145, humidity: 38, temp: 35 },
  },
  france: {
    Paris: { pm25: 21, pm10: 30, humidity: 55, temp: 15 },
    Lyon: { pm25: 22, pm10: 32, humidity: 58, temp: 14 },
  },
};

type Metrics = {
  pm25: number;
  pm10: number;
  humidity: number;
  temp: number;
};

type IndiaLocation = keyof typeof data.india;
type FranceLocation = keyof typeof data.france;

/* ---------------- SMALL COMPONENTS ---------------- */

function StatCard({
  icon: Icon,
  label,
  value,
  unit,
}: {
  icon: any;
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="rounded-xl bg-[#0a1319]/60 border border-cyan-400/10 p-5 flex gap-4 items-center backdrop-blur-sm">
      <div className="bg-cyan-400/10 p-3 rounded-lg">
        <Icon className="text-cyan-400 w-6 h-6" />
      </div>
      <div>
        <div className="text-sm text-cyan-300/80 mb-1">
          {label}
        </div>
        <div className="text-2xl font-bold text-white">
          {value}
          <span className="text-sm text-cyan-400/60 ml-1 font-normal">{unit}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COUNTRY PANEL ---------------- */

function CountryPanel<T extends string>({
  title,
  flag,
  locations,
  selected,
  onChange,
  metrics,
}: {
  title: string;
  flag: string;
  locations: readonly T[];
  selected: T;
  onChange: (v: T) => void;
  metrics: Metrics;
}) {
  return (
    <div className="flex flex-col gap-6 bg-[#0a1319]/40 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 text-white text-xl font-bold tracking-wide">
        <span className="text-2xl">{flag}</span>
        {title}
        <span className="text-2xl">{flag}</span>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value as T)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a1319]/80 border border-cyan-400/30 text-white text-base focus:outline-none focus:border-cyan-400/60 appearance-none cursor-pointer"
        >
          {locations.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400">▼</div>
      </div>

      {/* Map Visual */}
      <div className="h-64 rounded-xl bg-[#0a1319]/80 border border-cyan-400/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
        {title === "INDIA" ? (
          <svg viewBox="0 0 300 350" className="w-full h-full p-8" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))' }}>
            <path d="M150,20 L180,40 L200,35 L210,50 L225,55 L235,70 L245,85 L250,105 L255,125 L260,145 L258,165 L252,185 L245,200 L235,215 L220,225 L200,232 L180,235 L160,238 L140,235 L120,230 L100,222 L85,210 L72,195 L65,178 L60,160 L58,140 L60,120 L65,100 L72,82 L82,65 L95,50 L110,38 L130,28 L150,20 Z" 
                  fill="rgba(34, 211, 238, 0.4)" 
                  stroke="rgba(34, 211, 238, 0.8)" 
                  strokeWidth="1.5"/>
          </svg>
        ) : (
          <svg viewBox="0 0 300 320" className="w-full h-full p-8" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))' }}>
            <path d="M120,30 L140,25 L155,28 L170,35 L185,42 L195,55 L205,70 L215,85 L220,100 L222,115 L220,130 L215,145 L210,160 L205,175 L198,190 L190,202 L180,212 L168,220 L155,225 L142,228 L128,228 L115,225 L102,220 L90,212 L80,202 L72,190 L66,176 L62,162 L60,148 L60,134 L62,120 L66,106 L72,92 L80,78 L90,65 L102,53 L115,43 L120,30 Z" 
                  fill="rgba(34, 211, 238, 0.4)" 
                  stroke="rgba(34, 211, 238, 0.8)" 
                  strokeWidth="1.5"/>
            <circle cx="140" cy="95" r="3" fill="rgba(34, 211, 238, 0.9)"/>
          </svg>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={Wind} label="PM 2.5" value={metrics.pm25} unit="µg/m³" />
        <StatCard icon={Wind} label="PM 10" value={metrics.pm10} unit="µg/m³" />
        <StatCard
          icon={Droplets}
          label="Humidity"
          value={metrics.humidity}
          unit="%"
        />
        <StatCard
          icon={Thermometer}
          label="Temperature"
          value={metrics.temp}
          unit="°C"
        />
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function Page() {
  const [time, setTime] = useState(new Date());

  const [india, setIndia] = useState<IndiaLocation>("Gujarat");
  const [france, setFrance] = useState<FranceLocation>("Paris");

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a0f] p-6 text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-cyan-400/60 text-sm mb-3 flex items-center justify-center gap-2">
          <Cloud className="w-4 h-4" />
          {time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
        </div>
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-[#0a1a24] to-[#0f2533] rounded-xl border border-cyan-400/30 p-3 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CountryPanel
          title="INDIA"
          flag="🇮🇳"
          locations={Object.keys(data.india) as IndiaLocation[]}
          selected={india}
          onChange={setIndia}
          metrics={data.india[india]}
        />

        <CountryPanel
          title="FRANCE"
          flag="🇫🇷"
          locations={Object.keys(data.france) as FranceLocation[]}
          selected={france}
          onChange={setFrance}
          metrics={data.france[france]}
        />
      </div>
    </div>
  );
}
