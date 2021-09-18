import { initMixin } from './init'
import { stateMixin } from './state' 
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  console.log(this);
  //给vue挂载方法
  this._init(options)
}


//通过传入vue方法，对vue进行初始化挂载

/**
 * 挂载_init方法,_init主要是在new vue的时候给vue对象挂载传入对象，
 * 如果是开发环境则开始通过initProxy对vm的render进行检查，并给出报错信息
 * 初始化生命周期，事件，渲染执行beforecreated，Inject，data，methods，prop，provide，
 * 执行created，然后开始挂载到相应dom上
 */
initMixin(Vue)

/**
 * 给vue挂载data。prop，set，delete，watch等方法
 */
stateMixin(Vue)

/**
 * 给vue挂载$on，$once，$off，$emit等方法
 */
eventsMixin(Vue)

/**
 * 给vue挂载_update，$forceUpdate，$destroy等方法
 */
lifecycleMixin(Vue)

/**
 * 主要功能是给vue挂载$nextTick和_render，
 * 还会把原版的vm 形如  {$el:div#app,_data:{showModel:false}...}
 * 转化成vnode 形如 {tag:div,data:{attrs:{id:'#app'}}...}
 */
renderMixin(Vue)

export default Vue
