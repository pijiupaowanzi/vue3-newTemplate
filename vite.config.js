import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({mode}) => {
	const env = loadEnv(mode, process.cwd())
	return defineConfig({
		plugins: [
			vue(),
			vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
			UnoCSS()
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			}
		},
		server: {
			host: true,
			port: 8080,
			open: true,
			cors: true, // 跨域设置允许
			proxy: {
				"/api": {
					target: env.VITE_BASE_API,
					changeOrigin: true, //允许跨域
          rewrite: (path) => path.replace(/^\/api/, '')
				},
			}
		},
		build: {
			outDir: "dist",
			emptyOutDir: true,
			chunkSizeWarningLimit: 2048,
			rollupOptions: {
				output: {
					// 静态资源打包做处理
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
				}
			},
		},
		esbuild: {
			pure: ["console.log"],
			drop: ["debugger"],
			// 打包移除注释
			legalComments: "none"
		},
    css: {
			preprocessorOptions: {
				scss: {
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
	})
}
