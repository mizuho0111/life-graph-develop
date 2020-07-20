// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import App from '@/App'
import router from '@/router'
import store from '@/store'
// import lang from '@/lang'

// Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  // i318n: lang,
  router,
  store,
  template: '<App/>'
})
