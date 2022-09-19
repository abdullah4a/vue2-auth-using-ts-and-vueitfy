import AuthAPI from '@/services/api/auth.service';
import {ActionTree} from 'vuex';
import {RootState} from '../types';
import {AuthState} from './types';
import {
    DELETE_TOKEN,
    LOGOUT,
    SAVE_COMPANY,
    SAVE_TOKEN,
    SAVE_USER,
    SET_SELECTED_BRANCHES,
    SET_UPLOADING,
    SET_USER_BRANCHES,
} from './mutations';
import * as Sentry from '@sentry/browser';
import {branchFilter} from '@/helpers/branch-filter';

export const actions: ActionTree<AuthState, RootState> = {
    async login({commit, dispatch}, credentials) {
        try {
            const resp = await AuthAPI.login(credentials);
            commit(SAVE_TOKEN, resp.data.access_token);
            return await dispatch('getUser');
        } catch (error) {
            return error.response.data;
        }
    },
    async signUp(credentials) {
        try {
            return await AuthAPI.signup(credentials);
        } catch (error) {
            return error.response.data;
        }
    },

    logout({commit}) {
        commit(LOGOUT);
        return AuthAPI.logout();
    },

    async sendPasswordReset({commit}, data) {
        try {
            const resp = await AuthAPI.sendPasswordReset(data);
            return resp.data;
        } catch (error) {
            return error.response.data;
        }
    },

    async resetPassword({commit}, data) {
        commit(SET_UPLOADING, true);

        const successful = await AuthAPI.resetPassword(data).then(
            () => true,
            () => false,
        );

        commit(SET_UPLOADING, false);
        return successful;
    },

    async getUser({commit, dispatch}) {
        try {
            const data = await AuthAPI.me();
            if (data) {
                const {defaultBranch} = data;
                const allBranches: Array<{
                    text: string;
                    value: number;
                }> = defaultBranch ? [branchFilter(defaultBranch)] : [];
                if (!!defaultBranch?.webId) {
                    commit(SET_SELECTED_BRANCHES, [defaultBranch?.webId]);
                }
                commit(SET_USER_BRANCHES, allBranches);
            }
            commit(SAVE_USER, data);

            // Set Sentry user meta and tag enterpriseId
            Sentry.configureScope((scope) => {
                scope.setUser({
                    id: `${data.webId}`,
                    email: data.email,
                });
                scope.setTag('client_id', `${data.clientId}`);
                scope.setTag('customer_id', `${data.customerId}`);
            });
            return data;
        } catch (error) {
            commit(LOGOUT);
            commit(DELETE_TOKEN);
            throw error.response ? error.response.data : error.message;
        }
    },

    async getUserCompany({commit}, userId: number) {
        try {
            const resp = await AuthAPI.company(userId);
            commit(SAVE_COMPANY, resp.data);
            return resp.data;
        } catch (error) {
            return error.response.data;
        }
    },

    updateUser({commit, state}, user) {
        if (state.user === null) {
            return;
        }

        const id = state.user.webId;
        const fullUser = {...state.user, ...user};
        const requestData = {
            description: fullUser.description,
            email: fullUser.email,
            status: fullUser.status,
            phoneNumber: fullUser.phoneNumber,
            customerId: fullUser.customerId,
            birthday: fullUser.birthday,
        };

        commit(SET_UPLOADING, true);

        return AuthAPI.update(id, requestData).then(
            (data) => {
                commit(SAVE_USER, data);
                commit(SET_UPLOADING, false);

                return data;
            },
            (error) => {
                commit(SET_UPLOADING, false);
                throw new Error(error.response.data);
            },
        );
    },

    validate({dispatch, state}): Promise<any> {
        if (!state.token) {
          return Promise.resolve(false);
        }

        if (!state.user) {
            return dispatch('getUser');
        }

        return Promise.resolve(true);
    },
};
