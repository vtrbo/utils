import antfu, { ignores } from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
    ignores: ['~'],
    ...ignores(),
    rules: {
      'no-console': 'off',
      'no-new-func': 'off',
      'prefer-regex-literals': 'off',
      'vue/no-unused-refs': 'off',
      'vue/component-name-in-template-casing': 'off',
    },
  },
  {
    files: ['**/env.d.ts'],
    rules: {
      'ts/ban-types': 'off',
    },
  },
)
