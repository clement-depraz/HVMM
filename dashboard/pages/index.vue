<template>

    <div class="container">

        <div class="section">

          <h1 class="title">
            HVMM
          </h1>
          <h2 class="subtitle">
            Hapi Vue Mongo Microservice project
          </h2>

          <div>
            <div class="columns">
               <div class="column is-1 is-offset-4">
                <router-link class="button is-dark" to="/login" tag="button">LOGIN</router-link>
               </div>            
              <div class="column is-4 ">
                <router-link class="button is-dark" to="/register" tag="button">REGISTER</router-link>
              </div>

            </div>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>


