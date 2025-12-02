import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const pluginReact = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [pluginReact()],
    server: { port: 5173 },
    build: {
      minify: 'terser',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    }
  }
})
