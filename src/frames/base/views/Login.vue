<template>
  <div class="v-login">
    <h2>SYSTEM LOGIN</h2>
    <div>
      <div>
        <input type="text" value="admin" />
      </div>
      <br />
      <div>
        <input type="password" value="admin" />
      </div>
      <br />
      <button @click="$router.push('./home')">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.v-login {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #000;
  height: 100%;
  width: 100%;
}
</style>
 