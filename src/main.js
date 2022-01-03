import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

Vue.use(plugins)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')
