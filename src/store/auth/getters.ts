import {GetterTree} from 'vuex';
import {RootState} from '../types';
import {AuthState} from './types';
import {groupBy} from 'lodash';
import {CrudAction, APP_PERMISSIONS, IPermission} from '@/interfaces/roles';

export const getters: GetterTree<AuthState, RootState> = {
    token(state) {
        return state.token;
    },

    user(state) {
        return state.user;
    },

    userSelectedCompany(state) {
        return null;
    },

    company(state) {
        return state.company;
    },

    loggedIn(state) {
        return !!state.token;
    },

    selectedUserBranches(state) {
        return state.selectedUserBranches;
    },

    userAllowedBranches(state) {
        return state.userAllowedBranches;
    },

    userPermissions(state) {
        return state.user ? state.user.permissions : [];
    },

    userPermissionsByModule(_, getter): Record<string, IPermission[]> {
        return groupBy(getter.userPermissions as IPermission[], ({code}) =>
            code.slice(code.indexOf(':') + 1, code.lastIndexOf(':')),
        );
    },

    isAuthorizedUserAction(
        _,
        getter: {
            userPermissionsByModule: Record<string, IPermission[]>;
            userFeatureGated: string[];
        },
    ) {
        return (moduleName: APP_PERMISSIONS, action: CrudAction) => {
            // Why it must be after return?
            if (moduleName === APP_PERMISSIONS.ALLOW) {
                return true;
            }
            const modulePermission = getter.userPermissionsByModule[moduleName] || [];
            if (action === 'READ') {
                // Allow READ access if any other access is allowed
                return modulePermission.length > 0;
            }
            return modulePermission.findIndex(({type}) => action === type) > -1;
        };
    },
    userFeatureGated(state) {
        return state.user ? state.user.featureGated : [];
    },
    userPrismConfiguration(state) {
        return state.prismConfiguration ? state.prismConfiguration : [];
    },
};
