import AuthStorage from '@/services/auth-storage';
import { Module } from 'vuex';
import { RootState } from '../types';
import { AuthState } from './types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// STATE
const state: AuthState = {
  token: AuthStorage.getToken(),
  user: null,
  company: null,
  uploading: false,
  selectedUserBranches: [],
  userAllowedBranches: [],
  prismConfiguration: [],
};

// STORE
const AuthStore: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default AuthStore;
