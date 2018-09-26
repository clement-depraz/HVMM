<template>
  <div>

    <section class="container">

      <div > 
        <h3 class="title is-1">Connection page</h3>
        <p class="subtitle">Please login to proceed.</p>
      </div>

      <section class="container">

          <div class="container">
              <div>

                  <div class="box">
                      <form>
                          <div class="field">
                              <label class="label">Username</label>
                              <div class="control">
                                  <input class="input" type="text" placeholder="Your Username" autofocus="">
                              </div>
                          </div>

                          <div class="field">
                              <label class="label">Password</label>
                              <div class="control">
                                  <input class="input" type="password" placeholder="Your Password">
                              </div>
                          </div>
                          <button class="button is-block is-info is-fullwidth">Login</button>
                      </form>
                  </div>

              </div>
          </div>
      </section>

    </section>

  </div>
</template>

<script>
export default {
  layout: 'clean'
}
</script>



