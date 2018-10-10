<template>
    <tr>
        <td>{{ crime.compnos }}</td>
        <td>{{ crime.incident_type_description }}</td>
        <td>{{ crime.reptdistrict }}</td>
        <td>{{ crime.weapontype }}</td>
        <td>{{ crime.domestic }}</td>
        <td>{{ crime.shooting }}</td>
        <td>{{ crime.fromdate }}</td>
        <td>
       <!--        <a @click="onDetailsClick" class="button is-success">Details</a> -->
         <nuxt-link :to="'/data/'+crime.compnos" class="button is-info">Details</nuxt-link>   
        </td>
        <td>
            <a @click="onDeleteClick" class="button is-danger">Delete</a>
        </td>
    </tr>
</template>
<script>
export default {
  name: 'CrimeListRow',
  props: [ 'crime' ],
   methods: {
    onDetailsClick() {
      this.$emit('details', this.crime.compnos);
    },
    onDeleteClick(){
        this.$emit('delete', this.crime.compnos)
    }
   }
};
</script>
