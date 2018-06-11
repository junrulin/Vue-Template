// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { http } from './ajax'
import Es6Promise from 'es6-promise'

Es6Promise.polyfill();

Vue.config.productionTip = false

// set global http instance
Vue.prototype.$http = http;

if (process.env.NODE_ENV === 'mock') {
    require('./ajax/mock.setup')
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})