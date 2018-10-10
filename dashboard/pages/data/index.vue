<template>
    <div>

        <section class="section">
            <div >

                        <h1 class="subtitle">
                            Crimes and offenses                      
                        </h1>
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