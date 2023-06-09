import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://116.123.68.210:8080',
        target: 'http://freeway.ap-northeast-2.elasticbeanstalk.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
