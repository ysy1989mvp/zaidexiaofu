import Vue from 'vue'
import App from './App'
import util from './common/util.js'


Vue.prototype.util = util //挂载到Vue实例上面

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
