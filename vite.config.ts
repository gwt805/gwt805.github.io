import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntdvNextResolver()],
    }),
    webUpdateNotice({
      versionType: "build_timestamp",
      logVersion: true,
      locale: "zh_CN",
      notificationProps: {
        title: '📢 系统更新',
        description: '系统更新啦, 请刷新页面',
        buttonText: '刷新',
        dismissButtonText: '忽略'
      },
    })
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname,'src/'),
      'components': resolve(__dirname,'src/components/'),
      'utils': resolve(__dirname,'src/utils/'),
      'api': resolve(__dirname,'src/api/'),
    }
  },
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5173,
    open: true,
    host: '0.0.0.0'
  }
})
