import { expect, it } from 'vitest'
import { lighten } from './lighten'

it('lighten', () => {
  expect(lighten('rgb(128, 56, 32)', 5)).toMatchInlineSnapshot('"rgb(191, 155, 143)"')
})
