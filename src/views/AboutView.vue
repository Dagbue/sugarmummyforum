<template>
  <div class="about">
    <about-hero-section/>
    <about-stats-section/>
    <company-story-section/>
    <about-mission-section/>
    <team-section/>
    <c-t-a-section/>
    <footer-section/>
  </div>
</template>


<script setup >
import AboutHeroSection from "@/components/AboutUs/AboutHeroSection.vue";
import AboutStatsSection from "@/components/AboutUs/AboutStatsSection.vue";
import CompanyStorySection from "@/components/AboutUs/CompanyStorySection.vue";
import AboutMissionSection from "@/components/AboutUs/AboutMissionSection.vue";
import CTASection from "@/components/baseComponents/CTASection.vue";
import FooterSection from "@/components/baseComponents/FooterSection.vue";
import TeamSection from "@/components/AboutUs/TeamSection.vue";
</script>