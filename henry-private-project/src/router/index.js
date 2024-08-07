import { createRouter } from "vue-router";
import MyFirstVue from "@/views/MyFirstVue.vue";
const router = new createRouter({
    routes: [
        {
            path: "/MyFirstVue",
            component: MyFirstVue
        }
    ]
})

export default router;