<template>
  <div class="v-base__side-nav">
    <div :class="['item', routeName === item.id ? 'is-active' : '']" v-for="(item,index) in navs" :key="index" @click="handleClick(item)">
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
      navs: [],
      routeName: ""
    };
  },
  watch: {
    $route(to,from) {
      this.routeName = to.name;
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.navs = this.$store.state.core.menus;
    this.routeName = this.$route.name
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
.v-base__side-nav {
  width: 80px;
  height: 100%;
  background-color:rgb(9, 13, 22);
  .item {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    &:hover {
      background-color:rgb(27, 67, 161);
    }
  }
  .is-active {
    background-color:rgb(27, 67, 161);
  }
}
</style>
 