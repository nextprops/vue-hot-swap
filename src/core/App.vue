<template>
  <router-view class="view" />
</template>

<script>
import axios from "axios";
import _import from "./scripts/_import";
import _import_map from "./scripts/_import_map";
import { handleMenus } from "./scripts/utils";

export default {
  name: "app",
  methods: {
    async init(menus) {
      document.title = APP_CONFIG.appName;
      // 储存模块
      this.$store.commit("SET_MENUS", menus);
      // 获取缓存map
      const modulesMap = await _import_map();

      // 获取基座
      let frame = await _import(
        "frames",
        localStorage.getItem("frame") || APP_CONFIG.frame,
        modulesMap
      );
      this.$router.addRoutes(frame.routerStatic);
      // 嵌套路由 / 默认两级路由
      let childRouter = frame.routerStatic.filter(item => item.path == "/");
      // Store
      for (let name in frame.store) {
        this.$store.registerModule(name, frame.store[name]);
      }

      // 异步获取模块
      for (let material of menus) {
        _import("materials", material.id, modulesMap)
          .then(p => {
            // 路由
            childRouter[0].children = p.routerStatic;

            this.$router.addRoutes(childRouter);
            // Store
            for (let name in p.store)
              this.$store.registerModule(name, p.store[name]);
          })
          .catch(err => {});
      }

      window.state = this.$store.state;
    },
  },
  created() {
    // 获取模块权限
    axios.get("static/modules.json").then((res) => {
      this.init(res.data.modules);
      this.$store.commit("SET_FRAMES", res.data.frames);
    })
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>