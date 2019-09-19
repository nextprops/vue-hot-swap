<template>
  <div class="v-base">
    <TopNav v-if="!isLogin" />
    <div class="container" v-if="!isLogin" >
      <SideNav />
      <div class="content">
        <router-view />
      </div>
    </div>
    <router-view v-if="isLogin"/>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
export default {
  name: "Frame",
  components: {
    SideNav,
    TopNav,
  },
  watch: {
    $route(to, from) {
      this.setLoginStatus(to);
    }
  },
  computed: {},
  data() {
    isLogin: false
  },
  created() {
    this.setLoginStatus(this.$route)
  },
  methods: {
    setLoginStatus(data) {
      const name = data.name || "";
      this.isLogin = name === "login";
    }
  }
};
</script>

<style lang="scss">
.v-base {
  color: #fff;
  height: 100%;
  .container {
    display: flex;
    height: calc(100% - 50px);
    width: 100%;
    background: #6d7a71;
  }
  .content {
    padding: 0 20px;
    width: 100%;
  }
}
</style>
