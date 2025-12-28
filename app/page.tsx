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
    <div className="rounded-xl bg-[#0f1c24]/80 border border-cyan-400/20 p-4 flex gap-3 items-center">
      <Icon className="text-cyan-400 w-6 h-6" />
      <div>
        <div className="text-xs text-cyan-300 uppercase tracking-wide">
          {label}
        </div>
        <div className="text-xl font-semibold text-white">
          {value}
          <span className="text-sm text-cyan-400 ml-1">{unit}</span>
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
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3 text-white text-lg font-semibold">
        <span className="text-2xl">{flag}</span>
        {title}
      </div>

      {/* Dropdown */}
      <div className="relative max-w-xs">
        <MapPin className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value as T)}
          className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#0f1c24] border border-cyan-400/30 text-white focus:outline-none"
        >
          {locations.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Map Placeholder */}
      <div className="h-48 rounded-xl bg-gradient-to-br from-cyan-500/30 to-transparent border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
        MAP VISUAL
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
    <div className="min-h-screen bg-gradient-to-br from-black via-[#07141d] to-black p-8 text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-sm text-cyan-400 flex items-center justify-center gap-2 mb-2">
          <Cloud className="w-4 h-4" />
          {time.toLocaleString()}
        </div>
        <h1 className="text-3xl font-bold tracking-widest">
          ENVIRONMENTAL MONITOR
        </h1>
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl bg-[#07141d]/70 border border-cyan-400/20 p-8">
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
