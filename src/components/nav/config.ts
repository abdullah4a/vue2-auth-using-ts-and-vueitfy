import I18n from '@/config/i18n';
import {APP_FEATURE_FLAG} from '@/interfaces/featureFlag';
import {LICENSE_MODULES} from '@/interfaces/licenseSubscription';
import {APP_PERMISSIONS} from '@/interfaces/roles';
import {Location} from 'vue-router';

export interface NavigationItemCommon {
    icon?: string;
    to?: Location;
    group?: string;
    items?: NavigationItem[];
}

interface NavigationItemNonDivider extends NavigationItemCommon {
    divider?: boolean;
    name: LICENSE_MODULES;
    permission?: APP_PERMISSIONS;
    featureGate?: APP_FEATURE_FLAG;
    title: string;
}

export type NavigationItem = NavigationItemNonDivider;

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        icon: 'dashboard',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.DASHBOARD,
        title: I18n.tc('default.dashboard'),
        to: {name: 'home'},
    },
    {
        icon: 'payments',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.REVENUE,
        title: I18n.tc('default.revenue.revenue', 1),
        items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.REVENUE,
                title: I18n.tc('default.revenue.revenue', 2),
                to: {name: 'revenues'},
            },
        ],
    },
    {
        icon: 'business',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: I18n.tc('default.customers', 2),
        items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.CUSTOMER,
                title: I18n.tc('default.customer.list'),
                to: {name: 'customers.list'},
            },  {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.CUSTOMER,
                title: I18n.tc('default.customer.family'),
                to: {name: 'customer.family.list'},
            },
        ],
    },
    {
        icon: 'group',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: I18n.tc('default.employee.title', 1),
        items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.EMPLOYEE,
                title: I18n.tc('default.employee.title', 2),
                to: {name: 'users.list'},
            },
        ],
    },
    {
        icon: 'supervisor_account',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: I18n.tc('default.client.title', 2),
        items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.CLIENT,
                title: I18n.tc('default.client.title'),
                to: {name: 'clients'},
            },
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.LOCATION,
                title: I18n.tc('default.branch.title'),
                to: {name: 'locations'},
            },
        ],
    },
    {
        icon: 'account_tree',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.SERVICE,
        title: I18n.tc('default.category', 2), items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.SERVICE,
                title: I18n.tc('default.category-list'),
                to: {name: 'services'},
            }],
    }, {
        icon: 'task',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.PERMISSION,
        title: I18n.tc('default.permissions.title', 2), items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.PERMISSION,
                title: I18n.tc('default.permissions.title') + ' ' + I18n.t('default.permissions.list'),
                to: {name: 'permission.list'},
            }],
    }, {
        icon: 'how_to_reg',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.ROLE,
        title: I18n.tc('default.roles.title', 2), items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.ROLE,
                title: I18n.tc('default.roles.title') + ' ' + I18n.t('default.permissions.list'),
                to: {name: 'role.list'},
            }],
    }, {
        icon: 'reviews',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.CUSTOMER_REVIEW,
        title: I18n.tc('default.customer-reviews.title', 2), items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.CUSTOMER_REVIEW,
                title: I18n.tc('default.customer-reviews.title') + ' ' + I18n.t('default.permissions.list'),
                to: {name: 'reviews'},
            }],
    },
    {
        icon: 'assignment',
        name: LICENSE_MODULES.ALLOW,
        title: I18n.tc('default.service'),
        group: 'scheduling',
        items: [
            {
                name: LICENSE_MODULES.ALLOW,
                permission: APP_PERMISSIONS.SCHEDULING,
                title: I18n.tc('default.scheduling'),
                to: {name: 'scheduling.index'},
            },
        ],
    },
    {
        icon: 'exit_to_app',
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.ALLOW,
        title: I18n.tc('default.account.sign-out'),
        to: {name: 'auth.logout'},
    },
];
