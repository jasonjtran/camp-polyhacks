<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" dark>Add</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline" v-if="!!location" style="text-align:center;">Rate {{ location }}'s Accessibility</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-select required :items="items" placeholder="Accessibility" v-model="selection"></v-select>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['location'],
    data() {
        return {
            selection: '',
            items: ['Highly Accesible', 'Mildly Accessible', 'Not Accessible'],
            dialog: false,
        }
    },

    methods: {
      save() {
        this.dialog = false
        this.$emit('save', this.selection)
      },
    }
}
</script>

<style>

</style>

