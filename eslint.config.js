import eslintConfig from '@antfu/eslint-config'

export default eslintConfig(
  {
    typescript: true,
    vue: true,
    ignores: ['~'],
  },
  {
    rules: {
      'no-new-func': 'off',
      'no-console': 'off',
      'prefer-regex-literals': 'off',
    },
  },
)
