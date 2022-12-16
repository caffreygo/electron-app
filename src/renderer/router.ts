import * as VueRouter from "vue-router";

const routes = [
  { path: "/", redirect: "/WindowMain/Chat" },
  {
    path: "/WindowMain",
    component: () => import("./window/WindowMain/index.vue"),
    children: [
      { path: "Chat", component: () => import("./window/WindowMain/Chat.vue") },
      {
        path: "Contact",
        component: () => import("./window/WindowMain/Contact.vue"),
      },
      {
        path: "Collection",
        component: () => import("./window/WindowMain/Collection.vue"),
      },
    ],
  },
  {
    path: "/WindowSetting",
    component: () => import("./window/WindowSetting/index.vue"),
    children: [
      {
        path: "AccountSetting",
        component: () => import("./window/WindowSetting/AccountSetting.vue"),
      },
    ],
  },
  {
    path: "/WindowUserInfo",
    component: () => import("./window/WindowUserInfo.vue"),
  },
];

export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
