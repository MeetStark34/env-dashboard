import { motion } from 'motion/react';
import { Wind, Droplet, Thermometer } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface DataCardProps {
  title: string;
  value: number;
  unit: string;
  icon: LucideIcon;
  delay?: number;
}

export function DataCard({ title, value, unit, icon: Icon, delay = 0 }: DataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#1F2833]/50 backdrop-blur-sm rounded-xl p-6 border border-[#45A29E]/20 hover:border-[#66FCF1]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#66FCF1]/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#66FCF1]/10">
            <Icon className="w-5 h-5 text-[#66FCF1]" />
          </div>
          <span className="text-[#C5C6C7] tracking-wider uppercase text-sm">{title}</span>
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <motion.span
          key={value}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold text-[#66FCF1] tabular-nums"
        >
          {value}
        </motion.span>
        <span className="text-lg text-[#45A29E]">{unit}</span>
      </div>
    </motion.div>
  );
}

// Export icon mapping for convenience
export const iconMap = {
  pm25: Wind,
  pm10: Wind,
  humidity: Droplet,
  temperature: Thermometer,
};
