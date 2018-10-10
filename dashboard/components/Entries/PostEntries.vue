<template>
  <form method="post" @submit.prevent="onSave">
    <AppControlInput v-model="newPost.compnos" required>Internal	BPD	report number</AppControlInput>
    <AppControlInput v-model="newPost.reportingarea">RA	number associated with the where the crime was reported	from</AppControlInput>
    <AppControlInput v-model="newPost.incident_type_description">BPD incident classification</AppControlInput>
    <AppControlInput v-model="newPost.reptDistrict">What district the crime was reported in</AppControlInput>    
    <AppControlInput v-model="newPost.fromdate">Earliest	date	and	time	the	incident	could	have	taken	place </AppControlInput>          
    <AppControlInput v-model="newPost.main_crimecode">main_crimecode </AppControlInput>          
    <AppControlInput v-model="newPost.streetName">Street	name	the	incident	took	place</AppControlInput>          
    <AppControlInput v-model="newPost.xstreetname">Optional - Crosse street	the	incident	took	place</AppControlInput>          
    <AppControlInput v-model="newPost.weapontype">Detailed	info	on	the	weapon	type	(free	form	ﬁeld)</AppControlInput>          
    <AppControlInput v-model="newPost.location">location</AppControlInput>          
    <AppControlInput v-model="newPost.ucrpart">ucrpart</AppControlInput>          
    <AppControlInput v-model="newPost.day_week">day_week</AppControlInput>          
    <AppControlInput v-model="newPost.month">month</AppControlInput>          
    <AppControlInput v-model="newPost.year">year</AppControlInput>          
    <AppControlInput v-model="newPost.shooting">shooting</AppControlInput>          
    <AppControlInput v-model="newPost.domestic">domestic</AppControlInput>          
    <AppControlInput v-model="newPost.x">X	coordinate	(state	plane,	feet)	of	the	geocoded	address	loca6on	(obscured	to	the	street	segment	centroid	for	privacy). </AppControlInput>          
    <AppControlInput v-model="newPost.y">Y	coordinate	(state	plane,	feet)	of	the	geocoded	address	loca6on(obscured	to	the	street	segment	centroid	for	privacy). </AppControlInput>          
    <AppControlInput v-model="newPost.naturecode">naturecode</AppControlInput>          
    <AppControlInput v-model="newPost.shift">shift</AppControlInput>          
 
        
    <button  class="button is-success" type="submit">Save</button>
    <a
      class="button is-danger"
      type="button"
      style="margin-left: 10px"
      @click="onCancel">Cancel</a>
  </form>
</template>

<!-- Middleware pour la validation des données entrées ?  -->

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
