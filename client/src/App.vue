<template>
  <div id="app">
    <v-content>
      <gmap-map
      style="width:500px;height:500px"
      :center="center"
      :zoom="7"
    map-type-id="terrain"
    >

    </gmap-map>
    </v-content>
    
  </div>

</template>


<script>
export default {
  data() {
    return {
      center: {
        lat: 10,
        lng: 4, 
      },
    }
  }
}
</script>

<style>

</style>
