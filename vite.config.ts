import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

const externalDeps = [
  '@base-ui/react',
  '@base-ui/react/accordion',
  '@base-ui/react/alert-dialog',
  '@base-ui/react/avatar',
  '@base-ui/react/button',
  '@base-ui/react/checkbox',
  '@base-ui/react/collapsible',
  '@base-ui/react/context-menu',
  '@base-ui/react/dialog',
  '@base-ui/react/menubar',
  '@base-ui/react/menu',
  '@base-ui/react/navigation-menu',
  '@base-ui/react/popover',
  '@base-ui/react/preview-card',
  '@base-ui/react/progress',
  '@base-ui/react/radio',
  '@base-ui/react/radio-group',
  '@base-ui/react/scroll-area',
  '@base-ui/react/select',
  '@base-ui/react/separator',
  '@base-ui/react/slider',
  '@base-ui/react/switch',
  '@base-ui/react/tabs',
  '@base-ui/react/toggle',
  '@base-ui/react/toggle-group',
  '@base-ui/react/tooltip',
  '@base-ui/react/merge-props',
  '@base-ui/react/use-render',
  '@tanstack/react-table',
  'cmdk',
  'clsx',
  'embla-carousel-react',
  'input-otp',
  'lucide-react',
  'react',
  'react-day-picker',
  'react-dom',
  'react-hook-form',
  'react-resizable-panels',
  'recharts',
  'sonner',
  'vaul',
]

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDir: 'dist/types',
      entryRoot: 'src',
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Signal',
      formats: ['es'],
      fileName: () => 'signal.esm.js',
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: (id) => externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
