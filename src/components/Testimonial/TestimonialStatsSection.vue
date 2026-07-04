<template>
  <section class="stats-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Success by the Numbers</h2>
        <p class="header-description">
          Our testimonials speak for themselves, but here's what the data tells us about
          our community's success and satisfaction.
        </p>
      </div>

      <!-- Main Stats -->
      <div class="main-stats-grid">
        <div
            v-for="(stat, index) in stats"
            :key="index"
            class="stat-card"
        >
          <div :class="['icon-container', stat.color]">
            <img :src="stat.icon" class="stat-icon"  :alt="stat.label" />
          </div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-description">{{ stat.description }}</div>
        </div>
      </div>

      <!-- Achievement Grid -->
      <div class="achievements-container">
        <h3 class="achievements-title">Platform Achievements</h3>
        <div class="achievements-grid">
          <div
              v-for="(achievement, index) in achievements"
              :key="index"
              class="achievement-item"
          >
            <div class="icon-container achievement-icon">
              <img :src="achievement.icon" class="stat-icon"  :alt="achievement.title" />
            </div>
            <div class="achievement-stat">{{ achievement.stat }}</div>
            <div class="achievement-title">{{ achievement.title }}</div>
            <div class="achievement-description">{{ achievement.description }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  name: 'TestimonialStatsSection',
  data() {
    return {
      stats: [
        {
          icon: require("@/assets/icons8-love-48.png"),
          number: '500K+',
          label: 'Success Stories',
          description: 'Meaningful connections made',
          color: 'gradient-red-pink'
        },
        {
          icon: require("@/assets/icons8-satisfaction-50.png"),
          number: '98%',
          label: 'Satisfaction Rate',
          description: 'Members recommend us',
          color: 'gradient-indigo-purple'
        },
        {
          icon: require("@/assets/icons8-globe-50.png"),
          number: '60+',
          label: 'Countries',
          description: 'Global success stories',
          color: 'gradient-emerald-teal'
        },
        {
          icon: require("@/assets/icons8-reward-50.png"),
          number: '4.9/5',
          label: 'Average Rating',
          description: 'Based on 50K+ reviews',
          color: 'gradient-yellow-orange'
        }
      ],
      achievements: [
        {
          icon: require("@/assets/icons8-community-50.png"),
          title: 'Growing Community',
          stat: '15% monthly growth',
          description: 'New success stories every day'
        },
        {
          icon: require("@/assets/icons8-connections-50.png"),
          title: 'Quick Connections',
          stat: 'Average 7 days',
          description: 'Time to first meaningful match'
        },
        {
          icon: require("@/assets/icons8-reward-50.png"),
          title: 'Long-term Success',
          stat: '85% retention',
          description: 'Members stay for 12+ months'
        },
        {
          icon: require("@/assets/icons8-approval-50.png"),
          title: 'Quality Assurance',
          stat: '100% verified',
          description: 'All profiles thoroughly checked'
        }
      ]
    }
  }
}
</script>

<style scoped>
.stats-section {
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

.main-stats-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .main-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .main-stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
  text-align: center;
}

.stat-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: transform 0.3s ease;
  color: #ffffff;
}

.stat-card:hover .icon-container {
  transform: scale(1.1);
}

.gradient-red-pink {
  background: linear-gradient(to bottom right, #ef4444, #ec4899);
}

.gradient-indigo-purple {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.gradient-emerald-teal {
  background: linear-gradient(to bottom right, #10b981, #14b8a6);
}

.gradient-yellow-orange {
  background: linear-gradient(to bottom right, #eab308, #f97316);
}

.stat-icon {
  width: 32px;
  height: 32px;
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.stat-label {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.stat-description {
  font-size: 0.875rem;
  color: #9ca3af;
}

.achievements-container {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.achievements-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
}

.achievements-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .achievements-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.achievement-item {
  text-align: center;
}

.achievement-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.achievement-stat {
  font-size: 1.5rem;
  font-weight: 700;
  color: #818cf8;
  margin-bottom: 0.25rem;
}

.achievement-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.achievement-description {
  font-size: 0.875rem;
  color: #9ca3af;
}

.trust-section {
  margin-top: 4rem;
  text-align: center;
}

.trust-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  opacity: 0.6;
}

@media (min-width: 768px) {
  .trust-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.trust-item {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-logo {
  font-weight: 700;
  color: #9ca3af;
}
</style>