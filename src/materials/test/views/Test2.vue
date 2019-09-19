<template>
  <div class="v-test__test2">
    <h3>测试模块子页面---2</h3>
  </div>
</template>

<script>
export default {
  name: "Test2",
  methods: {
    // 测试
    handleClick() {
      const a = 'Test2'
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-test__test2 {
  width: 100%;
  height: 500px;
  background: rgb(32, 122, 103);
}
</style>