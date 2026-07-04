<template>
  <section class="benefits-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Elite Membership Benefits</h2>
        <p class="header-description">
          Join thousands of successful individuals who have found meaningful connections
          through our premium platform
        </p>
      </div>

      <!-- Main Benefits -->
      <div class="benefits-grid">
        <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-card"
        >
          <div :class="['benefit-icon', benefit.color]">
            <img :src="benefit.icon" class="icon" :alt="benefit.title" />
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-description">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- Additional Features -->
      <div class="features-card">
        <h3 class="features-title">What You Get as a Member</h3>
        <div class="features-grid">
          <div
              v-for="(feature, index) in features"
              :key="index"
              class="feature-item"
          >
            <div class="feature-icon">
              <img :src="feature.icon" class="icon" :alt="feature.title" />
            </div>
            <div>
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script>


export default {
  name: 'JoinBenefits',
  setup() {
    const benefits = [
      {
        icon: require("@/assets/icons8-crown-50.png"),
        title: 'Premium Experience',
        description: 'Access to exclusive features and personalized matchmaking services',
        color: 'gradient-yellow-orange'
      },
      {
        icon: require("@/assets/icons8-shield-50.png"),
        title: 'Complete Security',
        description: 'Advanced verification and privacy protection for all members',
        color: 'gradient-green-emerald'
      },
      {
        icon: require("@/assets/icons8-community-50.png"),
        title: 'SMFM Network',
        description: 'Connect with successful, verified individuals worldwide',
        color: 'gradient-indigo-purple'
      },
      {
        icon: require("@/assets/icons8-love-48.png"),
        title: 'Instant Matching',
        description: 'Advanced algorithms to find your perfect connection quickly',
        color: 'gradient-blue-cyan'
      }
    ]

    const features = [
      {
        icon: require("@/assets/icons8-avatar-50.png"),
        title: 'Meaningful Connections',
        description: 'Build authentic relationships based on mutual respect and understanding'
      },
      {
        icon: require("@/assets/icons8-globe-50.png"),
        title: 'Global Community',
        description: 'Access to members in 60+ countries for international connections'
      },
      {
        icon: require("@/assets/icons8-approval-50.png"),
        title: 'Success Guarantee',
        description: '30-day money-back guarantee if you\'re not completely satisfied'
      },
      {
        icon: require("@/assets/icons8-message-50.png"),
        title: '24/7 Support',
        description: 'Round-the-clock customer support and safety monitoring'
      }
    ]

    return { benefits, features }
  }
}
</script>

<style scoped>
.benefits-section {
  padding: 5rem 0;
  background: rgba(15, 23, 42, 0.3);
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

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.header-description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 768px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.benefit-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.benefit-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #ffffff;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
}

.gradient-yellow-orange {
  background: linear-gradient(to bottom right, #eab308, #f97316);
}

.gradient-green-emerald {
  background: linear-gradient(to bottom right, #22c55e, #059669);
}

.gradient-indigo-purple {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.gradient-blue-cyan {
  background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
}

.icon {
  width: 32px;
  height: 32px;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.benefit-description {
  color: #d1d5db;
}

.features-card {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.features-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
}

.features-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.feature-description {
  color: #d1d5db;
}

.stats-section {
  margin-top: 4rem;
  text-align: center;
}

.stats-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.stats-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-indigo {
  color: #818cf8;
}

.stat-purple {
  color: #a855f7;
}

.stat-label {
  color: #d1d5db;
}
</style>