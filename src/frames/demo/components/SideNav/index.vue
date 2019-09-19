<template>
  <div class="v-demo__side-nav">
    <div class="item" v-for="(item,index) in navs" :key="index" @click="handleClick(item)">
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "SideNav",
  components: {},
  props: {},
  data() {
    return {
      navs: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.navs = this.$store.state.core.menus;
  },
  beforeDestroy() {},
  methods: {
    handleClick(item) {
      this.$router.push({name: item.id})
    },
  }
};
</script>
<style lang='scss' scoped>
.v-demo__side-nav {
  width: 80px;
  height: 100%;
  .item {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
}
</style>
 