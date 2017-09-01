// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import loading from './components/loading'
import routerConfig from './router.config'
import VueRouter from 'vue-router'
import store from './store/'
import axios from 'axios'
import vueScroll from 'vue-scroller'

import '@/assets/css/font-awesome.min.css'
import '@/assets/css/index.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(vueScroll)

Vue.use(VueRouter);
Vue.use(loading);

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    store.dispatch('showLoading')
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
    store.dispatch('hideLoading')
    return response;
}, function (error) {

    return Promise.reject(error);
});
Vue.prototype.$http = axios;

var router = new VueRouter({
    mode:'history',
    routes:routerConfig
})



Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
//过滤器
Vue.filter('format',function (val) {
    return val>0?'小':'大'
})

