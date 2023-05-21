import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/goit-react-hw-03-image-finder/',
  plugins: [react()],
});
