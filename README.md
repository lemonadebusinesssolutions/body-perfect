# MounjaroMedLink Client

This is the client application for MounjaroMedLink, built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or Yarn

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a Git repository
2. Sign in to [Vercel](https://vercel.com/)
3. Click "Add New..." > "Project"
4. Import your Git repository
5. Under "Build and Output Settings":
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=your_api_url_here
```

## Project Structure

- `/public` - Static files
- `/src` - Source code
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions and libraries
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point

## License

MIT
