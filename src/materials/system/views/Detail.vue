<template>
  <div class="v-system__detail">
    <br>
    <b>成功加载模块</b>
    <div>{{QIANKUN_SUCCESS}}</div>
    <br />
    <b>未成功加载模块</b>
    <div>{{QIANKUN_FAILURE}}</div>
  </div>
</template>

<script>
export default {
  name: "testDetail",
  data() {
    return {
      frame: localStorage.getItem("frame") || APP_CONFIG.frame,
      QIANKUN_SUCCESS: window.QIANKUN_SUCCESS
        ? window.QIANKUN_SUCCESS.join(", ")
        : "请在生产环境查看",
      QIANKUN_FAILURE: window.QIANKUN_FAILURE
        ? window.QIANKUN_FAILURE.join(", ")
        : "请在生产环境查看"
    };
  }
};
</script>

<style lang="scss" scoped>
.v-system__detail {
  height: 500px;
  background: rgb(109, 119, 129);
}
</style>
