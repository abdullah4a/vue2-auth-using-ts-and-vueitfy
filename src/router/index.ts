import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';

// Get all available routes.
// import AccountRoutes from '@/routes/account';
import AuthRoutes from './auth';
import DefaultRoutes from './default';
import TimeRoutes from './time';
// import CustomerSignUpRoutes from './customerSignUpRoute';
// import UsersRoutes from './users';
// import PermissionRoutes from './permissions';
// import categoryRoutes from './categoryRoutes';
// import RevenuesRoutes from './revenues';
// import ApiConfigurationRoutes from '@/routes/apiConfiguration';
// import ClientsRoutes from './clientsRoute';
// import locationRoute from './locations';
// import AppointmentsRoutes from './appointmentDetails';
// import rolesRoutes from './roles';
// import reviewRoutes from './cutomer-reviews';
//
// import {routes as SchedulingRoutes} from '@/views/scheduling';
// import NotFoundRoutes from './not-found';
// import AccessDenied from './access-denied';
// import CustomerFamily from './customer-family';

import store from '@/store';
// Instantiate the router.
Vue.use(Router);

// Combine Routes
let allRoutes: RouteConfig[] = [];
allRoutes = allRoutes.concat(
  // AccountRoutes,
  AuthRoutes,
  DefaultRoutes,
  TimeRoutes,
  // SchedulingRoutes,
  // AccessDenied,
  // CustomersRoutes,
  // CustomerSignUpRoutes,
  // ApiConfigurationRoutes,
  // UsersRoutes,
  // AppointmentsRoutes,
  // RevenuesRoutes,
  // categoryRoutes,
  // ClientsRoutes,
  // locationRoute,
  // PermissionRoutes,
  // rolesRoutes,
  // reviewRoutes,
  // CustomerFamily,
);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: allRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
});

// router.beforeEach(async (to, from, next) => {
//     to.meta!.referer = from;
//
//     const guest = !!to.meta!.guest;
//     const hasToken = store.getters['auth/token'];
//     const user = store.getters['auth/user'];
//
//     if (guest && hasToken) {
//         return next({name: 'home'});
//     } else if (!hasToken && to.name === 'scheduling.index' && from.name === 'auth.signup') {
//         return next({name: 'scheduling.index'});
//     }
//
//     if (guest) {
//         return next();
//     }
//     if (hasToken) {
//         const validUser =
//             await store.dispatch('auth/validate');
//         if (validUser) {
//             // const hasPermission = await validatePermission(to);
//             // if (!hasPermission) {
//             //     if ((from.name === 'auth.logout' || from.name === 'auth.login') && to.name === 'home') {
//             //         return next({name: 'scheduling.index'});
//             //     } else {
//             //         return next({
//             //             name: 'access-denied',
//             //             query: {redirect: getFromRoutePath(from), error: 'permission'},
//             //         });
//             //     }
//             return next({name: 'home'})
//         }
//         // if (!validateFeatureGate(to)) {
//         //     return next({name: 'not-found', params: {0: to.path}});
//         // }
//         // await loadLocaleMessages(to);
//         return next();
//     }
//
//     redirectToLogin();
//
//     function redirectToLogin() {
//         const returnPath = to.fullPath.indexOf('auth/') === 1 ? null : to.fullPath;
//         next({name: 'auth.login', query: {next: returnPath}});
//     }
// });

export default router;
