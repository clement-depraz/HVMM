<template>
    <div>

        <section class="section">
            <div >
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <h1 class="subtitle">
                            Crimes and offenses                      
                        </h1>
                        <table class="table table-striped ">
                        <thead>
                        <tr>
                            <th>compnos</th>
                            <th>reportingArea</th>
                            <th>incidentType</th>
                            <th>reptDistrict</th>
                            <th>mainCrimeCode</th>
                            <th>computedCrimeCode</th>
                        </tr>
                        </thead>
                        <tbody>
                        <UserListRow
                            v-for="crime in Crimes"
                            :key="crime.compnos"
                            :crime="crime"
                            @details="crimeDetails"/>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>
import CrimeListRow from '~/components/Data/CrimeListRow.vue'

export default {
  middleware: 'auth',
  components: {
    CrimeListRow
    },
    methods: {
        crimeDetails(userId) {
            console.log('crime');
        }
    },
    async fetch ({store, error}) {
      try 
      {
       //await store.dispatch('setCrimes')
      }
      catch (e) {
        error({ statusCode: 404, message: 'Not Found !' })
      }
    },
    computed: {
      Crimes () {
        return this.$store.state.crimes
      }
    }
}
</script>