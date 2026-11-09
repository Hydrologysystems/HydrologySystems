import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          drilling: path.resolve(__dirname, 'drilling/index.html'),
          foodBeverage: path.resolve(__dirname, 'food-beverage/index.html'),
          agriculture: path.resolve(__dirname, 'agriculture/index.html'),
          refineries: path.resolve(__dirname, 'refineries/index.html'),
          coolingTowers: path.resolve(__dirname, 'cooling-towers/index.html'),
          wastewater: path.resolve(__dirname, 'wastewater/index.html'),
          generalIndustrial: path.resolve(__dirname, 'general-industrial/index.html'),
          capitalAnalysis: path.resolve(__dirname, 'capital-analysis/index.html'),
          clearance: path.resolve(__dirname, 'clearance/index.html'),
        },
      },
    },
  };
});
