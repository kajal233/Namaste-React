import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Process .jsx files as JSX
    include: /src\/.*\.(js|jsx)$/, // Include both .js and .jsx files in the src directory
  },
});
