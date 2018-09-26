<template>
    <div>

        <section class="container">

            <div>
                <h1 class="subtitle">
                    Inscription
                </h1>
                <p>
                    Please fill this form to register to the HVMM application.
                    Once done, your account has to be validated by administration.
                </p>
            </div>

            <section class="container">
                <div class="box">

                    <form>
                        <label class="label">First Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Enter your Frist Name">
                        </div>

                         <div class="field">
                           <label class="label">Username</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter your username">
                            </div>
                        </div>

                         <div class="field">
                            <label class="label">E-mail</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter your E-mail">
                            </div>
                        </div>
                        
                         <div class="field">

                        <label class="label">Grade</label>
                        <div class="control">
                            <div class="select">
                            <select>
                                <option>Agent</option>
                                <option>Detective</option>
                                <option>Chief Police Officer</option>

                            </select>
                            </div>
                        </div>
                        </div>

                        <button class="button is-block is-info is-fullwidth">Login</button>
                    </form>
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

