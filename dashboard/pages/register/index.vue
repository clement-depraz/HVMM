<template>
  <section class="section">

      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="subtitle has-text-centered">Register!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">FirstName</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="firstname"
                  v-model="firstname"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">LastName</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="lastname"
                  v-model="lastname"                 
                  required
                >
              </div>
            </div>
              <div class="field">
                <label class="label">Rank</label>
                <div class="control">
                  <div class="select">
                    <select v-model="rank">
                      <option value="3">Agent</option> <!-- 3 -->
                      <option value="2">Detective</option>
                      <option value="1">Police Chief</option> <!-- 1 -->
                    </select>
                  </div>
                </div>
              </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>

  </section>
</template>

<script>
export default {
data() {
    return {
      lastname: '',
      firstname: '',
      rank: '',
      email: '',
      password: '',
      error: null
    }
  },
   methods: {
       register(firstname, lastname, rank, email, password ) {
          this.$store.dispatch({
          type: 'register',
          firstname: this.firstname,
          lastname: this.lastname,
          rank: this.rank,
          email: this.email,
          password: this.password
        })
    }
   }
}
</script>

