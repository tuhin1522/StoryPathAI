import { defineConfig, loadEnv } from 'vite'
import { cwd } from 'node:process'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), "")

  console.log(env.VITE_DEBUG)

  return {
    plugins: [react()],
    server: {
    ...(env.VITE_DEBUG === "true" && {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
          secure: false
        }
      }
    }
    )}
  }
})