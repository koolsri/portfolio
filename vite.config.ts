import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // Use relative base path to ensure assets load correctly on both local dev and GitHub Pages
    // regardless of the repository name or path.
    base: './', 
    define: {
      // This exposes the API_KEY from your .env file to the client-side code
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})