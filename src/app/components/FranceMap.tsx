import { motion } from 'motion/react';

interface FranceMapProps {
  selectedCity: string;
}

export function FranceMap({ selectedCity }: FranceMapProps) {
  // Simplified France map with city/region markers
  const cities = {
    paris: { cx: 200, cy: 120, r: 8 },
    lyon: { cx: 220, cy: 200, r: 8 },
    marseille: { cx: 230, cy: 280, r: 8 },
    toulouse: { cx: 150, cy: 270, r: 8 },
    bordeaux: { cx: 120, cy: 220, r: 8 },
    lille: { cx: 200, cy: 70, r: 8 },
    nice: { cx: 260, cy: 290, r: 8 },
    nantes: { cx: 100, cy: 180, r: 8 },
  };

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(102, 252, 241, 0.2))' }}
      >
        {/* Base France outline */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
          d="M 180 50 L 220 55 L 250 70 L 270 100 L 280 150 L 290 200 L 280 250 L 260 290 L 230 310 L 190 300 L 150 285 L 120 260 L 90 230 L 80 190 L 85 150 L 100 120 L 120 90 L 150 70 Z"
          fill="none"
          stroke="#45A29E"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Filled map shape */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          d="M 180 50 L 220 55 L 250 70 L 270 100 L 280 150 L 290 200 L 280 250 L 260 290 L 230 310 L 190 300 L 150 285 L 120 260 L 90 230 L 80 190 L 85 150 L 100 120 L 120 90 L 150 70 Z"
          fill="#1F2833"
          stroke="#45A29E"
          strokeWidth="1.5"
        />

        {/* City markers */}
        {Object.entries(cities).map(([cityName, { cx, cy, r }]) => (
          <g key={cityName}>
            {/* Outer glow ring */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={selectedCity === cityName ? r * 3 : r * 1.5}
              fill="none"
              stroke="#66FCF1"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: selectedCity === cityName ? [0.8, 0] : 0.3,
                scale: selectedCity === cityName ? [1, 1.5] : 1,
              }}
              transition={{
                duration: 1.5,
                repeat: selectedCity === cityName ? Infinity : 0,
              }}
            />
            
            {/* City marker */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={r}
              fill={selectedCity === cityName ? '#66FCF1' : '#45A29E'}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: selectedCity === cityName ? 1 : 0.6,
                scale: selectedCity === cityName ? 1.3 : 1,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="cursor-pointer"
              style={{
                filter: selectedCity === cityName
                  ? 'drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))'
                  : 'none',
              }}
            />

            {/* Inner highlight */}
            {selectedCity === cityName && (
              <motion.circle
                cx={cx}
                cy={cy}
                r={r / 2}
                fill="#ffffff"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.8, 0.3, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </g>
        ))}

        {/* Connection lines for selected city */}
        {selectedCity && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(cities).map(([cityName, { cx, cy }]) => {
              if (cityName === selectedCity) return null;
              const selected = cities[selectedCity as keyof typeof cities];
              return (
                <line
                  key={cityName}
                  x1={selected.cx}
                  y1={selected.cy}
                  x2={cx}
                  y2={cy}
                  stroke="#45A29E"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.2"
                />
              );
            })}
          </motion.g>
        )}
      </svg>
    </div>
  );
}
