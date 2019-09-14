import Vue from "vue";
import Router from "vue-router";
import TheHeader from "@/components/TheHeader";
import SignUp from "@/components/SignUp";
import about from "@/components/about";
import TheFooter from "@/components/TheFooter";
import home from "@/components/home";
import category from "@/components/category";
import advices from "@/components/advices";
import profil from "@/components/profil";
import contacts from "@/components/contacts";
import login from "@/components/login";

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
      path: "/advices",
      name: "advices",
      component: advices
    },
    {
      path: "/profil",
      name: "profil",
      component: profil
    },
    {
      path: "/contacts",
      name: "contacts",
      component: contacts
    },
    {
      path: "/category/:id/:category",
      name: "category",
      component: category
    },
    {
      path: "/login/",
      name: "login",
      component: login
    }
  ],
  mode: "history"
});
