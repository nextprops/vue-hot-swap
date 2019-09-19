export default [
  {
    name: "system",
    path: "/system",
    component: () => import(/* webpackChunkName: "views/Home" */ `../views/Home`),
    children: [
      {
        name: "systemChangeFrame",
        path: "/system/changeFrame",
        component: () => import(/* webpackChunkName: "views/ChangeFrame" */ `../views/ChangeFrame`)
      },
      {
        name: "systemDetail",
        path: "/system/detail",
        component: () => import(/* webpackChunkName: "views/Detail" */ `../views/Detail`)
      },
    ],
  },
];
