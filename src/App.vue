<template>
  <header>
    <Todo_TaskFilterBar/>
    <Todo_TaskList :route="route"/>
  </header>
</template>

<script lang="ts">
import Todo_TaskFilterBar from './components/Todo_TaskFilterBar.vue'
import Todo_TaskList from "./components/TaskList/Todo_TaskList.vue";
import {useRoute} from "vue-router";
export default {
  setup(){
    const route = useRoute();
    return{
      route
    }
  },
  components:{
    Todo_TaskFilterBar,
    Todo_TaskList
  }
}
</script>

<style scoped>

</style>