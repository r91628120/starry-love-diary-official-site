import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: '/starry-love-diary-official-site/',
  plugins: [react()],
  build: { rollupOptions: { input: { main: fileURLToPath(new URL('./index.html', import.meta.url)), privacy: fileURLToPath(new URL('./privacy.html', import.meta.url)), terms: fileURLToPath(new URL('./terms.html', import.meta.url)) } } },
  test: { environment: 'jsdom', setupFiles: ['./src/test/setup.ts'] },
})
