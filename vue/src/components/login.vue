<template>
  <div id="app">
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <article v-show="errorMessage" class="message is-warning">
            <div class="message-body">
              {{ $t(errorMessage) }}
            </div>
          </article>
          <div class="column is-4 is-offset-4">
            <div class="box">
               <div class="field">
                 <div class="control">
                   <input class="input is-large" type="email" placeholder="Eメール" v-model="email" autofocus="" v-validate="'required|email'" name="email">
                 </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="パスワード" v-model="password" v-validate="'required|min:6|max:20'" maxlength="20" name="password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                <input type="checkbox">
                ログインしたままにする
                </label>
               </div>
               <button class="button is-block is-info is-large is-fullwidth" @click="login()" :disabled="!isValidated" >„É≠„Ç∞„Ç§„É≥</button>
              </div>
              <p class="has-text-grey">
                <a href="..">パスワードを忘れた方はこちら</a>
              </p>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch(
        'auth/create',
        {
          'user': {
            email: this.email,
            password: this.password
          }
        }
      )
    }
  },
  computed: {
    isValidated () {
      return Object.keys(this.fields).every(k => this.fields[k].validated) &&
        Object.keys(this.fields).every(k => this.fields[k].valid)
    },
    token () {
      return this.$store.state.auth.token
    },
    errorMessage () {
      return this.$store.state.message.error
    }
  },
  created: function () {
    this.$store.dispatch('message/destroy')
    // already logined
    if (this.$store.state.auth.token) {
      this.$router.push('/')
    }
  },
  watch: {
    token (newToken) {
      this.$router.push('/')
    }
  }
}
</script>