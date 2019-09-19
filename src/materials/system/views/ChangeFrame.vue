<template>
  <div class="v-system__change-frame">
    <br />
    <div>
      <button @click="changeFrame">切换另一个基座</button>
    </div>
    <br />
    <b>当前使用基座：</b>
    <div>{{frame}}</div>

  </div>
</template>

<script>
export default {
  name: "changeFrame",
  data() {
    return {
      frame: localStorage.getItem("frame") || APP_CONFIG.frame,
    };
  },
  methods: {
    changeFrame() {
      if (
        !localStorage.getItem("frame") ||
        localStorage.getItem("frame") == "base"
      )
        localStorage.setItem("frame", "demo");
      else localStorage.setItem("frame", "base");
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-system__change-frame {
  height: 500px;
  background: rgb(202, 59, 147);
}
</style>
