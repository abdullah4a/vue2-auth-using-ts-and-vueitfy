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
    title: string;
}

export type NavigationItem = NavigationItemNonDivider;

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        icon: 'mdi-view-dashboard',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Dashboard",
        to: {name: 'home'},
    },
    {
        icon: 'mdi-calendar-clock-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: 'Time Sheet',
        to: {name: 'time.sheet'},

    }, {
        icon: 'mdi-clock-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: 'Time Tracker',
        to: {name: 'time.tracker'},
    }, {
        icon: 'mdi-calendar',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Calendar",
        to: {name: 'home'},
    }, {
        icon: 'mdi-clipboard-account-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Dashboard",
        to: {name: 'home'},
    }, {
        icon: 'mdi-clipboard-account-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Projects",
        to: {name: 'home'},
    }, {
        icon: 'mdi-clipboard-account-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Team",
        to: {name: 'home'},
    }, {
        icon: 'mdi-receipt-text-check-outline',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        title: "Invoices"
,        to: {name: 'home'},
    },
    {
        icon: 'mdi-logout',
        divider: true,
        name: LICENSE_MODULES.ALLOW,
        permission: APP_PERMISSIONS.ALLOW,
        title: "Logout",
        to: {name: 'auth.logout'},
    },
];
