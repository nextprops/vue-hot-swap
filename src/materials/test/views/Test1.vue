<template>
  <div class="v-test__test1">
    <h3>测试模块子页面---1</h3>
    <button @click="handleClick">点击事件</button>
  </div>
</template>

<script>
export default {
  name: "Test1",
  methods: {
    // 测试
    handleClick() {
      const a = 'Test1'
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-test__test1 {
  width: 100%;
  height: 500px;
  background: rgb(223, 126, 126);
}
</style>