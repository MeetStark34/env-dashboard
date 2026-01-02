import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DataCard, iconMap } from './DataCard';
import { LocationDropdown } from './LocationDropdown';
import { IndiaMap } from './IndiaMap';
import { FranceMap } from './FranceMap';
import { getLocationData, LocationData } from '../utils/mockData';

interface Location {
  value: string;
  label: string;
}

interface CountryPanelProps {
  country: 'india' | 'france';
  countryName: string;
  flag: string;
  locations: Location[];
  defaultLocation: string;
}

export function CountryPanel({
  country,
  countryName,
  flag,
  locations,
  defaultLocation,
}: CountryPanelProps) {
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [data, setData] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      const locationData = getLocationData(country, selectedLocation);
      setData(locationData);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedLocation, country]);

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
      {/* Country Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <span className="text-2xl sm:text-4xl">{flag}</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-[#66FCF1]">
            {countryName}
          </h2>
          <span className="text-2xl sm:text-4xl">{flag}</span>
        </div>
        <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent rounded-full" />
      </motion.div>

      {/* Location Dropdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LocationDropdown
          locations={locations}
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
      </motion.div>

      {/* Map Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#0B0C10]/50 rounded-xl border border-[#45A29E]/20 p-4 backdrop-blur-sm"
      >
        {country === 'india' ? (
          <IndiaMap selectedState={selectedLocation} />
        ) : (
          <FranceMap selectedCity={selectedLocation} />
        )}
      </motion.div>

      {/* Data Cards Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#1F2833]/50 backdrop-blur-sm rounded-xl p-6 border border-[#45A29E]/20 animate-pulse"
            >
              <div className="h-20" />
            </div>
          ))}
        </div>
      ) : data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DataCard
            title="PM 2.5"
            value={data.pm25}
            unit="µg/m³"
            icon={iconMap.pm25}
            delay={0.3}
          />
          <DataCard
            title="PM 10"
            value={data.pm10}
            unit="µg/m³"
            icon={iconMap.pm10}
            delay={0.35}
          />
          <DataCard
            title="Humidity"
            value={data.humidity}
            unit="%"
            icon={iconMap.humidity}
            delay={0.4}
          />
          <DataCard
            title="Temperature"
            value={data.temperature}
            unit="°C"
            icon={iconMap.temperature}
            delay={0.45}
          />
        </div>
      ) : null}
    </div>
  );
}