<template>
  <div>
    <pricing-hero/>
    <pricing-plans/>
    <feature-comparison/>
    <pricing-f-a-q/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>


<script>
import PricingHero from "@/components/Pricing/PricingHero.vue";
import PricingPlans from "@/components/Pricing/PricingPlans.vue";
import FeatureComparison from "@/components/Pricing/FeatureComparison.vue";
import PricingFAQ from "@/components/Pricing/PricingFAQ.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import FooterSection from "@/components/baseComponents/FooterSection.vue";

export default {
  name: "PricingView",
  components: {FooterSection, CTASection, PricingFAQ, FeatureComparison, PricingPlans, PricingHero}
}
</script>

<style scoped>

</style>