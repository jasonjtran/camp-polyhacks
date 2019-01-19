import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    key: 'AIzaSyDf4o-SKjZ_-eSS8J01Sywo2fX9tP-klq4',
    // Enable more Google Maps libraries here
    libraries: 'places',
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
