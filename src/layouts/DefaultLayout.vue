<template>
  <v-app>

    <!-- Header bar -->
    <v-toolbar dark flat height="70">

      <!-- Mobile nav toggle -->
      <v-btn v-if="isMobile" icon @click.stop="toggleNavDrawer" >
        <v-icon>menu</v-icon>
      </v-btn>

      <!-- Brand -->
      <v-toolbar-title>
        <router-link to="/" class="header__logo-link">
          <AppLogo color="#ffffff" width="90" />
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <!-- User account -->
      <v-toolbar-items>
        <AccountNav />
      </v-toolbar-items>

    </v-toolbar>

    <!-- Two column main layout -->
    <v-layout style="position:relative;">

      <!-- Global site nav -->
      <SiteNav :drawerModel="_navDrawer" :isMobile="isMobile" :defaultMini="defaultMini" @toggleDrawer="toggleNavDrawer" />

      <!-- Main content wrappers -->
      <v-content class="grey lighten-4">
        <v-container fluid style="padding:0;" class="fill-height">

          <!-- Router view content slot -->
          <slot />
        </v-container>
      </v-content>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import AccountNav from '@/components/nav/AccountNav.vue';
import AppLogo from '@/components/branding/AppLogo.vue';
import SiteNav from '@/components/nav/SiteNav.vue';

@Component({
  components: {
    AccountNav,
    AppLogo,
    SiteNav,
  },
})
export default class DefaultLayout extends Vue {
  private navDrawer = false;

  private toggleNavDrawer(visible: boolean): void {
    this.navDrawer = visible;
  }

  private get defaultMini(): boolean {
    const { smAndUp, mdAndDown } = this.$vuetify.breakpoint;
    return smAndUp && mdAndDown;
  }

  private get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

  private get _navDrawer(): boolean {
    if (this.$vuetify.breakpoint.smAndUp) {
      return true;
    }
    return this.navDrawer;
  }

}
</script>

<style scoped>
.header__logo-link {
  display: flex;
}
</style>


