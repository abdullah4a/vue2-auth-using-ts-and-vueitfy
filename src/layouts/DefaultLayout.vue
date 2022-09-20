<template>
  <v-app>

    <!-- Header bar -->
<!--    <v-toolbar height="66px">-->

<!--      &lt;!&ndash; Mobile nav toggle &ndash;&gt;-->
<!--      <v-btn v-if="isMobile" icon @click.stop="toggleNavDrawer">-->
<!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
<!--      </v-btn>-->

<!--      &lt;!&ndash; Brand &ndash;&gt;-->
<!--      <v-toolbar-title>-->
<!--        <router-link class="header__logo-link" to="/">-->
<!--          <AppLogo color="#ffffff" width="90"/>-->
<!--        </router-link>-->
<!--      </v-toolbar-title>-->

<!--      <v-spacer/>-->

<!--      &lt;!&ndash; User account &ndash;&gt;-->
<!--      <v-toolbar-items>-->
<!--        <AccountNav/>-->
<!--      </v-toolbar-items>-->

<!--    </v-toolbar>-->

    <!-- Two column main layout -->
    <v-layout style="position:relative;">

      <!-- Global site nav -->
      <SiteNav :defaultMini="defaultMini" :drawerModel="_navDrawer" :isMobile="isMobile"
               @toggleDrawer="toggleNavDrawer"/>

      <!-- Main content wrappers -->
      <v-main class="grey lighten-4">
        <v-container class="fill-height" fluid style="padding:0;">

          <!-- Router view content slot -->
          <slot/>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import AccountNav from '@/components/nav/AccountNav.vue';
import AppLogo from '@/components/nav/AppLogo.vue';
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

  private get defaultMini(): boolean {
    const {smAndUp, mdAndDown} = this.$vuetify.breakpoint;
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

  private toggleNavDrawer(visible: boolean): void {
    this.navDrawer = visible;
  }

}
</script>

<style scoped>
.header__logo-link {
  display: flex;
}

.tool-bar {
  background-color: #027f84;
}
</style>


