# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

## 📦 Deploy to Vercel

### Option A: One Command
```bash
npm run deploy
```

### Option B: From Git
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

## 🎮 Using the Dashboard

### Select Locations
- Click dropdown in each country panel
- Choose from 9 Indian states or 8 French cities
- Watch the map highlight your selection

### View Data
- **PM 2.5** & **PM 10**: Air quality metrics
- **Humidity**: Environmental moisture
- **Temperature**: Current temperature

### Interactive Features
- Hover over cards for glow effects
- Maps animate on location change
- Real-time clock updates every minute

## 🎨 Customization

### Change Colors
Edit `/src/styles/theme.css`:
```css
--primary: #66FCF1;     /* Main teal */
--secondary: #45A29E;   /* Dark teal */
--background: #0B0C10;  /* Dark bg */
```

### Add Locations
Edit `/src/app/utils/mockData.ts`:
```typescript
export const indiaLocations = [
  { value: 'newstate', label: 'New State' },
  // ...
];
```

### Integrate Real APIs
Replace mock data in `mockData.ts` with API calls:
```typescript
export async function getLocationData(country, location) {
  const response = await fetch(`/api/data/${country}/${location}`);
  return response.json();
}
```

## 📱 Responsive Design

- **Desktop**: Full split-screen layout
- **Tablet**: Adjusted spacing
- **Mobile**: Stacked vertically

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 5173
npm run dev
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Map not showing
- Check browser console for errors
- Ensure SVG paths are valid
- Verify component imports

## 📚 Learn More

- [Project Summary](./PROJECT_SUMMARY.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Full README](./README.md)

## 💡 Tips

1. **Performance**: Maps use SVG for smooth animations
2. **Data**: Currently uses mock data with random variations
3. **Animations**: Powered by Motion (Framer Motion)
4. **Styling**: Tailwind CSS v4 with custom theme

## 🤝 Need Help?

Check the documentation:
- Vite: https://vitejs.dev
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vercel: https://vercel.com/docs

---

**Happy coding! 🎉**
