<template>
  <section class="stats-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">SMFM by the Numbers</h2>
        <p class="header-description">
          Our impact speaks for itself. Here's how we're changing the landscape of premium connections.
        </p>
      </div>

      <!-- Main Stats -->
      <div class="main-stats-grid">
        <div
            v-for="(stat, index) in mainStats"
            :key="index"
            class="stat-card"
        >
          <div :class="['icon-container', stat.color]" class="icon-container">
            <img :src="stat.icon" class="stat-icon"  :alt="stat.label" />
          </div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-description">{{ stat.description }}</div>
        </div>
      </div>

      <!-- Additional Stats -->
      <div class="additional-stats-container">
        <h3 class="additional-stats-title">Platform Excellence</h3>
        <div class="additional-stats-grid">
          <div
              v-for="(stat, index) in additionalStats"
              :key="index"
              class="additional-stat-item"
          >
            <div class="icon-container additional-icon">
              <img :src="stat.icon" class="stat-icon"  :alt="stat.label" />
            </div>
            <div class="stat-number additional-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-description">{{ stat.description }}</div>
          </div>
        </div>
      </div>

      <!-- Growth Chart Visualization -->
      <div class="growth-section">
        <h3 class="growth-title">Our Growth Journey</h3>
        <div class="growth-chart">
          <div class="growth-grid">
            <div
                v-for="(data, index) in growthData"
                :key="index"
                class="growth-item"
            >
              <div :class="['growth-bar', data.height]"></div>
              <div class="growth-members">{{ data.members }}</div>
              <div class="growth-year">{{ data.year }}</div>
            </div>
          </div>
          <p class="growth-description">
            From humble beginnings to global leadership - our community continues to grow stronger every day.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutStatsSection',
  data() {
    return {
      mainStats: [
        {
          icon: require('@/assets/icons8-avatar-50.png'),
          number: '5M+',
          label: 'Active Members',
          description: 'Verified professionals worldwide',
          color: 'gradient-indigo-purple'
        },
        {
          icon: require('@/assets/icons8-globe-50.png'),
          number: '60+',
          label: 'Countries',
          description: 'Global reach and presence',
          color: 'gradient-purple-pink'
        },
        {
          icon: require('@/assets/icons8-message-50.png'),
          number: '1M+',
          label: 'Daily Messages',
          description: 'Meaningful conversations',
          color: 'gradient-emerald-teal'
        },
        {
          icon: require('@/assets/icons8-love-48.png'),
          number: '500K+',
          label: 'Success Stories',
          description: 'Meaningful connections made',
          color: 'gradient-red-pink'
        }
      ],
      additionalStats: [
        {
          icon: require('@/assets/icons8-shield-50.png'),
          number: '99.9%',
          label: 'Security Uptime',
          description: 'Military-grade protection'
        },
        {
          icon: require('@/assets/icons8-reward-50.png'),
          number: '15+',
          label: 'Industry Awards',
          description: 'Recognition for excellence'
        },
        {
          icon: require('@/assets/icons8-clock-50.png'),
          number: '24/7',
          label: 'Support Available',
          description: 'Round-the-clock assistance'
        },
        {
          icon: require('@/assets/icons8-bolt-50.png'),
          number: '< 2s',
          label: 'Average Response',
          description: 'Lightning-fast platform'
        }
      ],
      growthData: [
        { year: '2012', members: '1K', height: 'h-12' },
        { year: '2015', members: '50K', height: 'h-20' },
        { year: '2018', members: '500K', height: 'h-32' },
        { year: '2021', members: '2M', height: 'h-40' },
        { year: '2025', members: '5M+', height: 'h-48' }
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

.gradient-indigo-purple {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.gradient-purple-pink {
  background: linear-gradient(to bottom right, #a855f7, #ec4899);
}

.gradient-emerald-teal {
  background: linear-gradient(to bottom right, #10b981, #14b8a6);
}

.gradient-red-pink {
  background: linear-gradient(to bottom right, #ef4444, #ec4899);
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

.additional-stats-container {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.additional-stats-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
}

.additional-stats-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .additional-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .additional-stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.additional-stat-item {
  text-align: center;
}

.additional-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.additional-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #818cf8;
  margin-bottom: 0.25rem;
}

.growth-section {
  margin-top: 4rem;
  text-align: center;
}

.growth-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.growth-chart {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
}

.growth-grid {
  display: grid;
  gap: 2rem;
  align-items: flex-end;
}

@media (min-width: 768px) {
  .growth-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.growth-item {
  text-align: center;
}

.growth-bar {
  background: linear-gradient(to top, #6366f1, #9333ea);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin: 0 auto 1rem;
  width: 4rem;
}

.h-12 { height: 3rem; }
.h-20 { height: 5rem; }
.h-32 { height: 8rem; }
.h-40 { height: 10rem; }
.h-48 { height: 12rem; }

.growth-members {
  font-weight: 700;
  font-size: 1.125rem;
  color: #ffffff;
}

.growth-year {
  color: #9ca3af;
}

.growth-description {
  color: #d1d5db;
  margin-top: 2rem;
}
</style>