


export const routes = [
    {
        path: "/",
        name: "start",
        component: () => import("./pages/Home.vue"),
         meta : { start: true, },
    },
    
    {
        path: "/mental",
        name: "mental",
        component: () => import("./pages/Mental.vue"),
        meta: { mental: true, },
    },

    {
        path: "/hospital",
        name: "hospital",
        component: () => import("./pages/Hospital.vue"),
        meta: {hospital:true,}, 
    },

    {
        path:"/Haven",
        name: "haven",
        component: () => import("./pages/Haven.vue"),
        meta:{ haven:true,},
    },

    {
        path:"/emergency",
        name: "emergency",
        component: () => import("./pages/Emergencies.vue"),
        meta:{ emergency:true, }
    },

    {
        path:"/panic",
        name: "panic",
        component: () => import("./pages/Panic.vue"),
        meta:{ panic:true,}
    }

];





