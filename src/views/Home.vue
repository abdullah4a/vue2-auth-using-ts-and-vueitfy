<template>
  <v-app>
    <v-app-bar dark max-height="70">
      <slot name="appbar"></slot>
    </v-app-bar>
    <v-main>
      <slot name="content"></slot>
    </v-main>
    <v-footer dark>

    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
}
</script>
