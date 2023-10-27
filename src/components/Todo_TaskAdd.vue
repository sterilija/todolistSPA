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
      >
      </v-text-field>
      <v-textarea label="Task details" rounded="0" variant="outlined"></v-textarea>
      <v-btn block
             rounded="0"
             variant="tonal"
             size="large"
      >Add task</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "Todo_TaskAdd",
  data: ()=> ({
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
  computed(){
    this.expandHeight(this.$refs.formRef)
  }
}
</script>

<style scoped>

</style>