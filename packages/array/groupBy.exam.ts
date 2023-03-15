import { groupBy } from './groupBy'

interface Item {
  type: string
  name: string
}

const list: Item[] = [
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'vegetable', name: 'spinach' },
  { type: 'meat', name: 'beef' },
]

const groupByCondition = (item: Item) => item.type

console.log(groupBy(list, groupByCondition))
