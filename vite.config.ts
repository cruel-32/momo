import react from '@vitejs/plugin-react-swc';
import * as Path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: Path.resolve(__dirname, 'src'),
      },
    ],
  },
});
