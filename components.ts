import Vue from 'vue';

/**
 * Import
 */

// Layouts and templates
import DefaultLayout from "@//layouts/DefaultLayout.vue"
import AuthLayout from "@//layouts/AuthLayout.vue"
import NotFoundLayout from "@//layouts/NotFoundLayout.vue"
import AccessDenied from "@//layouts/AccessDenied.vue"
/**
 * Global registration
 */

// Global layouts and templates
Vue.component('app-layout-404', NotFoundLayout);
Vue.component('app-layout-auth', AuthLayout);
Vue.component('app-layout-default', DefaultLayout);
Vue.component('app-takeover-template',);
Vue.component('app-layout-access-denied', AccessDenied);

Vue.component('app-date-input',);
Vue.component('app-date-range-picker',);
Vue.component('app-date-range-input',);
Vue.component('app-page',);
Vue.component('app-data-table',);
Vue.component('app-todo',);
Vue.component('app-modal',);
Vue.component('app-data',);
Vue.component('app-user-select',);
Vue.component('app-file-drop-zone',);
Vue.component('currency-input',);
Vue.component('app-select',);
Vue.component('app-priority-select',);
Vue.component('app-search-lookup-filter',);

Vue.component('chart-data-labels',);
