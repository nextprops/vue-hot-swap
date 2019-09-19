export default [
  {
    name: "task",
    path: "/task",
    component: () => import(/* webpackChunkName: "views/Home" */ `../views/Home`),
    children: [
      {
        name: "task1",
        path: "/task/task1",
        component: () => import(/* webpackChunkName: "views/Task1" */ `../views/Task1`)
      },
      {
        name: "task2",
        path: "/task/task2",
        component: () => import(/* webpackChunkName: "views/Task2" */ `../views/Task2`)
      },
    ],
  },
];
