<template>
        <!-- START NAV -->
    <nav class="navbar is-light has-shadow  ">
        <div class="container">
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <nuxt-link class="navbar-item" to="/">Home</nuxt-link>

                    <nuxt-link class="navbar-item" to="/crimes">Crimes and Offenses Entries</nuxt-link>

                    <nuxt-link class="navbar-item" to="/data">Dashboard</nuxt-link>

                    <nuxt-link class="navbar-item" to="/admin">Admin</nuxt-link>        
                </div>
            </div>
        </div>
        <nav class="navbar is-light">
            <div class="container">
                <div class="navbar-burger burger" data-target="navMenu"><span></span></div>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Account</a>
                    <div class="navbar-dropdown"><a class="navbar-item">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </nav>
<!-- END NAV -->
</template>