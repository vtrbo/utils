<template>
  <div class="box">
    Victor Bo's Common Tools.
  </div>
</template>

<script lang="ts" setup>
import utils, { string } from '@vtrbo/utils'
import { firstUpperCase, getLeft } from '@vtrbo/utils/string'
import { merge } from '@vtrbo/utils/object'
import { toArray } from '@vtrbo/utils/array'
console.log('utils', utils)
console.log('string', string)
console.log('firstUpperCase', firstUpperCase)
console.log('getLeft', getLeft)
console.log('merge', merge)
console.log('toArray', toArray)
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 300;
}
</style>
