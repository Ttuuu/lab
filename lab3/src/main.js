// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Nav from './Nav'
import router from './router'

Vue.config.productionTip = false
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
/* eslint-disable no-new */
new Vue({
  el: '#nav',
  router,
  components: { Nav },
  template: '<Nav/>'
})



