<template>
  <div class="home">
    <to-do-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from "@/components/ToDoList.vue";   

export default {
  name: "HomeView",
  components: {
    ToDoList
  },
};
</script>

<style scoped>
body {
    position: relative;
}


</style>