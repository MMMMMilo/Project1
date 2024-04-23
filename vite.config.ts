import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //     },
  //     scss: {
  //       additionalData: 
  //       `@import "./src/assets/scss/main.scss";`,
  //     },
  //   },
  // },
  //   server:{
  //   host:'100.75.8.167'
  // }
})
