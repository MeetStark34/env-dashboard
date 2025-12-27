"use client";

import React, { useState, useEffect } from 'react';
import { Cloud, Droplets, Thermometer, Wind, MapPin } from 'lucide-react';

// Mock data for demonstration - replace with actual API calls
const mockEnvironmentalData = {
  india: {
    Gujarat: { pm25: 78, pm10: 125, humidity: 45, temp: 32 },
    Rajasthan: { pm25: 92, pm10: 145, humidity: 38, temp: 35 },
    Maharashtra: { pm25: 71, pm10: 118, humidity: 62, temp: 29 },
    Delhi: { pm25: 156, pm10: 201, humidity: 55, temp: 28 },
    Karnataka: { pm25: 65, pm10: 98, humidity: 58, temp: 27 },
    'Tamil Nadu': { pm25: 59, pm10: 89, humidity: 68, temp: 30 },
    'Uttar Pradesh': { pm25: 134, pm10: 178, humidity: 52, temp: 30 },
    Punjab: { pm25: 98, pm10: 142, humidity: 48, temp: 31 },
    'West Bengal': { pm25: 88, pm10: 132, humidity: 72, temp: 29 }
  },
  france: {
    Paris: { pm25: 18, pm10: 28, humidity: 75, temp: 8 },
    Lyon: { pm25: 22, pm10: 32, humidity: 78, temp: 7 },
    Marseille: { pm25: 25, pm10: 35, humidity: 68, temp: 12 },
    Toulouse: { pm25: 19, pm10: 27, humidity: 72, temp: 9 },
    Bordeaux: { pm25: 21, pm10: 30, humidity: 80, temp: 10 },
    Lille: { pm25: 24, pm10: 34, humidity: 82, temp: 6 },
    Nice: { pm25: 20, pm10: 29, humidity: 65, temp: 13 },
    Nantes: { pm25: 17, pm10: 25, humidity: 77, temp: 9 }
  }
};

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedIndia, setSelectedIndia] = useState('Gujarat');
  const [selectedFrance, setSelectedFrance] = useState('Paris');
  const [indiaData, setIndiaData] = useState(mockEnvironmentalData.india.Gujarat);
  const [franceData, setFranceData] = useState(mockEnvironmentalData.france.Paris);
  const [isLoading, setIsLoading] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Update data when location changes
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIndiaData(mockEnvironmentalData.india[selectedIndia]);
      setIsLoading(false);
    }, 300);
  }, [selectedIndia]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setFranceData(mockEnvironmentalData.france[selectedFrance]);
      setIsLoading(false);
    }, 300);
  }, [selectedFrance]);

  const indiaLocations = [
    'Gujarat', 'Rajasthan', 'Maharashtra', 'Delhi', 'Karnataka',
    'Tamil Nadu', 'Uttar Pradesh', 'Punjab', 'West Bengal'
  ];

  const franceLocations = [
    'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux',
    'Lille', 'Nice', 'Nantes'
  ];

  const MetricCard = ({ icon: Icon, label, value, unit, isLoading }) => (
    <div className="bg-[#1F2833] rounded-lg p-4 border border-[#45A29E]/20 hover:border-[#66FCF1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#66FCF1]/10">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-[#66FCF1]" />
        <span className="text-[#C5C6C7] text-sm uppercase tracking-wider">{label}</span>
      </div>
      <div className={`text-3xl font-bold text-white transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        {isLoading ? '---' : value}
        <span className="text-lg text-[#66FCF1] ml-1">{unit}</span>
      </div>
    </div>
  );

  const CountryPanel = ({ country, locations, selected, onSelect, data, flag }) => (
    <div className="flex-1 px-6 py-8">
      {/* Country Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-4xl">{flag}</span>
        <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
          {country}
        </h2>
      </div>

      {/* Location Dropdown */}
      <div className="mb-8 max-w-md mx-auto">
        <label className="block text-[#C5C6C7] text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#66FCF1]" />
          Select Location
        </label>
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full bg-[#1F2833] text-white border border-[#45A29E]/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:border-transparent transition-all duration-300 cursor-pointer hover:border-[#66FCF1]/50"
        >
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Map Visualization */}
      <div className="mb-8 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-[#1F2833] border-2 border-[#45A29E]/30 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center z-10">
            <MapPin className="w-16 h-16 text-[#66FCF1] mx-auto mb-2 animate-pulse" />
            <span className="text-[#C5C6C7] text-sm uppercase tracking-wider">{selected}</span>
          </div>
        </div>
      </div>

      {/* Data Cards Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <MetricCard
          icon={Wind}
          label="PM 2.5"
          value={data.pm25}
          unit="µg/m³"
          isLoading={isLoading}
        />
        <MetricCard
          icon={Wind}
          label="PM 10"
          value={data.pm10}
          unit="µg/m³"
          isLoading={isLoading}
        />
        <MetricCard
          icon={Droplets}
          label="Humidity"
          value={data.humidity}
          unit="%"
          isLoading={isLoading}
        />
        <MetricCard
          icon={Thermometer}
          label="Temperature"
          value={data.temp}
          unit="°C"
          isLoading={isLoading}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white mb-3">
            Environmental Monitor
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent mb-4"></div>
          <div className="text-[#C5C6C7] text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Cloud className="w-4 h-4 text-[#66FCF1]" />
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            {' • '}
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit'
            })}
          </div>
        </header>

        {/* Main Dashboard */}
        <div className="bg-[#1F2833]/50 backdrop-blur-sm rounded-2xl border border-[#45A29E]/20 shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#45A29E]/20">
            {/* India Panel */}
            <CountryPanel
              country="INDIA"
              flag="🇮🇳"
              locations={indiaLocations}
              selected={selectedIndia}
              onSelect={setSelectedIndia}
              data={indiaData}
            />

            {/* France Panel */}
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

        {/* Footer */}
        <footer className="text-center mt-8 text-[#C5C6C7] text-sm">
          <p className="opacity-60">Real-time environmental monitoring dashboard</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;