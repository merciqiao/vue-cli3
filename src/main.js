import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false


//1.引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//后引入路由,组件内样式可以覆盖elementui样式
import router from './router'

//2.引入axios
import axios from 'axios';
Vue.prototype.$http=axios;

//3.引入moment,表格日期格式化
import moment from 'moment'
Vue.prototype.$moment=moment;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
