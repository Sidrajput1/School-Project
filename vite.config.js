// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Optionally configure the server
    // to serve JSX files with the correct MIME type
    hmr: {
      // Optionally configure the server
      // to serve JSX files with the correct MIME type
      overlay: false
    },
    mimeTypes: {
      // Configure Vite to serve JSX files as JavaScript
      // with the correct MIME type
      'text/javascript': ['jsx']
    }
  }
});

