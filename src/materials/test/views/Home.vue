<template>
  <div class="v-test">
    <h1>测试模块</h1>
    <button @click="handleClick('test1')">Test1</button>
    <button @click="handleClick('test2')">Test2</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "TestHome",
  methods: {
    handleClick(id) {
      this.$router.push({ name: id });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-test {
  width: 100%;
}
</style>
