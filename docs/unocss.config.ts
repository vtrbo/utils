import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      bc: '#dcdfe6',
      dbc: '#1b1b1f',
      dbbc: '#2e2e32',
      oc: '#707379',
      occ: '#707379',
    },
  },
  shortcuts: {
    'vtr-b': 'b-width-1px b-style-solid b-color-bc dark:b-color-dbc',
    'vtr-bb': 'b-b-width-1px b-b-style-solid b-b-color-bc dark:b-b-color-dbbc',
    'vtr-bt': 'b-t-width-1px b-t-style-solid b-t-color-bc dark:b-b-color-dbbc',
    'vtr-rd': 'rd-$br',
    'fbc': 'flex justify-between items-center',
    'fsc': 'flex justify-start items-center',
    'fec': 'flex justify-end items-center',
    'fcc': 'flex justify-center items-center',
  },
})
