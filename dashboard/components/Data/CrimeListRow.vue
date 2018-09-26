<template>
    <tr>
        <td>{{ crime.compnos }}</td>
        <td>{{ crime.reportingArea }}</td>
        <td>{{ crime.incidentType }}</td>
        <td>{{ crime.reptDistrict }}</td>
        <td>{{ crime.mainCrimeCode }}</td>
        <td>{{ crime.computedCrimeCode }}</td>
    </tr>
</template>
<script>
export default {
  name: 'CrimeListRow',
  props: [ 'crime' ]
};
</script>
