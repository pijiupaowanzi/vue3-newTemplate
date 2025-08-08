import { defineConfig, presetMini, presetAttributify } from 'unocss'

export default defineConfig({
	presets: [presetMini(), presetAttributify()],
	content: {
		pipeline: {
			include: [/\.(vue|html)/]
		}
	},
	shortcuts: {
		'label': 'mx-10px font-bold'
	},
	rules: [
		// 自定义规则，例如
		[/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
	]
})
