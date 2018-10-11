<template>
<div>

    <div>
    <h1 class="subtitle is-centered">Details for the crime {{ Crime.compnos }}</h1>
      <CrimeDetails :crime="Crime"/>
    </div>
</div>
</template>

<script>
import CrimeDetails from '~/components/Data/CrimeDetails.vue'
 
export default {
    components: {
    CrimeDetails
    },
      validate({ params }) {
      return !isNaN(+params.id)
    },
    //middleware: 'auth',
     async fetch ({params, store}) {
          console.log(params)
          store.dispatch({
          type: 'setCrimeDetails',
          crimeId: params.id
        })
    },
    computed: {
      Crime () {
        let Crime = this.$store.state.crimeDetails
        console.log(Crime)
        if (Crime === undefined) {
            this.$router.replace({ path: '/' })
          }
        return Crime
        }
    },
}
</script>