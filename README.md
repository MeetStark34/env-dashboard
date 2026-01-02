# Environmental Monitoring Dashboard

A modern, futuristic web dashboard that visually compares real-time environmental data for India and France in a split-screen layout.

## 🚀 Features

- **Split-Screen Layout**: 50/50 comparison between India and France
- **Interactive Maps**: Dynamic SVG maps that highlight selected regions
- **Location Selection**: Dropdown menus for multiple states/cities in each country
- **Environmental Metrics**: Real-time data for PM2.5, PM10, Humidity, and Temperature
- **Dark Teal Design**: Futuristic color palette inspired by modern dashboard aesthetics
- **Smooth Animations**: Motion-powered transitions and interactions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Import project in Vercel Dashboard
3. Deploy automatically

### Option 3: Connect Git Repository

The project is configured to work with Vercel's automatic deployments from Git.

## 🎨 Color Palette

- **Background Black**: `#0B0C10`
- **Dark Blue**: `#1F2833`
- **Light Gray**: `#C5C6C7`
- **Primary Teal**: `#66FCF1`
- **Secondary Teal**: `#45A29E`

## 📊 Available Locations

### India
- Gujarat
- Rajasthan
- Maharashtra
- Delhi
- Karnataka
- Tamil Nadu
- Uttar Pradesh
- Punjab
- West Bengal

### France
- Paris
- Lyon
- Marseille
- Toulouse
- Bordeaux
- Lille
- Nice
- Nantes

## 🔌 API Integration

The dashboard currently uses mock data. To integrate real APIs:

1. Add environment variables to `.env`:
   ```
   VITE_AIR_QUALITY_API_KEY=your_key
   VITE_WEATHER_API_KEY=your_key
   ```

2. Update `src/app/utils/mockData.ts` to fetch from real APIs

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a pull request.
