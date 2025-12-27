"use client";

import React, { useState, useEffect } from "react";
import { Cloud, Droplets, Thermometer, Wind, MapPin } from "lucide-react";

/* =======================
   MOCK DATA
======================= */

const mockEnvironmentalData = {
  india: {
    Gujarat: { pm25: 78, pm10: 125, humidity: 45, temp: 32 },
    Rajasthan: { pm25: 92, pm10: 145, humidity: 38, temp: 35 },
    Maharashtra: { pm25: 71, pm10: 118, humidity: 62, temp: 29 },
    Delhi: { pm25: 156, pm10: 201, humidity: 55, temp: 28 },
    Karnataka: { pm25: 65, pm10: 98, humidity: 58, temp: 27 },
    "Tamil Nadu": { pm25: 59, pm10: 89, humidity: 68, temp: 30 },
    "Uttar Pradesh": { pm25: 134, pm10: 178, humidity: 52, temp: 30 },
    Punjab: { pm25: 98, pm10: 142, humidity: 48, temp: 31 },
    "West Bengal": { pm25: 88, pm10: 132, humidity: 72, temp: 29 },
  },
  france: {
    Paris: { pm25: 18, pm10: 28, humidity: 75, temp: 8 },
    Lyon: { pm25: 22, pm10: 32, humidity: 78, temp: 7 },
    Marseille: { pm25: 25, pm10: 35, humidity: 68, temp: 12 },
    Toulouse: { pm25: 19, pm10: 27, humidity: 72, temp: 9 },
    Bordeaux: { pm25: 21, pm10: 30, humidity: 80, temp: 10 },
    Lille: { pm25: 24, pm10: 34, humidity: 82, temp: 6 },
    Nice: { pm25: 20, pm10: 29, humidity: 65, temp: 13 },
    Nantes: { pm25: 17, pm10: 25, humidity: 77, temp: 9 },
  },
};

/* =======================
   TYPES
======================= */

type EnvironmentalMetrics = {
  pm25: number;
  pm10: number;
  humidity: number;
  temp: number;
};

type IndiaLocation = keyof typeof mockEnvironmentalData.india;
type FranceLocation = keyof typeof mockEnvironmentalData.france;

type MetricCardProps = {
  icon: React.ElementType;
  label: string;
  value: number;
  unit: string;
  isLoading: boolean;
};

type CountryPanelProps<T extends string> = {
  country: string;
  flag: string;
  locations: readonly T[];
  selected: T;
  onSelect: (value: T) => void;
  data: EnvironmentalMetrics;
};

/* =======================
   COMPONENTS
======================= */

const MetricCard = ({
  icon: Icon,
  label,
  value,
  unit,
  isLoading,
}: MetricCardProps) => (
  <div className="bg-[#1F2833] rounded-lg p-4 border border-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-5 h-5 text-[#66FCF1]" />
      <span className="text-[#C5C6C7] text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
    <div
      className={`text-3xl font-bold text-white ${
        isLoading ? "opacity-50" : "opacity-100"
      }`}
    >
      {isLoading ? "---" : value}
      <span className="text-lg text-[#66FCF1] ml-1">{unit}</span>
    </div>
  </div>
);

const CountryPanel = <T extends string>({
  country,
  flag,
  locations,
  selected,
  onSelect,
  data,
}: CountryPanelProps<T>) => (
  <div className="flex-1 px-6 py-8">
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="text-4xl">{flag}</span>
      <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
        {country}
      </h2>
    </div>

    <div className="mb-8 max-w-md mx-auto">
      <label className="block text-[#C5C6C7] text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#66FCF1]" />
        Select Location
      </label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value as T)}
        className="w-full bg-[#1F2833] text-white border border-[#45A29E]/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#66FCF1]"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>

    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      <MetricCard icon={Wind} label="PM 2.5" value={data.pm25} unit="µg/m³" isLoading={false} />
      <MetricCard icon={Wind} label="PM 10" value={data.pm10} unit="µg/m³" isLoading={false} />
      <MetricCard icon={Droplets} label="Humidity" value={data.humidity} unit="%" isLoading={false} />
      <MetricCard icon={Thermometer} label="Temperature" value={data.temp} unit="°C" isLoading={false} />
    </div>
  </div>
);

/* =======================
   PAGE
======================= */

export default function Page() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [selectedIndia, setSelectedIndia] =
    useState<IndiaLocation>("Gujarat");
  const [selectedFrance, setSelectedFrance] =
    useState<FranceLocation>("Paris");

  const [indiaData, setIndiaData] = useState<EnvironmentalMetrics>(
    mockEnvironmentalData.india.Gujarat
  );
  const [franceData, setFranceData] = useState<EnvironmentalMetrics>(
    mockEnvironmentalData.france.Paris
  );

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIndiaData(mockEnvironmentalData.india[selectedIndia]);
  }, [selectedIndia]);

  useEffect(() => {
    setFranceData(mockEnvironmentalData.france[selectedFrance]);
  }, [selectedFrance]);

  const indiaLocations = Object.keys(
    mockEnvironmentalData.india
  ) as IndiaLocation[];

  const franceLocations = Object.keys(
    mockEnvironmentalData.france
  ) as FranceLocation[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white uppercase tracking-widest">
          Environmental Monitor
        </h1>
        <div className="text-[#C5C6C7] mt-2 flex justify-center gap-2">
          <Cloud className="w-4 h-4 text-[#66FCF1]" />
          {currentTime.toLocaleString()}
        </div>
      </header>

      <div className="bg-[#1F2833]/60 rounded-2xl border border-[#45A29E]/20 overflow-hidden">
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#45A29E]/20">
          <CountryPanel
            country="INDIA"
            flag="🇮🇳"
            locations={indiaLocations}
            selected={selectedIndia}
            onSelect={setSelectedIndia}
            data={indiaData}
          />

          <CountryPanel
            country="FRANCE"
            flag="🇫🇷"
            locations={franceLocations}
            selected={selectedFrance}
            onSelect={setSelectedFrance}
            data={franceData}
          />
        </div>
      </div>
    </div>
  );
}
