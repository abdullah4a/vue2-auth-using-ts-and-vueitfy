// import AuthStorage from '@/services/auth-storage';
import {Module} from 'vuex';
import {AuthState} from './types';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';

// STATE
const state: AuthState = {
  token: null,
  user: null,
  company: null,
  uploading: false,
  selectedUserBranches: [],
  userAllowedBranches: [],
  prismConfiguration: [],
};

// STORE
const AuthStore: Module<AuthState, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default AuthStore;
