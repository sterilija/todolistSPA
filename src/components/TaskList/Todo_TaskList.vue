<template>
  <div class="todo_tasklist-container">
    <v-list variant="outlined">
      <v-list-item v-for="itm in tasksArrFiltered" :title="itm.shortDesc" :subtitle="itm.text">
        <div class="tasklist_itm_toolbar">
          <input type="checkbox" name="" id="">
          <img class="tasklist_itm_toolbar_img" src="../../assets/icons/delete.svg" alt="delete button" @click="taskRemove(itm.id)">
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

export default {
  name: "Todo_TaskList",
  computed() {
    this.arrFilter()
  },
  watch:{
    $route (to, from){
      this.arrFilter();
    }
  },
  props: [
      'route'
  ],
  data:() => ({
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
    tasksArrFiltered: [],
  }),
  methods: {
    arrFilter(routeParam = this.route.params.taskFilter) {
      function filterByFinished(arrDirty, isFinished){
        let arrFiltered;
        arrFiltered = arrDirty.filter((itm)=>{
          if(isFinished === true){
            return itm.finished;
          }
          else{
            return !itm.finished;
          }
        });
        return arrFiltered;
      }
      if (routeParam === 'unfinished') {
          this.tasksArrFiltered = filterByFinished(this.tasksArr, false);
      }
      else if(routeParam === 'finished') {
        this.tasksArrFiltered = filterByFinished(this.tasksArr, true);
      }
      else{
        this.tasksArrFiltered = this.tasksArr;
      }
    },
    tasksFetch(array){
      array.forEach((element, index) => element.id = index);
    },
    taskRemove(itmID, array = this.tasksArr, routeParam = this.route.params.taskFilter){
      array.splice(itmID, 1);
      this.tasksFetch(array);
      this.arrFilter(routeParam);
    },
    taskFinish(itmID, array){

    }
  }
}
</script>

<style scoped>

</style>