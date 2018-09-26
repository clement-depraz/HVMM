<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="newPost.compnos">Internal	BPD	report number</AppControlInput>
    <AppControlInput v-model="newPost.reportingArea">RA	number associated with the where the crime was reported	from</AppControlInput>
    <AppControlInput v-model="newPost.incidentType">BPD incident classification</AppControlInput>
    <AppControlInput v-model="newPost.reptDistrict">What district the crime was reported in</AppControlInput>    
    <AppControlInput v-model="newPost.mainCrimeCode">BRIC classification of crome code for analysis</AppControlInput>       
    <AppControlInput v-model="newPost.computedCrimeCode"><p>Crime code	determined	by	looking	at	all	of	the	supplements	involved in	the	incident and determining the
         lowest	crime code. </p> Lower the crime code more serious the crime</AppControlInput>           
    <AppControlInput
      control-type="textarea"
      v-model="newPost.computedCrimeCodeDesc">Textual description of the above crime code</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      newPost: this.post
        ? { ...this.post }
        : {
            compnos: "",
            reportingArea: "",
            incidentType: "",
            reptDistrict: "",
            previewText: "",
            mainCrimeCode: "",
            computedCrimeCodeDesc: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.newPost)
    },
    onCancel() {
      this.$router.push("/data");
    }
  }
};
</script>
