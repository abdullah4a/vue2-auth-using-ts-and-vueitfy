<template>
  <v-app>
    <!-- Default router outlet -->
    <component :is="layoutComponent">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  private closestRouteMeta(route: any, key: string) {
    const metaValues: any[] = [];
    route.matched.reduce((accumulator: any[], currentValue: any) => {
      if (currentValue.meta[key]) {
        accumulator.push(currentValue.meta[key]);
      }
      return accumulator;
    }, metaValues);

    // closest matching layout of parent.
    if (metaValues.length >= 1) {
      return metaValues.pop();
    }

    return null;
  }
  private get layoutComponent(): string {
    const layouts: any[] = [];
    this.$route.matched.reduce((accumulator, currentValue) => {
      if (currentValue.meta.layout) {
        accumulator.push(currentValue.meta.layout);
      }
      return accumulator;
    }, layouts);

// closest matching layout of parent.
    if (layouts.length >= 1) {
      return layouts.pop();
    }

    return this.closestRouteMeta(this.$route, 'layout') || 'app-layout-default';
  }}
</script>

