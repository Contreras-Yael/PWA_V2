import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Esto genera el manifest.json que te piden investigar
      manifest: {
        name: 'PWA UTT Ionos',
        short_name: 'UTTPWA',
        description: 'Mi primera PWA para la clase de Desarrollo Web',
        theme_color: '#3b82f6', // El color que investigaste
        background_color: '#ffffff',
        display: 'standalone', // Para que parezca app nativa
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})