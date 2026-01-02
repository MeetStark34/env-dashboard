import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { CountryPanel } from './components/CountryPanel';
import { indiaLocations, franceLocations, getCurrentDate } from './utils/mockData';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const formattedDate = getCurrentDate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#66FCF1] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#45A29E] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(#66FCF1 1px, transparent 1px),
            linear-gradient(90deg, #66FCF1 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="32" height="32" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                <path
                  d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 26 L10 32 L13 22 L5 15 L15 15 Z"
                  fill="none"
                  stroke="#66FCF1"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#66FCF1] to-[#45A29E] bg-clip-text text-transparent">
              Vercel
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-[#C5C6C7] text-sm sm:text-base"
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#66FCF1]" />
            <time className="tracking-wide">
              {formattedDate} - {formattedTime}
            </time>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 sm:mt-4 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent rounded-full shadow-lg shadow-[#66FCF1]/50"
          />
        </motion.header>

        {/* Split-Screen Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#1F2833]/30 backdrop-blur-xl rounded-2xl border border-[#45A29E]/30 overflow-hidden shadow-2xl shadow-[#66FCF1]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#45A29E]/30 relative">
            {/* India Panel */}
            <div className="relative">
              <CountryPanel
                country="india"
                countryName="INDIA"
                flag="🇮🇳"
                locations={indiaLocations}
                defaultLocation="gujarat"
              />
            </div>

            {/* France Panel */}
            <div className="relative">
              <CountryPanel
                country="france"
                countryName="FRANCE"
                flag="🇫🇷"
                locations={franceLocations}
                defaultLocation="paris"
              />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 text-[#C5C6C7]/60 text-sm tracking-wide"
        >
          <p>Real-time Environmental Monitoring Dashboard</p>
          <p className="mt-1 text-xs">Powered by Vercel · Built with Next.js</p>
        </motion.footer>
      </div>
    </div>
  );
}