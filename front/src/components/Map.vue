<template>
    <div>
        <gmap-map
        style="width:1920px;height:1080px"
        :center="center"
        :zoom="10"
      map-type-id="terrain"
      >

      </gmap-map>
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
