import { getCenter } from './getCenter'

const sourceStr: string = 'hello @vtrbo/utils, 你是最棒的!'
const beforeStr: string = 'hello '
const afterStr: string = ', '

console.log(getCenter(sourceStr, beforeStr, afterStr))
