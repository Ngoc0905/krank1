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
            component: Home,
            props: {
                matches: [
                    {
                        id: 1,
                        time: new Date(),
                        sport: "Football",
                        label: "Soccer Five Laplace",
                        tags: [
                            "5vs5",
                            "Expert"
                        ],
                        user: {
                            lastName: "de Krank",
                            firstName: "Benoit"
                        },
                        price: 8,
                        duration: 90
                    }
                ]
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})