export default [
  {
    name: "test",
    path: "/test",
    component: () => import(/* webpackChunkName: "views/Home" */ `../views/Home`),
    children: [
      {
        name: "test1",
        path: "/test/test1",
        component: () => import(/* webpackChunkName: "views/Test1" */ `../views/Test1`)
      },
      {
        name: "test2",
        path: "/test/test2",
        component: () => import(/* webpackChunkName: "views/Test2" */ `../views/Test2`)
      },
    ],
  },
];
