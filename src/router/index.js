import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Join from "../views/Join";
import News from "../views/News";
import Support from "../views/Support";

import Video from "../views/Support/Video";
import Pic from "../views/Support/Pic";
import Emote from "../views/Support/Emote";
import Talk from "../views/Support/Talk";
import Avatar from "../views/Support/Avatar";

Vue.use(VueRouter);

//1、先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
//2、重写push|replace
//第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/join",
    name: "join",
    component: Join,
  },
  {
    path: "/support",
    name: "support",
    component: Support,
    redirect:"/support/emote",
    children: [
      {
        path: "video",
        name: "video",
        component: Video,
      },
      {
        path: "pic",
        name: "pic",
        component: Pic,
      },
      {
        path: "emote",
        name: "emote",
        component: Emote,
      },
      {
        path: "talk",
        name: "talk",
        component: Talk,
      },
      {
        path: "avatar",
        name: "avatar",
        component: Avatar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
