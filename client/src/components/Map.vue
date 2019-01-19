<template>
    <div>
        <googlemaps-map
            ref="map"
            class="map"
            :center.sync="center"
            style="height: 500px; width: 500px;"
        >

        </googlemaps-map>
    </div>
</template>

<script>
export default {

    data() {
        return {
            center: {
				lat: 48.853,
				lng: 2.298,
            },
        }
    }

}
</script>

<style>

</style>
