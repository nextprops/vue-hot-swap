<template>
  <div class="v-task">
    <h1>任务模块</h1>
    <button @click="handleClick('task1')">Task1</button>
    <button @click="handleClick('task2')">Task2</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "TaskHome",
  methods: {
    handleClick(id) {
      this.$router.push({ name: id });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-task {
  width: 100%;
}
</style>
