import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const name = "kobayashi"
name = qiulin

function sayHello(who){
  Console.log("hello" + who);
}
sayHello(name)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
