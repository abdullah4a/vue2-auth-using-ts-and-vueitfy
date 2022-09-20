<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
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
        Forgot your password:
        <router-link :to="{ name: 'auth.forgot' }" tabindex="-1">{{
            'click here!'
          }}
        </router-link>
                </span>
      </v-flex>
      <v-flex>
        <span class="text-caption">
          Don’t have an account:
        <router-link :to="{ name: 'auth.signup' }" tabindex="-1">{{
            'Register here'
          }}
        </router-link>
        </span>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4 justify-space-between  align-center" row wrap>
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

  submit() {
    const result = this.$refs.form.validate();
    if (result) {
      this.processing = true;
      this.$store
          .dispatch('auth/login', {
            username: this.email,
            password: this.password,
          })
          .then((response) => {
            this.openSnack("Success", 'success');
            this.processing = false;
          })
          .catch((error) => {
            this.openSnack(error.message, 'error');
            this.processing = false;
            throw error;
          });
    }
  }

  openSnack(msg, clas) {
    this.snackBar = true;
    this.successMsg = msg;
    this.snackClass = clas;
  }
}
</script>

<style scoped>

</style>
