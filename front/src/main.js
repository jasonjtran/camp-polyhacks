import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf4o-SKjZ_-eSS8J01Sywo2fX9tP-klq4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

Vue.use(VueGeolocation)

new Vue({
  render: h => h(App),
}).$mount('#app')
