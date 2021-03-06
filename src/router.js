import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Profile from './views/Profile';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})