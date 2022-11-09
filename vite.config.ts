/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-10-31 21:20:02
 * @LastEditors: 滇西
 * @LastEditTime: 2022-10-31 22:03:46
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  },
})
