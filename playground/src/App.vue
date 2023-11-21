<script lang="ts" setup>
import { isColor } from '@vtrbo/utils'
import { toArray } from '@vtrbo/utils-arr'
import { isArray } from '@vtrbo/utils-is'

console.log(toArray('123'), isArray('acb'))
</script>

<template>
  <div>{{ isColor('#fff', 'HEX') }}</div>
</template>

<style scoped>
</style>
