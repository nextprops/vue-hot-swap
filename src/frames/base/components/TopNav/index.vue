<template>
  <div class="v-base__top-nav">
    <h1>{{ appName }}</h1>
    <div class="right">
      <div>设置</div>
      <div @click="$router.push('/login')">退出</div>
    </div>
  </div>
</template>
<script>
// import { createNamespacedHelpers } from ;
// const { mapState, mapActions, mapMutations } = createNamespacedHelpers();
export default {
  name: "TopNav",
  components: {},
  props: {},
  data() {
    return {
      appName: "",
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.appName = window.APP_CONFIG.appName
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.v-base__top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #090d16;
  .right {
    display: flex;
  }
}
</style>
 