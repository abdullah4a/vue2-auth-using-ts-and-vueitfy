import Home from '@/views/Home.vue';
import {RouteConfig} from 'vue-router';
import {LICENSE_MODULES} from "@/interfaces/licenseSubscription.ts";
// import {APP_PERMISSIONS} from '@/interfaces/roles';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            LICENSE: LICENSE_MODULES.ALLOW,
            PERMISSION: {
                name: 'ALLOW',
                action: 'READ',
            },
        },
    },
];

export default routes;
