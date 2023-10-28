<template>
  <div class="todo_tasklist-container mx-2">
    <v-list>
      <v-list-item :class="[{'tasklist_itm-finished': itm.finished},]"
                   v-for="itm in tasksArrFiltered"
                   :title="itm.shortDesc"
                   :subtitle="itm.text">
        <div class="tasklist_itm_toolbar">
          <input type="checkbox"
                 :checked="itm.finished"
                 @click="itm.finished=!itm.finished"
                 name="" id="">
          <img class="tasklist_itm_toolbar_img"
               src="../../assets/icons/delete.svg"
               alt="delete button"
               @click="taskRemove(itm.id)">
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
      'route',
      'tasksArr'
  ],
  data:() => ({
    tasksArrFiltered: [],
  }),
  methods: {
    arrFilter(routeParam = this.route.params.taskFilter) {
      function filterByFinished(arrDirty, isFinished) {
        let arrFiltered;
        arrFiltered = arrDirty.filter((itm) => {
          if (isFinished === true) {
            return itm.finished;
          } else {
            return !itm.finished;
          }
        });
        return arrFiltered;
      }

      if (routeParam === 'unfinished') {
        this.tasksArrFiltered = filterByFinished(this.tasksArr, false);
      } else if (routeParam === 'finished') {
        this.tasksArrFiltered = filterByFinished(this.tasksArr, true);
      } else {
        this.tasksArrFiltered = this.tasksArr;
      }
    },
    tasksFetch(array) { //TODO: Remove duplicates from here and Todo_TaskAdd.vue
      array.forEach((element, index) => element.id = index);
    },
    taskRemove(itmID, array = this.tasksArr, routeParam = this.route.params.taskFilter) {
      array.splice(itmID, 1);
      this.tasksFetch(array);
      this.arrFilter(routeParam);
    },

  }
}
</script>

<style scoped>

</style>