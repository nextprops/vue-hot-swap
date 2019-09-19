<template>
  <div class="v-task__task1">
    <h3>任务子页面---1</h3>
    <button @click="handleClick">点击事件</button>
  </div>
</template>

<script>
export default {
  name: "Task1",
  methods: {
    // 测试
    handleClick() {
      const a = 'Task1'
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-task__task1 {
  width: 100%;
  height: 500px;
  background: rgb(223, 126, 126);
}
</style>