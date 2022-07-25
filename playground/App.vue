<template>
  <div class="box">
    Victor Bo's Common Tools.
  </div>
</template>

<script lang="ts" setup>
import utils, { string } from '@vtrbo/utils'
import { first } from '@vtrbo/utils/string'
console.log('utils', utils)
console.log('string', string)
console.log('first', first)
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
