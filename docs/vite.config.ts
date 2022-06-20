// eslint-disable-next-line
import { defineConfig } from 'vite'
// eslint-disable-next-line
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      plugins: [react()],
      base: '/react-resizable-collapsible-grid/',
      server: { port: 8899, host: true },
    }
  }
  return {
    plugins: [react()],
    server: { port: 8899, host: true },
  }
})
