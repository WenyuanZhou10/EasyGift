import { fileURLToPath, URL } from 'node:url'
import alias from "@rollup/plugin-alias";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    alias()
  ],
  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url))
      "@": path.resolve(__dirname, "./src"),
    }
  }
  ,
  server:{
    proxy:{
      '/api':{//获取路径中包含了/api的请求
          //target:'http://localhost:8080',//后台服务所在的源
          target:'http://182.92.97.61:8080',
          changeOrigin:true,//修改源
          rewrite:(path)=>path.replace(/^\/api/,'')///api替换为''
      }
    }
  }

})
