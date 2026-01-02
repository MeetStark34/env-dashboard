import { ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface Location {
  value: string;
  label: string;
}

interface LocationDropdownProps {
  locations: Location[];
  selected: string;
  onSelect: (value: string) => void;
}

export function LocationDropdown({ locations, selected, onSelect }: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLocation = locations.find(loc => loc.value === selected);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1F2833]/60 border border-[#45A29E]/30 rounded-lg px-4 py-3 flex items-center justify-between hover:border-[#66FCF1]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]/50 group"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#66FCF1]" />
          <span className="text-[#C5C6C7] tracking-wide">{selectedLocation?.label}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-[#45A29E]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-[#1F2833] border border-[#45A29E]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#66FCF1]/10 z-20 max-h-64 overflow-y-auto"
            >
              {locations.map((location, index) => (
                <motion.button
                  key={location.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  onClick={() => {
                    onSelect(location.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left transition-all duration-200 ${
                    selected === location.value
                      ? 'bg-[#66FCF1]/20 text-[#66FCF1]'
                      : 'text-[#C5C6C7] hover:bg-[#45A29E]/10 hover:text-[#66FCF1]'
                  }`}
                >
                  <span className="tracking-wide">{location.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
