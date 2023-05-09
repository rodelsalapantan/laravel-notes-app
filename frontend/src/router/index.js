import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";

import routes from "@/router/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    if(!authStore.user){
        await authStore.getUser();
    }

    if ('auth' in to.meta && to.meta.auth && authStore.user === null) {
        next({
            path: '/login',
            query: { redirect: to.fullPath },
        });
    } else if ('auth' in to.meta && !to.meta.auth && authStore.user !== null) {
        next('/home');
    } else {
        next();
    }
})

export default router;