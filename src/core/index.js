import Vue from './instance/index' //在文件中声明vue，并进行初始化对象挂载
import { initGlobalAPI } from './global-api/index' //给vue挂载区全局api，set，del，nextTick
import { isServerRendering } from 'core/util/env' //环境判断挂载
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue) 

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
