import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

var VueCookie = require("vue-cookie");
Vue.use(VueCookie);

new Vue({
  render: h => h(App),
  router,
  components: { App },
  template: "<App/>"
}).$mount("#app");
