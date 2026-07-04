<template>
  <div>
    <testimonial-hero-section/>
    <testimonial-stats-section/>
    <featured-testimonials-section/>
    <testimonial-grid-section/>
    <write-review/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>

<script>
import TestimonialHeroSection from "@/components/Testimonial/TestimonialHeroSection.vue";
import TestimonialStatsSection from "@/components/Testimonial/TestimonialStatsSection.vue";
import FeaturedTestimonialsSection from "@/components/Testimonial/FeaturedTestimonialsSection.vue";
import TestimonialGridSection from "@/components/Testimonial/TestimonialGridSection.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import FooterSection from "@/components/baseComponents/FooterSection.vue";
import WriteReview from "@/components/Testimonial/WriteReview.vue";

export default {
  name: "TestimonialView",
  components: {
    WriteReview,
    FooterSection,
    CTASection,
    TestimonialGridSection, FeaturedTestimonialsSection, TestimonialStatsSection, TestimonialHeroSection}
}
</script>

<style scoped>

</style>