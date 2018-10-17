import "@babel/polyfill"
import "./plugins/vuetify"
import Vue from "vue"
import VueResource from "vue-resource"
import VueMoment from "vue-moment"
import App from "./App.vue"

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueMoment);
Vue.http.options.root = process.env.VUE_APP_API_ROOT;

Vue.directive("focus", {
    inserted: function (el) {
        el.focus()
    }
});

new Vue({
    render: h => h(App),
}).$mount("#app");
