<template>
    <div>

        <section class="hero-body">
            <div>
                <h1 class="subtitle">
                    Data visualisation page
                </h1>
            </div>
        </section>
        <LineChart/>
    </div>
</template>


<script>
import LineChart from '~/components/Charts/LineChart.vue'
export default {
  components: {
    LineChart
  }
}
</script>