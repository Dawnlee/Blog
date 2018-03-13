// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
// import colors from 'vuetify/es5/util/colors'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.red.darken1,
  //   secondary: colors.red.lighten4,
  //   accent: colors.indigo.base
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
