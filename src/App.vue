<template>
  <header>
    <Todo_TaskFilterBar/>
    <Todo_TaskList :route="route" :tasksArr="tasksArr"/>
    <Todo_TaskAdd :tasksArr="tasksArr"></Todo_TaskAdd>
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
  data:()=>({
    tasksArr: [
      {
        id: 0,
        shortDesc: 'anyone who loves or pursues',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Curabitur ullamcorper ultricies nisi. ipsum dolor sit amet, cAenean commodo ligula eget Curabitur ullamcorper',
        finished: false
      },
      {
        id: 1,
        shortDesc: 'rugs and riches',
        text: 'ligula eget Curabitur ullamcorper adipiscing elit. Aenean ultricies nisi.',
        finished: true
      },
      {
        id: 2,
        shortDesc: 'wash your pants',
        text: 'ligula eget Curabitur ullamcorper adipiscing elit. Aenean ultricies nisi.',
        finished: true
      },
      {
        id: 3,
        shortDesc: 'rice and boiled water',
        text: 'ligula eget Curabiturit. Aenean ult ulit. Aenean ultricies ullamcorper nisi.',
        finished: false
      },
      {
        id: 4,
        shortDesc: 'cats dogs and puss',
        text: 'ligula eget Curabitur ullamcorper adipiscing elit. Aenean ultricies nisi.',
        finished: false
      }
    ],
  }),
}
</script>

<style scoped>

</style>