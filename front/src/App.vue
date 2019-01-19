<template>
  <v-app>
    <v-toolbar color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>WheelWays</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <div id="app">
        <GmapMap style="width: 100vw; height: 98vh;" :zoom="18" :center="{lat: lat, lng: lng}">
          <GmapMarker v-for="(marker, index) in markers"
            :key="index"
            :label="getRating(marker)"
            :position="marker.position"
            />
          <GmapMarker
            v-if="this.place"
            label="★"
            :position="{
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }"
          />
        </GmapMap>
        <v-card class="map-card">
          <GmapAutocomplete class="gmap" @place_changed="setPlace">
          </GmapAutocomplete>
          <submit-dialog v-on:save="rating = $event; submit()" :location="place ? place.address_components[0].long_name : ''"/>
        </v-card>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
import Fab from './components/Fab'
import SubmitDialog from './components/SubmitDialog'

export default {
  name: "App",
  components: {
    HelloWorld,
    Fab,
    SubmitDialog,
  },
  data() {
    return {
      markers: [],
      place: null,
      lat: 0,
      lng: 0,
      dev: 'localhost:8000/map',
      place: '',
      rating: '',
    }
  },
  methods: {
    getRating() {
      return 10
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        this.place = null;
      }
    },

    submit() {
      let form_data = {
        lat: this.place.geometry.location.lat(),
        lng: this.place.geometry.location.lng(),
        rating: this.rating,
      }
    axios.post(this.dev, form_data)

      axios.post(this.dev, form_data)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    }
  },

  mounted() {
    this.$getLocation()
      .then(coordinates => {
        this.lat = coordinates.lat
        this.lng = coordinates.lng
      })

      axios.get(this.dev)
        .then(res => {
          console.log(res)
          for (let mark of res.data) {
            this.markers.push(mark)
          }
        })
        .catch(e => console.log(e))
  }
};
</script>

<style scoped>
.map-card {
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 100;
  margin-left: 20px;
  margin-right: 20px;
}

.gmap {
  margin-left: 20px;
  width: 250px;
}
</style>

