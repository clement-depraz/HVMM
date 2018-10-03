<template>
  <form>
    <AppControlInput v-model="newPost.compnos">Internal	BPD	report number</AppControlInput>
    <AppControlInput v-model="newPost.reportingArea">RA	number associated with the where the crime was reported	from</AppControlInput>
    <AppControlInput v-model="newPost.incidentType">BPD incident classification</AppControlInput>
    <AppControlInput v-model="newPost.reptDistrict">What district the crime was reported in</AppControlInput>    
    <AppControlInput v-model="newPost.fromDate">Earliest	date	and	6me	the	incident	could	have	taken	place </AppControlInput>          
    <AppControlInput v-model="newPost.toDate">Latest	date	and	6me	the	incident	could	have	taken	place </AppControlInput>          
    <AppControlInput v-model="newPost.streetName">Street	name	the	incident	took	place</AppControlInput>          
    <AppControlInput v-model="newPost.xStreetName">Optional - Crosse street	the	incident	took	place</AppControlInput>          
    <AppControlInput v-model="newPost.weaponType">Detailed	info	on	the	weapon	type	(free	form	ﬁeld)</AppControlInput>          
    <AppControlInput v-model="newPost.weaponType">Detailed	info	on	the	weapon	type	(free	form	ﬁeld)</AppControlInput>          
    <AppControlInput v-model="newPost.buildingType">Info	on	where	the	incident	took	place	(street,	Hospital,	Convenience	Store) </AppControlInput>          
    <AppControlInput v-model="newPost.placeOfEntry">Point	of	entry. Only	relevant	with	speciﬁc	incident	types </AppControlInput>          
    <AppControlInput v-model="newPost.perpetratorsNos">Total	number	of	suspects involved</AppControlInput>          
    <AppControlInput v-model="newPost.suspectTransportation">Vehicle	info	(if	known)	of	the	suspects	involved</AppControlInput>          
    <AppControlInput v-model="newPost.victimActivity">What	the	victim	was	doing	at	the	time	of	incident	("Walking",	"Driving",	etc) </AppControlInput>          
    
    
    
    
    <AppControlInput v-model="newPost.mainCrimeCode">BRIC classification of crome code for analysis</AppControlInput>       
    <AppControlInput v-model="newPost.computedCrimeCode"><p>Crime code	determined	by	looking	at	all	of	the	supplements	involved in	the	incident and determining the
         lowest	crime code. </p> Lower the crime code more serious the crime</AppControlInput>           
    <AppControlInput
      control-type="textarea"
      v-model="newPost.computedCrimeCodeDesc">Textual description of the above crime code</AppControlInput>
    <a  @click="onSave" class="button is-success">Save</a>
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
