import Vue from 'vue'
import App from './App.vue'
import router from './router/routes.js'
import axios from 'axios';
import { store } from './store';

const app = new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App)
});