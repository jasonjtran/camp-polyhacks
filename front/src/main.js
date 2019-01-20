import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
import LocationList from './components/LocationList.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/locations', component: LocationList },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf4o-SKjZ_-eSS8J01Sywo2fX9tP-klq4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

Vue.use(VueGeolocation)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
