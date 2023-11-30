import { groupBy } from '@vtrbo/utils-arr'

interface ListItem {
  name: string
  sex: string
  age: number
}

const list: ListItem[] = [
  { name: '小赵', sex: '男', age: 15 },
  { name: '小钱', sex: '女', age: 14 },
  { name: '小孙', sex: '女', age: 16 },
  { name: '小李', sex: '男', age: 15 },
]

const fn = (single: ListItem) => single.name

console.log(groupBy(list, fn))
