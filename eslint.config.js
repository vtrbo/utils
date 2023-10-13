import antfu, { ignores } from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['~'],
    ...ignores(),
    rules: {
      'no-console': 'off',
    },
  },
)
