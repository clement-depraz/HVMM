<template>
        <!-- START NAV -->
    <div>
        <nav class="navbar is-dark has-shadow " v-if="!$store.state.authUser" >
            <div class="container">
                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-start">
                        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
                    </div>

                </div>
            </div>
            <nav class="navbar is-dark">
                <div class="container">
                    <div class="navbar-burger burger" data-target="navMenu"><span></span></div>
                </div>
                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                        <nuxt-link class="navbar-item" to="/login">Login</nuxt-link>
                        <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>

                        
                    </div>
                </div>
            </nav>
        </nav>
        <nav class="navbar is-dark has-shadow " v-else>
            <div class="container">
                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-start" >
                        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>

                        <nuxt-link class="navbar-item" to="/entries">Entries</nuxt-link>

                        <nuxt-link class="navbar-item" to="/data">Dashboard</nuxt-link>

                        <nuxt-link class="navbar-item" to="/admin">Admin</nuxt-link>        
                    </div>
<!-- v-if="$store.state.authUser.isAdmin" -->
                </div>
            </div>
            <nav class="navbar is-dark">

                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                      <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">account</a> 
                        <div class="navbar-dropdown">
                            <a class="navbar-item" @click="logout" >Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>

    </div>
    
<!-- END NAV -->
</template>

<script>
export default {
  
   methods: {
       logout() {
          this.$store.dispatch({
          type: 'logout'})
         }
    }
  
}
</script>

