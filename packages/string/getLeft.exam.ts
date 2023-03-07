import { getLeft } from './getLeft'

const sourceStr: string = 'hello @vtrbo/utils, 你是最棒的!'
const targetStr: string = ', 你'

console.log(getLeft(sourceStr, targetStr))
