import { defineConfig } from 'vite';
export default defineConfig({base:'/fossil-noir/3d/',build:{outDir:'dist',emptyOutDir:true,rollupOptions:{input:'game.html'}},server:{host:'0.0.0.0'}});
