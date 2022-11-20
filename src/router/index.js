import { createRouter, createWebHashHistory } from "vue-router";
import FormView from "../views/FormView.vue";
import MainView from "../views/MainView.vue"

const routes = [
    {
        path: "/signup",
        name: "signup",
        component: FormView,
    },
    {
        path:"/", 
        name:'Main', 
        component: MainView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;