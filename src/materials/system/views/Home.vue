<template>
  <div class="v-system">
    <h1>系统信息模块</h1>
    <button @click="handleClick('systemChangeFrame')">更换基座</button>
    <button @click="handleClick('systemDetail')">系统详情</button>
    <button @click="$router.push('/home')">回到首页</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "systemHome",
  methods: {
    handleClick(id) {
      this.$router.push({ name: id });
    }
  },
};
</script>

<style lang="scss" scoped>
  .v-system {
    width: 100%;
  }
</style>
