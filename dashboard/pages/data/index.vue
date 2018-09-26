<template>
    <div>

        <section class="hero-body">
            <div>
                <h1 class="subtitle">
                    Data visualisation page
                </h1>
            </div>
        </section>
        <div class="columns"> 
            <div class="column">
                <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>BPD	report numbe</th>
                    <th>RA	number</th>
                    <th>Description</th>
                    <th>district</th>
                    <th>BRIC classification</th>
                  </tr>
                </thead>
                <tbody>
                  <UserListRow
                    v-for="crime in crimes"
                    :key="crime.id"
                    :crime="crime"/>
                </tbody>
              </table>
            </div>
            <div class="column">
                <LineChart/> 
            </div>
        </div>
    </div>
</template>


<script>
import LineChart from '~/components/Data/Charts/LineChart.vue'
import CrimeListRow from '~/components/Data/CrimeListRow.vue'

export default {
  components: {
    LineChart, 
    CrimeListRow
  },
  async fetch ({store}) {
      await store.dispatch('setUsers')
    },
    computed: {
      Users () {
        return this.$store.state.users
      }
    }
}
</script>