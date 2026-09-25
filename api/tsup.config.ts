import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/infra/http/server.ts'],
  format: 'esm',
  sourcemap: false,
  minify: true,
  bundle: true,
})
