<template>
  <header>
    <Todo_TaskFilterBar/>
    <Todo_TaskList :route="route"/>
    <Todo_TaskAdd></Todo_TaskAdd>
  </header>
</template>

<script lang="ts">
import Todo_TaskFilterBar from './components/Todo_TaskFilterBar.vue'
import Todo_TaskList from "./components/TaskList/Todo_TaskList.vue";
import Todo_TaskAdd from "./components/Todo_TaskAdd.vue"
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
    Todo_TaskList,
    Todo_TaskAdd,
  },
}
</script>

<style scoped>

</style>