import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
  },
});
