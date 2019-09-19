export default function(menusRouter, materialName) {
  let router = [];

  // 动态路由
  // for (let item of menusRouter)
  //   router.push({
  //     name: item.id,
  //     path: "/" + materialName + item.page,
  //     component: () =>
  //       import(
  //         /* webpackChunkName: "views/[request]" */
  //         `../views${item.page}`
  //       ),
  //     meta: {
  //       materialName: materialName,
  //       name: item.name,
  //       resource: item.resource ? item.resource : []
  //     }
  //   });

  return router;
}
