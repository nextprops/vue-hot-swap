export default [
  {
    name: "home",
    path: "/home",
    component: () => import(/* webpackChunkName: "views/Home" */ `../views/Home`),
    children: [],
  },
];
