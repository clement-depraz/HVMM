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
                            <th>COMPNOS</th>
                            <th>Incident Type</th>
                            <th>Reporting District</th>
                            <th>Rept District</th>
                            <th>Weapon Type</th>
                            <th>Domestic</th>
                            <th>Shooting</th>
                            <th>From Date</th>
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
  components: {
    CrimeListRow
    },
    async fetch ({store}) {
          await store.dispatch('setCrimes')
    },
  middleware: 'auth',
    computed: {
      Crimes () {
        return this.$store.state.crimes
      }
    },
    methods: {
        crimeDetails(userId) {
            console.log('crimeDetails');
            
        }
    },
}
</script>