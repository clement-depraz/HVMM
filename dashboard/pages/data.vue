<template>
    <div>

        <section class="section">
            <div >

                        <h1 class="subtitle">
                            Crimes and offenses                      
                        </h1>
                        <nav class="panel">
                            <p class="panel-heading">
                                Filters
                            </p>
                            <div class="panel-block">
                                <p class="control has-icons-left">
                                    <label>compnos</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Incident Type</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Reporting District</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Weapon Type</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Domestic</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Shooting</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>From Date</label>
                                    <input class="input is-small" type="text" placeholder="search">
                                </p>
                            </div>

                              <div class="panel-block">
                                <button class="button is-link is-outlined is-fullwidth">
                                    Apply research filters
                                </button>
                            </div>
                        </nav>
                        <div class="columns">
                             <div class="column">
                                <table class="table table-striped ">
                                <thead>
                                <tr>
                                    <th>COMPNOS</th>
                                    <th>Incident Type</th>
                                    <th>Reporting District</th>
                                    <th>Weapon Type</th>
                                    <th>Domestic</th>
                                    <th>Shooting</th>
                                    <th>From Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <CrimeListRow
                                    v-for="crime in Crimes"
                                    :key="crime.compnos"
                                    :crime="crime"
                                    @details="crimeDetails"
                                    @delete="crimeDelete"/>
                                </tbody>
                            </table>
                        </div>
                             <div class="column">
                            <div >
                                <nuxt-child :key="$route.params.id" />
                            </div>
                             </div>
                        </div>
            </div>
        </section>

    </div>
</template>


<script>
import CrimeListRow from '~/components/Data/CrimeListRow.vue'

export default {
  components: {
    CrimeListRow
    },
    async fetch ({store}) {
          await store.dispatch('setCrimes')
    },
    //middleware: 'auth',
    computed: {
      Crimes () {
        return this.$store.state.crimes
      }
    },
    methods: {
        crimeDetails(crimeId) {
        this.$store.dispatch({
          type: 'setCrimeDetails',
          crimeId: crimeId
            })         
        },
        crimeDelete(crimeId) {
        this.$store.dispatch({
          type: 'deleteCrime',
          crimeId: crimeId
            })         
        }
    },
}
</script>