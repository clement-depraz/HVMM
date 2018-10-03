<template>
  <div class="error-page">

    <h1 v-if="error.statusCode === 403">403 You are not allowed !</h1> 
    <h1 v-if="error.statusCode === 401">403 You are not authenticated !</h1> 

    <blockquote v-else>Oops, something went wrong!</blockquote>
    <!-- Definir l'erreur en fonction du user -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<script>

export default {
  props: ['error'],
}

</script>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}

blockquote {
 font-size:1.2rem;
 color:#999;
 border-left:.25rem solid #dfe2e5;
 margin-left:0;
 padding-left:1rem
}
</style>

