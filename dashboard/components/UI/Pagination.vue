<template>
    <div>
        <li>
            <a @click="onGoToPage" class="pagination-link"> {{ page }}</a>
        </li>
    </div>
</template>
                          
<script>
export default {
  name: 'Pagination',
  props: [ 'page' ],
   methods: {
    onGoToPage() {
      this.$emit('goTo', this.page);
    }
   } 
}
</script>