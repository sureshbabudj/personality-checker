import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }) => {
  return {
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        supportTs: false,
        watchFiles: true,
        localEnabled: command === 'serve',
      })
    ]
  }
}
