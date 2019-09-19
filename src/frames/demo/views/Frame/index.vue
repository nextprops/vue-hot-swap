<template>
  <div class="v-demo">
    <TopNav />
    <div class="container">
      <SideNav />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
export default {
  name: "Frame",
  components: {
    SideNav,
    TopNav
  },
  computed: {},
  data() {
    return {
      appName: APP_CONFIG.appName
    };
  }
};
</script>

<style lang="scss">
.v-demo {
  color: #000;
  height: 100%;
  .container {
    display: flex;
    height: calc(100% - 50px);
    width: 100%;
  }
  .content {
    padding: 0 20px;
    width: 100%;
  }
}
</style>
