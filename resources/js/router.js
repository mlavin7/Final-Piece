


export const routes = [
    {
        path: "/",
        component: () => import("./pages/Home.vue"),
    },
    
    {
        path: "/login",
        component: () => import("./pages/Auth/Login.vue"),
    },

    {
        path: "/menu1",
        component: () => import("./pages/MenuOne.vue"),
        meta: { requiresAuth: true },
    },
];





