<template>
  <v-form class="mt-2 bg-grey-darken-4 pa-3 mx-2">
    <v-btn :block="!showForm"
           class="trans-all-0_3"
           rounded="0"
           variant="tonal"
           size="large"
           @click="showForm = !showForm; expandHeight(this.$refs.formRef)"
    >{{btnExpandSpan()}}</v-btn>
    <div ref="formRef" class="trans-all-0_3 overflow-hidden h-0-n">
      <v-text-field class="pt-3"
                    rounded="0"
                    variant="outlined"
                    :rules="rules"
                    label="Task description"
                    v-model="newTask_desc"
      >
      </v-text-field>
      <v-textarea label="Task details" rounded="0" variant="outlined" v-model="newTask_details"></v-textarea>
      <v-btn block
             rounded="0"
             variant="tonal"
             size="large"
             @click="taskAdd()"
      >Add task</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "Todo_TaskAdd",
  props: [
    'tasksArr',
  ],
  data: ()=> ({
    newTask_desc: '',
    newTask_details: '',
    rules: [
        value => {
      if (value) return true

          return 'You must enter the task description'
        }
    ],
    showForm: false,
    btnExpandSpan(bool = this.showForm){
      if(bool){
        return '-';
      }
      else{
        return '+';
      }
    },
    expandHeight(DOMobj ,bool = this.showForm){
      if (bool){
        DOMobj.style.height = DOMobj.scrollHeight + 'px';
      }
      else {
        DOMobj.style.height = '0';
      }
    }
  }),
  methods:{
    tasksFetch(array = this.tasksArr) { //TODO: Remove duplicates from here and Todo_TaskList.vue
      array.forEach((element, index) => element.id = index);
    },
    taskAdd(arr = this.tasksArr){
      arr.push({
        shortDesc: this.newTask_desc,
        text: this.newTask_details,
      });
      this.tasksFetch()
    }
  },
  computed(){
    this.expandHeight(this.$refs.formRef)
  }
}
</script>

<style scoped>

</style>