import { expect, it } from 'vitest'
import { merge } from './merge'

const sourceObject = {
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#333333',
    },
    data: [1, '2', { a: 3 }],
    func: () => {},
    date: new Date('2022-10-01'),
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#4091f7',
        },
      },
      data: [1, '2', { a: 3 }],
      func: () => {},
      date: new Date('2022-10-01'),
    },
  ],
}

const targetObject = {
  type: 'line',
  yAxis: {
    type: 'line',
    axisLabel: {
      type: 'line',
    },
    data: ['1', 2, 3],
  },
  series: [
    {
      type: 'line',
    },
  ],
}

it('clone', () => {
  expect(merge(sourceObject, targetObject)).toMatchInlineSnapshot(`
    {
      "series": [
        {
          "type": "line",
        },
      ],
      "type": "line",
      "yAxis": {
        "axisLabel": {
          "color": "#333333",
          "type": "line",
        },
        "data": [
          "1",
          2,
          3,
        ],
        "date": 2022-10-01T00:00:00.000Z,
        "func": [Function],
        "type": "line",
      },
    }
  `)
})
