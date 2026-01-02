<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# env-dashboard
=======
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
>>>>>>> dbcac2f (Initial commit)
