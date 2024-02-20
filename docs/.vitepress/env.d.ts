/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const Component: DefineComponent<any, any, any>
  export default Component
}
