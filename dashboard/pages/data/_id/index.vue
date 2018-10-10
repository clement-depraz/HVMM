<template>
<div>
  <section class="container">
    <div>
    <h1 class="subtitle is-centered">Details for the crime {{ Crime.compnos }}</h1>
      <CrimeDetails :crime="Crime"/>
    </div>
  </section>
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
        return this.$store.state.crimeDetails
        }
    },
}
</script>