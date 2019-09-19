<template>
  <div class="v-demo__top-nav">
    <h1>{{ appName }}</h1>
    <div class="right">
      <div>设置</div>
      <div>退出</div>
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
.v-demo__top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  .right {
    display: flex;
  }
}
</style>
 