<template>
  <div>
    <contact-hero/>
    <contact-form/>
    <contact-info/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>

<script>
import FooterSection from "@/components/baseComponents/FooterSection.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import ContactHero from "@/components/Contact/ContactHero.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactInfo from "@/components/Contact/ContactInfo.vue";

export default {
  name: "ContactView",
  components: {ContactInfo, ContactForm, ContactHero, CTASection, FooterSection}
}
</script>

<style scoped>

</style>