<template>
  <div class="d-flex justify-center py-4">
    <v-btn-toggle v-model="toggle_one" divided variant="outlined" mandatory color="teal-lighten-4" @click="passSelected">
      <v-btn>All tasks</v-btn>
      <v-btn>Unfinished</v-btn>
      <v-btn>Finished</v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default{
  name: "Todo_TaskFilterBar",
  data(){
    return{
      toggle_one: 0,
      }
    },
  methods: {
    passSelected(){
      this.$emit('filterChange', this.toggle_one);
    }
  }
}
</script>

<style scoped>

</style>