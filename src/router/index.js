import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/App.vue'
import chapter1 from '../components/chapter1.vue'
import chapter2 from '../components/chapter2.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            name: '',
            component: App
        },
        {
            path: 'chapter1',
            name: 'Chapter1',
            component: chapter1
        },
        {
            path: 'chapter2',
            name: 'Chapter2',
            component: chapter2
        }
    ]
})