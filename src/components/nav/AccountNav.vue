<template>
  <v-layout row wrap>
    <v-flex class="ma-3">
      <v-icon>mdi-person</v-icon>
    </v-flex>
    <v-flex>
      <v-menu v-model="menu" :close-on-content-click="true">
        <!-- Trigger -->
        <template v-slot:activator="{ on }">
          <v-btn v-if="countryFlag !== null" class="chars" fab icon small v-on="on">
            {{ countryFlag }}
          </v-btn>
          <v-btn v-else fab icon small v-on="on">
            <v-icon>person</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list v-if="user">
            <v-list-item class="py-3">
              <v-avatar>
                <v-img :src="'data:'+user.image.type+';base64,'+user.image.fileBytes" alt=""/>
              </v-avatar>
              <v-list-item-content class="ml-3">
                <v-list-item-title v-if="user">{{
                    user.description
                  }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="company">{{
                    company.description
                  }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider/>

          <v-list class="py-0">
            <template v-for="link in links">
              <v-list-item :key="link.title" :to="{ name: link.name }" active-class>
                <v-list-item-action>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="link.spacer" :key="`${link.title}-spacer`"/>
            </template>
          </v-list>
        </v-card>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {getCountryInformation} from '@/mixins/CountryDetail';
import eventBus from '@/EventBus';

@Component
export default class AccountNav extends Vue {
  private menu = false;
  private countryFlag: string | null = null;
  private countryName: string | null = null;

  private get links() {
    return [
      {
        title: this.$t('default.account.my-account'),
        name: 'account.index',
        icon: 'edit',
        spacer: false,
      },
      {
        title: this.$t('default.account.change-password'),
        name: 'account.password',
        icon: 'security',
        spacer: true,
      },
      {
        title: this.$t('default.account.sign-out'),
        name: 'auth.logout',
        icon: 'exit_to_app',
        spacer: false,
      },
    ];
  }

  private get user() {
    return this.$store.getters['auth/user'];
  }

  private get company() {
    return this.$store.getters['auth/company'];
  }
}
}
</script>
<style lang="scss" scoped>
.chars {
  vertical-align: text-top;
  min-height: 20px;
  text-decoration: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  color: #ccc;
  font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;
  font-variant-emoji: emoji;
}
</style>
