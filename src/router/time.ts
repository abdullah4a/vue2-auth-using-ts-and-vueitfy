import TimeTracker from '@/views/time/TimeTracker.vue';
import TimeSheet from '@/views/time/TimeSheet.vue';
import {RouteConfig} from 'vue-router';
import {LICENSE_MODULES} from '@/interfaces/licenseSubscription.ts';
// import {APP_PERMISSIONS} from '@/interfaces/roles';

const routes: RouteConfig[] = [
  {
    path: '/time-tracker',
    component: TimeTracker,
    name: 'time.tracker',
    meta: {
      LICENSE: LICENSE_MODULES.ALLOW,
      PERMISSION: {
        name: 'ALLOW',
        action: 'READ',
      },
    },
  }, {
    path: '/time-sheet',
    component: TimeSheet,
    name: 'time.sheet',
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
