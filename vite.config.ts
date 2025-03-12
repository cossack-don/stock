import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    VitePWA({
      registerType: "autoUpdate", // Автоматическое обновление Service Worker
      manifest: {
        name: "My Vue PWA",
        short_name: "VuePWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {

        enabled: true
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"], // Кэшируемые файлы
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/iss\.moex\.com\/.*/, // Кэширование API
            handler: "CacheFirst",
            options: {
              cacheName: "moex-api-cache", // Имя кэша
              expiration: {
                maxEntries: 10, // Максимальное количество записей в кэше
                maxAgeSeconds: 60 * 60 * 24, // Время жизни кэша (1 день)
              },
              cacheableResponse: {
                statuses: [200], // Кэшировать только успешные ответы
              },
            },

          },
        ],
      },
    }),
  ],
})
