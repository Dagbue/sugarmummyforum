<template>
  <section class="mission-section">
    <div class="container">
      <div class="mission-content">
        <div class="mission-text">
          <div class="section-header">
            <svg class="header-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
              <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
            </svg>
            <h2 class="header-title">Our Mission</h2>
          </div>
          <p class="section-paragraph">
            To create a sophisticated platform where successful individuals can form meaningful,
            mutually beneficial relationships in a safe, discreet, and respectful environment.
          </p>
          <p class="section-paragraph">
            We believe that everyone deserves to find connections that enhance their life,
            whether that's companionship, mentorship, or genuine romantic relationships.
            Our platform removes the stigma and provides a judgment-free space for authentic interactions.
          </p>
        </div>
        <div class="mission-image-container">
          <img
              src="@/assets/mission-image.jpg"
              alt="Mission illustration"
              class="mission-image"
          />
        </div>
      </div>

      <div class="vision-content">
        <div class="vision-text">
          <div class="section-header">
            <svg class="header-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <h2 class="header-title">Our Vision</h2>
          </div>
          <p class="section-paragraph">
            To be the world's most trusted platform for sophisticated connections,
            setting the gold standard for safety, quality, and user experience.
          </p>
          <p class="section-paragraph">
            We envision a world where successful individuals can connect authentically
            without judgment, where mutual benefit is celebrated, and where every
            interaction has the potential to be life-changing.
          </p>
        </div>
        <div class="vision-image-container">
          <img
              src="@/assets/man-kissing-hand-of-woman.jpg"
              alt="Vision illustration"
              class="mission-image"
          />
        </div>
      </div>

      <!-- Values -->
      <div class="values-header">
        <h2 class="header-title">Our Core Values</h2>
        <p class="header-description">
          These principles guide everything we do and shape the experience we create for our members.
        </p>
      </div>

      <div class="values-grid">
        <div
            v-for="(value, index) in values"
            :key="index"
            class="value-card"
        >
          <div :class="['value-icon-container', value.color]">
            <img :src="value.icon" class="value-icon" :alt="value.title" />
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-description">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'AboutMissionSection',
  data() {
    return {
      values: [
        {
          icon: require("@/assets/icons8-shield-50.png"),
          title: 'Privacy & Discretion',
          description: 'We protect our members\' privacy with military-grade security and complete discretion.',
          color: 'gradient-blue-cyan'
        },
        {
          icon: require("@/assets/icons8-love-48.png"),
          title: 'Authentic Connections',
          description: 'We foster genuine relationships built on mutual respect and understanding.',
          color: 'gradient-red-pink'
        },
        {
          icon: require("@/assets/icons8-avatar-50.png"),
          title: 'Inclusive Community',
          description: 'We welcome all successful individuals regardless of background or lifestyle.',
          color: 'gradient-purple-indigo'
        },
        {
          icon: require("@/assets/icons8-bolt-50.png"),
          title: 'Innovation',
          description: 'We continuously evolve our platform with cutting-edge technology and features.',
          color: 'gradient-yellow-orange'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mission-section {
  padding: 5rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 2rem;
  }
}

.mission-content,
.vision-content {
  display: grid;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
}

@media (min-width: 1024px) {
  .mission-content,
  .vision-content {
    grid-template-columns: 1fr 1fr;
  }
  .vision-content .vision-text {
    order: 2;
  }
  .vision-content .vision-image-container {
    order: 1;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  width: 32px;
  height: 32px;
}

.header-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
}

.section-paragraph {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.mission-image-container,
.vision-image-container {
  position: relative;
}

.mission-image {
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.values-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 768px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
  text-align: center;
}

.value-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.value-icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: transform 0.3s ease;
  color: #ffffff;
}

.value-card:hover .value-icon-container {
  transform: scale(1.1);
}

.gradient-blue-cyan {
  background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
}

.gradient-red-pink {
  background: linear-gradient(to bottom right, #ef4444, #ec4899);
}

.gradient-purple-indigo {
  background: linear-gradient(to bottom right, #a855f7, #6366f1);
}

.gradient-yellow-orange {
  background: linear-gradient(to bottom right, #eab308, #f97316);
}

.value-icon {
  width: 32px;
  height: 32px;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.value-description {
  color: #d1d5db;
}
</style>