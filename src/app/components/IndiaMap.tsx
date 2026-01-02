import { motion } from 'motion/react';

interface IndiaMapProps {
  selectedState: string;
}

export function IndiaMap({ selectedState }: IndiaMapProps) {
  // Simplified India map with state paths
  const states = {
    gujarat: 'M 100 200 L 120 180 L 140 185 L 150 200 L 140 220 L 115 225 Z',
    rajasthan: 'M 120 150 L 160 140 L 180 160 L 170 185 L 140 185 L 120 170 Z',
    maharashtra: 'M 140 220 L 170 210 L 200 230 L 190 260 L 160 265 L 140 250 Z',
    delhi: 'M 160 130 L 170 125 L 175 135 L 165 140 Z',
    karnataka: 'M 160 265 L 180 270 L 190 300 L 170 310 L 150 295 Z',
    tamilnadu: 'M 180 310 L 200 305 L 210 330 L 195 345 L 175 335 Z',
    uttarpradesh: 'M 175 130 L 220 120 L 240 145 L 220 165 L 190 160 Z',
    punjab: 'M 145 90 L 170 85 L 180 100 L 165 115 L 145 110 Z',
    westbengal: 'M 250 180 L 280 175 L 290 200 L 275 220 L 255 210 Z',
  };

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(102, 252, 241, 0.2))' }}
      >
        {/* Base map outline */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
          d="M 100 80 L 150 70 L 180 85 L 200 100 L 240 95 L 270 110 L 290 150 L 295 190 L 280 230 L 250 260 L 220 290 L 200 330 L 180 350 L 150 340 L 120 310 L 100 270 L 90 230 L 85 190 L 90 150 L 95 120 Z"
          fill="none"
          stroke="#45A29E"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Individual states */}
        {Object.entries(states).map(([stateName, path]) => (
          <motion.path
            key={stateName}
            d={path}
            fill={selectedState === stateName ? '#66FCF1' : '#1F2833'}
            stroke="#45A29E"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: selectedState === stateName ? 1 : 0.4,
              scale: selectedState === stateName ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            style={{
              filter: selectedState === stateName
                ? 'drop-shadow(0 0 15px rgba(102, 252, 241, 0.6))'
                : 'none',
            }}
          />
        ))}

        {/* Highlight pulse for selected state */}
        {selectedState && (
          <motion.path
            d={states[selectedState as keyof typeof states]}
            fill="none"
            stroke="#66FCF1"
            strokeWidth="3"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </svg>
    </div>
  );
}
