<script lang="ts" setup>
import { ensureSuffix } from '@vtrbo/utils-str'
import { nextTick, onMounted, ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { useClipboard, useLocalStorage } from '@vueuse/core'
import ts from 'typescript'
import { stringify } from './stringify'

interface IProps {
  example: string
  placeholder: string
}

const props = withDefaults(defineProps<IProps>(), {
  example: '',
  placeholder: '',
})

const extensions = ref(javascript({ jsx: true, typescript: true }))

const exampleFileModules = import.meta.glob('../../../../examples/**/*.ts', { as: 'raw' })
type TModules = Record<string, () => Promise<string>>

async function getFileContent(fileName: string, fileModules: TModules) {
  const filePath = `../../../../examples/${ensureSuffix(fileName, '.ts')}`
  const fileCode = await fileModules[filePath]()
  return (fileCode ?? '').trim()
}

const codeValue = ref<string>('')
let recordCode: string = ''

const collapsable = ref<boolean>(false)
const refMirror = ref<HTMLElement>()
let recordHeight: number = 0
const mirrorHeight = ref<string>('0px')

function computedRefHeight() {
  if (collapsable.value) {
    mirrorHeight.value = `${recordHeight}px`
    refMirror.value.$el.querySelector('.cm-editor').style.height = `${recordHeight}px`
  }
  else {
    mirrorHeight.value = '0px'
    refMirror.value.$el.querySelector('.cm-editor').style.height = '0px'
  }
}

onMounted(async () => {
  recordCode = await getFileContent(props.example, exampleFileModules)
  codeValue.value = recordCode
  await nextTick(() => {
    recordHeight = refMirror.value?.$el?.querySelector('.cm-editor')?.clientHeight
    computedRefHeight()
  })
  if (ts)
    handleRun()
})

function handleSet() {
  codeValue.value = recordCode
}

function handleToggle() {
  collapsable.value = !collapsable.value
}

watch(
  () => collapsable.value,
  () => {
    computedRefHeight()
  },
)

function noop() {
}

const runLoading = ref<boolean>(false)
const outputResult = ref<string>('运行代码后显示结果，等待运行...')

function getTransformCode(code: string) {
  return code.replace(
    /import\s+{\s+(.*?)\s+}\s+from\s+['|"](.*?)['|"]/g,
    (_, name, lib) => `const { ${name} } = (globalThis as any)['${lib}']`,
  )
}

function handleRun() {
  runLoading.value = true
  try {
    const transformCode = getTransformCode(codeValue.value)
    const transpileOutput = ts.transpileModule(
      transformCode,
      {
        compilerOptions: {
          target: ts.ScriptTarget.ES2015,
          module: ts.ModuleKind.None,
        },
      },
    )
    const compiledCode = transpileOutput.outputText
    // const returnOutput = new Function(compiledCode)()
    // if (returnOutput) {
    //   outputResult.value = returnOutput
    //   return
    // }

    const consoleCode = `const output = [];
const reConsole = console.log;
presetConsoleLog = function() {
  reConsole.apply(console, arguments);
  output.push(...arguments);
};
${compiledCode}
return output;`.replace(/console\.log\(/g, 'presetConsoleLog(').trim()
    const consoleOutput = new Function(consoleCode)()
    outputResult.value = consoleOutput.map((m: string) => stringify(m)).join('\n')
  }
  catch (err) {
    outputResult.value = '代码运行错误，请检查'
  }
  runLoading.value = false
}

const tooltip = ref<string>('复制代码')

function handleCopy() {
  if (tooltip.value === '已复制')
    return
  const { copy } = useClipboard()
  copy(codeValue.value)
  tooltip.value = '已复制'
  setTimeout(() => {
    tooltip.value = '复制代码'
  }, 1500)
}

const mode = useLocalStorage('vitepress-theme-appearance', 'auto')
</script>

<template>
  <div class="VppRunCode">
    <div class="VppOutput">
      <div class="VppOutputTitle">
        运行结果
      </div>
      <div v-if="!runLoading" class="VppOutputCard">
        {{ outputResult }}
      </div>
      <div v-else class="VppOutputLoading">
        <div />
        <div />
        <div />
      </div>
    </div>
    <div class="VppOperate">
      <div class="VppOperateLeft">
        <div class="VppOperateButton" @click="handleToggle">
          <span class="i-carbon:code" />
          <span class="VppOperateTooltip">查看源码</span>
        </div>
        <div class="VppOperateButton" @click="handleCopy">
          <span class="i-carbon:copy" />
          <span
            class="VppOperateTooltip"
            :style="{
              color: tooltip === '已复制' ? '#42b883' : '#ffffff',
              background: tooltip === '已复制' ? '#ffffff' : '#303133',
            }"
          >{{ tooltip }}</span>
        </div>
      </div>
      <div class="VppOperateCenter">
        修改代码运行
      </div>
      <div class="VppOperateRight">
        <div class="VppOperateButton" @click="runLoading ? noop() : handleRun()">
          <span class="i-carbon:play" />
          <span class="VppOperateTooltip">运行代码</span>
        </div>
        <div class="VppOperateButton" @click="handleSet">
          <span class="i-carbon:reset" />
          <span class="VppOperateTooltip">重置代码</span>
        </div>
      </div>
    </div>
    <div class="VppEditor" :class="{ '!b-color-bc dark:!b-color-dbbc': collapsable, '!bg-transparent': !collapsable }">
      <Codemirror
        ref="refMirror"
        v-model="codeValue"
        :placeholder="placeholder"
        :autofocus="false"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="[extensions, mode === 'dark' ? oneDark : null].filter(Boolean)"
        :scrollbar-style="null"
        :style="{ fontSize: '14px' }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.VppRunCode {
  // border radius
  --br: 4px;
  // output text size
  --os: 12px;
  // padding size
  --ps: 15px;
  // operate height
  --oh: 40px;
  // operate center text size
  --ocs: 12px;
  // operate button space
  --obs: 12px;

  --at-apply: 'vtr-b vtr-rd bg-white dark:(bg-dbc b-dbbc)';

  .VppOutput {
    --at-apply: 'p-$ps vtr-bb text-oc dark:text-white font-$os';

    &Title {
      --at-apply: font-size-$os vtr-bb pb-$br;
    }

    &Card {
      --at-apply: pt-$br font-size-$os;
      white-space: pre-wrap;
    }

    &Loading {
      --at-apply: block text-0 w-54px h-18px pt-$br;

      &,
      & > div {
        position: relative;
        box-sizing: border-box;
      }

      & > div {
        --at-apply: inline-block w-10px h-10px m-4px rd-100\%;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor;
        animation: loading 0.7s -0.15s infinite linear;
      }

      & > div:nth-child(2n - 1) {
        animation-delay: -0.5s;
      }
    }
  }

  .VppOperate {
    --at-apply: px-$ps h-$oh fbc;

    &Left {
      --at-apply: fsc;
    }

    &Center {
      --at-apply: 'text-occ dark:text-white font-size-$ocs cursor-pointer';
    }

    &Right {
      --at-apply: fec;
    }

    &Button {
      --at-apply: h-$oh fcc cursor-pointer select-none relative;

      &:not(:first-child) {
        --at-apply: ml-$obs;
      }

      &:hover {
        .VppOperateTooltip {
          --at-apply: visible;
        }
      }
    }

    &Tooltip {
      --at-apply: invisible absolute z-2 top-$oh color-white bg-#303133 vtr-b vtr-rd px-10px h-32px text-12px fcc line-height-1;
      white-space: nowrap;
    }
  }

  .VppEditor {
    --at-apply: bg-white vtr-bt b-color-transparent overflow-hidden;
    border-bottom-left-radius: var(--br);
    border-bottom-right-radius: var(--br);

    ::v-deep(.v-codemirror) {
      .cm-gutters {
        --at-apply: 'bg-transparent b-r-color-bc dark:b-r-color-oc';
      }

      .cm-editor {
        transition: all 0.25s;
      }

      .cm-activeLineGutter {
        --at-apply: bg-transparent;
      }

      .cm-focused {
        --at-apply: outline-none;
      }

      .cm-activeLine {
        --at-apply: bg-transparent;
      }
    }
  }
}

@keyframes loading {
  50% {
    opacity: 0.2;
    transform: scale(0.75);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
