// import Vue from 'vue';
// import store from './store';

// import App from './App.vue';
// import Nav from './components/Nav.vue';
// import Footer from './components/Footer.vue';
// import Home from './components/Home.vue';

// new Vue({
//   el: '#nav',
//   render: h => h(Nav)
// })

// new Vue({
//   el: '#home',
//   store: store,
//   render: h => h(Home)
// })

// new Vue({
//   el: '#footer',
//   render: h => h(Footer)
// })

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App.vue';
import NavApp from './components/NavApp.vue';
import FooterApp from './components/FooterApp.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

import { store } from './store';

const routes = [
    {path: '/', component: Home },
    {path: '/about', component: About }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    store: store,
    router,
    // components: {NavApp, FooterApp},
    render: h => h(App)
});

