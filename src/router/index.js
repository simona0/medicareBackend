import Vue from "vue";
import Router from "vue-router";
import TheHeader from "@/components/TheHeader";
import SignUp from "@/components/SignUp";
import about from "@/components/about";
import TheFooter from "@/components/TheFooter";
import home from "@/components/home";
import category from "@/components/category";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/about",
      name: "About",
      component: about
    },
    {
      path: "/footer",
      name: "TheFooteroter",
      component: TheFooter
    },
    {
      path: "/category/:id/:category",
      name: "category",
      component: category
    }
  ],
  mode: "history"
});
