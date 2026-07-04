<template>
  <div class="home">
    <hero-section/>
    <features-section/>
    <how-it-works-section/>
    <testimonials-section/>
    <blog-section/>
    <home-f-a-q-section/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>

<script>


import HeroSection from "@/components/Home/HeroSection.vue";
import FeaturesSection from "@/components/Home/FeaturesSection.vue";
import HowItWorksSection from "@/components/Home/HowItWorksSection.vue";
import TestimonialsSection from "@/components/Home/TestimonialsSection.vue";
import BlogSection from "@/components/Home/BlogSection.vue";
import HomeFAQSection from "@/components/Home/HomeFAQVSection.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import FooterSection from "@/components/baseComponents/FooterSection.vue";

export default {
  name: 'HomeView',
  components: {
    FooterSection,
    CTASection,
    HomeFAQSection, BlogSection, TestimonialsSection, HowItWorksSection, FeaturesSection, HeroSection},

}
</script>
