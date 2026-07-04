<template>
  <div>
    <join-hero/>
    <registration-form/>
    <join-benefits/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>


<script>
import JoinHero from "@/components/Request/JoinHero.vue";
import RegistrationForm from "@/components/Request/RegistrationForm.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import FooterSection from "@/components/baseComponents/FooterSection.vue";
import JoinBenefits from "@/components/Request/JoinBenefits.vue";

export default {
  name: "RequestView",
  components: {JoinBenefits, FooterSection, CTASection, RegistrationForm, JoinHero}
}
</script>

<style scoped>

</style>