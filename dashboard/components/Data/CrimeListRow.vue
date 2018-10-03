<template>
    <tr>
        <td>{{ crime.compnos }}</td>
        <td>{{ crime.reportingArea }}</td>
        <td>{{ crime.incidentType }}</td>
        <td>{{ crime.reptDistrict }}</td>
        <td>{{ crime.mainCrimeCode }}</td>
        <td>{{ crime.computedCrimeCode }}</td>
        <td>
            <a @click="details" class="button is-danger">Details</a>
        </td>
    </tr>
</template>
<script>
export default {
  name: 'CrimeListRow',
  props: [ 'crime' ],
   methods: {
    onDetailsClick() {
      this.$emit('details', this.crime.id);
    }
   }
};
</script>
