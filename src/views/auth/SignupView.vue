<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="">
    <v-text-field
        ref="name"
        v-model="email"
        :rules="emailRules"
        append-icon="mdi-account"
        autocapitalize="none"
        label="Name"
        required
        validate-on-blur
    />
    <v-text-field
        v-model="email"
        :rules="emailRules"
        append-icon="mdi-account"
        autocapitalize="none"
        label="Last Name"
        required
        validate-on-blur
    />
    <v-text-field
        ref="email"
        v-model="email"
        :rules="emailRules"
        append-icon="mdi-account"
        autocapitalize="none"
        label="Email"
        required
        validate-on-blur
    />
    <v-text-field
        v-model="password"
        :rules="passwordRules"
        append-icon="mdi-lock"
        label="Password"
        required
        type="password"
        validate-on-blur
    />

    <v-layout class="mt-4 justify-space-between align-center" row wrap>
      <v-flex>
                <span class="text-caption">
        Have an account:
        <router-link :to="{ name: 'auth.login' }" tabindex="-1">{{
            'Sigin'
          }}
        </router-link>
                </span>
      </v-flex>
      <v-flex>
        <v-btn
            :disabled="processing"
            :loading="processing"
            color="primary"
            type="submit"
        >
          {{ 'Login' }}
        </v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
        v-model="snackBar"
        :color="snackClass"
        @click="snackBar=!snackBar"
    >{{ successMsg }}
    </v-snackbar
    >
  </v-form>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  valid = true;
  password = '';
  passwordRules = [];
  email = '';
  snackClass = '';
  successMsg = '';
  emailRules = [];
  processing = false;
  snackBar = false;
  show = false;

  created() {
    this.emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ];
  }

}
</script>

<style scoped>

</style>
