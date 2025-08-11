import js from '@eslint/js';
import vuePlugin from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  js.configs.recommended,
	...vuePlugin.configs['flat/recommended'],

	{
    ignores: [
      '**/node_modules/**',
      'dist/**',
      'public/**',
			'src/assets/**',
    ],
  },
	{
		rules: {
			'no-console': 'warn',
			"no-debugger": "error",
			'eqeqeq':'warn',
		}
	},
	// 配置全局变量, 告诉 eslint 去掉对应全局变量得报错
  {
    languageOptions: {
			globals: {
				// 浏览器默认变量 比如 console
        ...globals.browser,
				// node 默认变量 比如 process
				...globals.node
      },
    },
  },
	// vue 规则
	{
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        // 允许在 vue 文件中使用 jsx
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'never',
						component: 'always'
					},
					svg: 'always',
					math: 'always'
				}
			],
			'vue/html-indent': ['warn', 'tab'],
			'vue/multi-word-component-names': 'off',
			'vue/no-unused-vars': 'warn',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/max-attributes-per-line': 'off',
    },
  },
];
