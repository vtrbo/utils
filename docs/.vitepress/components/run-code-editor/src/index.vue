<script lang="ts" setup>
import { ensureSuffix } from '@vtrbo/utils-str'
import { nextTick, onMounted, ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { useClipboard } from '@vueuse/core'
import typescript from 'typescript'

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

function noop() {}

const runLoading = ref<boolean>(false)
const outputResult = ref<string>('')
function getTransformCode(code: string) {
  return code.replace(
    /import\s+{\s+(.*?)\s+}\s+from\s+['|"](.*?)['|"]/g,
    (_, name, lib) => `const { ${name} } = window['${lib}']`,
  )
}
function handleRun() {
  runLoading.value = true
  const transformCode = getTransformCode(codeValue.value)
  const transpileOutput = typescript.transpileModule(
    transformCode,
    {
      compilerOptions: {
        target: typescript.ScriptTarget.ES2015,
        module: typescript.ModuleKind.None,
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
return output;`.replace('console.log(', 'presetConsoleLog(').trim()
  const consoleOutput = new Function(consoleCode)()
  outputResult.value = consoleOutput
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
</script>

<template>
  <div class="VppRunCode">
    <div class="VppOutput">
      <div class="VppOutputCard">
        {{ outputResult }}
      </div>
      <div class="VppOutputLoading">
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
      <div class="VppOperateCenter" />
      <div class="VppOperateRight">
        <div class="VppOperateButton" @click="runLoading ? noop() : handleRun()">
          <span class="i-carbon:play" />
          <span class="VppOperateTooltip">开始执行</span>
        </div>
        <div class="VppOperateButton" @click="handleSet">
          <span class="i-carbon:reset" />
          <span class="VppOperateTooltip">重置代码</span>
        </div>
      </div>
    </div>
    <div class="VppEditor" :class="{ '!b-color-bc': collapsable }">
      <Codemirror
        ref="refMirror"
        v-model="codeValue"
        :placeholder="placeholder"
        :autofocus="false"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
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
  --ocs: 10px;
  // operate button space
  --obs: 10px;

  --at-apply: vtr-b vtr-rd bg-white;

  .VppOutput {
    --at-apply: p-$ps vtr-bb text-oc text-$os;

    &Loading {
      --at-apply: block text-0 w-54px h-18px;

      &,
      & > div {
        position: relative;
        box-sizing: border-box;
      }

      & > div {
        --at-apply: inline-block w-10px h-10px m-4px rd-100%;
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
      --at-apply: text-occ text-$ocs cursor-pointer;
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
    --at-apply: bg-#ffffff vtr-bt b-color-transparent overflow-hidden;
    border-bottom-left-radius: var(--br);
    border-bottom-right-radius: var(--br);

    ::v-deep(.v-codemirror) {
      .cm-gutters {
        --at-apply: bg-transparent b-r-color-bc;
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
