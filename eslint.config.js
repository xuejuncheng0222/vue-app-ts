import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vueEslintParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    // files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ], // 未使用变量报错，但是忽略以 _ 开头的参数
      'no-undef': 'warn',
      // semi: 'error',
      'prefer-const': 'warn',
      'prettier/prettier': [
        'error',
        {
          endofLine: 'auto',
        },
      ],
      'vue/multi-word-component-names': ['warn', { ignores: ['Avatar', 'index', 'Login', '404'] }],
      'no-debugger': 'warn',
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser', // TypeScript 的解析器
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ref: 'readonly',
        reactive: 'readonly',
        onMounted: 'readonly',
        computed: 'readonly',
        useRouter: 'readonly',
        unref: 'readonly',
        useRoute: 'readonly',
        Ref: 'readonly',
      },
    },
  },
]
