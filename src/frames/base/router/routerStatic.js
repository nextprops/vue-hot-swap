export default [

  {
    path: "/",
    component: () =>  import(/* webpackChunkName: "views/Frame" */ "../views/Frame"),
    children: [
      {
        path: "/",
        redirect: "/login"
      },

      {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "views/Login" */ "../views/Login")
      },
      // {
      //   path: "/home",
      //   component: () => import(/* webpackChunkName: "views/Home" */ "../views/Home")
      // }
    ]
  }
];
