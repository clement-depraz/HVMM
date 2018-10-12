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
                                    <input v-model="compnos" class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Incident Type</label>
                                    <input v-model="incidentType" class="input is-small" type="text" placeholder="search">
                                </p>

                                <p class="control has-icons-left">
                                    <label>Reporting District</label>
                                    <input v-model="reptDist" class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Weapon Type</label>
                                    <input v-model="weaponType" class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Domestic</label>
                                    <input v-model="domestic" class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>Shooting</label>
                                    <input v-model="shooting" class="input is-small" type="text" placeholder="search">
                                </p>
                                <p class="control has-icons-left">
                                    <label>From Date</label>
                                    <input v-model="fromDate" class="input is-small" type="text" placeholder="search">
                                </p>
                            </div>

                              <div class="panel-block">
                                <button class="button is-link is-outlined is-fullwidth" @click="searchFilters(1)">
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
                            <ul class="pagination-list">
                                <a @click="searchFilters(PreviousPage)" class="pagination-previous">Previous</a>
                                <a @click="searchFilters(NextPage)" class="pagination-next">Next page</a>
                            </ul> 
                         
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
    CrimeListRow,
    },
    async fetch ({store}) {
          await store.dispatch('setCrimes')
    },
    middleware: 'auth',
    data() {
        return {
        compnos: null,
        incidentType: null,
        reptDist: null,
        weaponType: null,
        domestic: null,
        shooting: null,
        fromDate: null
        }
    },
    computed: {
      Crimes () {
        return this.$store.state.crimes
      },
      CurrentPage () {
          return this.$store.state.currentPage
      },
      NextPage () {
          return this.$store.state.currentPage + 1
      },
      PreviousPage () {
          return this.$store.state.currentPage - 1
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
        },
        searchFilters(page){
            this.$store.dispatch({
                type: 'searchCrimesFilter',
                compnos: this.compnos,
                incidentType: this.incidentType,
                reptDist: this.reptDist,
                weaponType: this.weaponType,
                domestic: this.domestic,
                shooting: this.shooting,
                fromDate: this.fromDate,
                page: page
            })
        }
    },
}
</script>