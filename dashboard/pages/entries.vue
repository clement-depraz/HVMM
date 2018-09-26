<template>
    <div>
        <section class="container">
            <div>
                <h1 class="subtitle">
                    Crimes and Offenses entry page
                </h1>
                <PostEntries/>
            </div>
        </section>
    </div>
</template>


<script>
import PostEntries from '~/components/Entries/PostEntries.vue'
export default {
  components: {
    PostEntries
  },
    methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>