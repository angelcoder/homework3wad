import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import FetchView from "../views/FetchView.vue";
import FunView from "../views/FunView.vue"

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/signup",
        name: "signup",
        component: FormView,
    },
    {
        path: "/fetch",
        name: "fetch",
        component: FetchView,
    },
    {
        path:"/fun", 
        name:'fun', 
        component: FunView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;