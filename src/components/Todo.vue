<template>
  <header>
    <Todo_TaskFilterBar @filterChange=""/>
  </header>
</template>

<script>
import Todo_TaskFilterBar from './Todo_TaskFilterBar.vue';
export default {
  name: "Todo",
  components: {Todo_TaskFilterBar},
  methods:{

  }
}
</script>

<style scoped>

</style>