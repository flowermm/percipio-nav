import * as esbuild from 'esbuild';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';

import viteReact from '@vitejs/plugin-react';

// order matters, no touchy!
const extensions = [
  '.web.tsx',
  '.web.jsx',
  '.web.ts',
  '.web.js',
  '.tsx',
  '.ts',
  '.jsx',
  '.js',
  '.css',
  '.json',
];

const jsRollup = (matchers: RegExp[]) => ({
  name: 'js-load-as-jsx',
  load: (id: string) => {
    if (matchers.some((matcher) => matcher.test(id)) && id.endsWith('.js')) {
      const file = readFileSync(id, { encoding: 'utf-8' });
      return esbuild.transformSync(file, { loader: 'jsx', jsx: 'automatic' });
    }
  },
});

export default () => {
  return defineConfig({
    plugins: [viteReact()],
    define: {
      global: 'window',
    },
    resolve: {
      extensions,
      alias: {
        'react-native': 'react-native-web',
        'react-native-svg': 'react-native-svg-web',
      },
    },
    server: {
      port: 8080,
    },
    build: {
      rollupOptions: {
        plugins: [jsRollup([/react-native-vector-icons/])],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
        jsx: 'automatic',
        loader: {
          '.js': 'jsx',
        },
      },
    },
    esbuild: {
      pure: ['console.log', 'console.warn'],
    },
  });
};
