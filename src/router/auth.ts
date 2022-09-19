import Home from '@/views/Home.vue';
import {RouteConfig} from 'vue-router';
import {LICENSE_MODULES} from "@/interfaces/licenseSubscription.ts";
import Login from "@/views/auth/LoginView.vue"
import ResetPassword from "@/views/auth/ResetPasswordView.vue"
import Signup from "@/views/auth/SignupView.vue"
// import {APP_PERMISSIONS} from '@/interfaces/roles';

const routes: RouteConfig[] = [
    {
        path: '/reset-password',
        redirect: {name: 'auth.reset'},
    },
    {
        path: '/auth',
        name: 'auth',
        meta: {layout: 'app-layout-auth', guest: true},
        redirect: 'auth/login',
        children: [
            {
                path: 'login',
                name: 'auth.login',
                meta: {layout: 'app-layout-auth', guest: true},
                component: Login,
            },
            {
                path: 'logout',
                name: 'auth.logout',
                meta: {layout: 'app-layout-auth', guest: false},
            },
            {
                path: 'sign-up',
                name: 'auth.signup',
                meta: {layout: 'app-layout-auth', guest: true},
                component: Signup,
            },
            {
                path: 'forgot',
                name: 'auth.forgot',
                meta: {layout: 'app-layout-auth', guest: true},
                component: ResetPassword,
            },
        ],
    },
];

export default routes;
