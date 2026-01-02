// Mock data for environmental metrics

export interface LocationData {
  pm25: number;
  pm10: number;
  humidity: number;
  temperature: number;
  timezone: string;
}

export const indiaLocations = [
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'tamilnadu', label: 'Tamil Nadu' },
  { value: 'uttarpradesh', label: 'Uttar Pradesh' },
  { value: 'punjab', label: 'Punjab' },
  { value: 'westbengal', label: 'West Bengal' },
];

export const franceLocations = [
  { value: 'paris', label: 'Paris' },
  { value: 'lyon', label: 'Lyon' },
  { value: 'marseille', label: 'Marseille' },
  { value: 'toulouse', label: 'Toulouse' },
  { value: 'bordeaux', label: 'Bordeaux' },
  { value: 'lille', label: 'Lille' },
  { value: 'nice', label: 'Nice' },
  { value: 'nantes', label: 'Nantes' },
];

// Mock data for India states
const indiaMockData: Record<string, LocationData> = {
  gujarat: {
    pm25: 68,
    pm10: 97,
    humidity: 62,
    temperature: 32,
    timezone: 'Asia/Kolkata',
  },
  rajasthan: {
    pm25: 78,
    pm10: 105,
    humidity: 45,
    temperature: 38,
    timezone: 'Asia/Kolkata',
  },
  maharashtra: {
    pm25: 72,
    pm10: 98,
    humidity: 68,
    temperature: 30,
    timezone: 'Asia/Kolkata',
  },
  delhi: {
    pm25: 125,
    pm10: 158,
    humidity: 55,
    temperature: 35,
    timezone: 'Asia/Kolkata',
  },
  karnataka: {
    pm25: 58,
    pm10: 82,
    humidity: 70,
    temperature: 28,
    timezone: 'Asia/Kolkata',
  },
  tamilnadu: {
    pm25: 52,
    pm10: 75,
    humidity: 75,
    temperature: 31,
    timezone: 'Asia/Kolkata',
  },
  uttarpradesh: {
    pm25: 132,
    pm10: 165,
    humidity: 58,
    temperature: 34,
    timezone: 'Asia/Kolkata',
  },
  punjab: {
    pm25: 95,
    pm10: 118,
    humidity: 50,
    temperature: 36,
    timezone: 'Asia/Kolkata',
  },
  westbengal: {
    pm25: 88,
    pm10: 112,
    humidity: 72,
    temperature: 33,
    timezone: 'Asia/Kolkata',
  },
};

// Mock data for France cities
const franceMockData: Record<string, LocationData> = {
  paris: {
    pm25: 21,
    pm10: 30,
    humidity: 55,
    temperature: 15,
    timezone: 'Europe/Paris',
  },
  lyon: {
    pm25: 18,
    pm10: 28,
    humidity: 60,
    temperature: 16,
    timezone: 'Europe/Paris',
  },
  marseille: {
    pm25: 25,
    pm10: 35,
    humidity: 58,
    temperature: 19,
    timezone: 'Europe/Paris',
  },
  toulouse: {
    pm25: 19,
    pm10: 27,
    humidity: 62,
    temperature: 17,
    timezone: 'Europe/Paris',
  },
  bordeaux: {
    pm25: 16,
    pm10: 24,
    humidity: 65,
    temperature: 16,
    timezone: 'Europe/Paris',
  },
  lille: {
    pm25: 22,
    pm10: 31,
    humidity: 68,
    temperature: 13,
    timezone: 'Europe/Paris',
  },
  nice: {
    pm25: 20,
    pm10: 29,
    humidity: 56,
    temperature: 18,
    timezone: 'Europe/Paris',
  },
  nantes: {
    pm25: 17,
    pm10: 25,
    humidity: 70,
    temperature: 15,
    timezone: 'Europe/Paris',
  },
};

export function getLocationData(country: 'india' | 'france', location: string): LocationData {
  const data = country === 'india' ? indiaMockData[location] : franceMockData[location];
  
  // Add small random variations to simulate real-time updates
  if (data) {
    return {
      pm25: data.pm25 + Math.floor(Math.random() * 5 - 2),
      pm10: data.pm10 + Math.floor(Math.random() * 5 - 2),
      humidity: data.humidity + Math.floor(Math.random() * 3 - 1),
      temperature: data.temperature + Math.floor(Math.random() * 2 - 1),
      timezone: data.timezone,
    };
  }
  
  return data;
}

export function getCurrentTime(timezone: string): string {
  return new Date().toLocaleString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function getCurrentDate(): string {
  return new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}
