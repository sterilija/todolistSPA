<template>
  <div class="d-flex justify-center pt-5">
    <v-btn-toggle v-model="toggle_one" variant="outlined" mandatory color="yellow-lighten-1" @click="passSelected">
      <router-link to="/">
        <v-btn value="All">All tasks</v-btn>
      </router-link>
      <router-link to="/unfinished">
        <v-btn value="Unfinished">Unfinished</v-btn>
      </router-link>
      <router-link to="/finished">
        <v-btn value="Finished">Finished</v-btn>
      </router-link>
    </v-btn-toggle>
  </div>
</template>

<script>
export default{
  name: "Todo_TaskFilterBar",
  data(){
    return{
      toggle_one: 'All',
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