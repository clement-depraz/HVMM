<template>
  <div class="error-page">
    <blockquote>Oops, something went wrong!</blockquote>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

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
