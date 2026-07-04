<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose SMFM</h2>
        <p class="section-description">
          We provide a premium platform designed for discerning individuals seeking meaningful connections
        </p>
      </div>

      <!-- Main Features -->
      <div class="main-features-grid">
        <div
            v-for="(feature, index) in mainFeatures"
            :key="index"
            class="feature-card"
        >
          <div
              :class="['feature-icon', feature.color]"
          >
            <component :is="feature.icon" class="icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Additional Features Grid -->
      <div class="additional-features-container">
        <h3 class="additional-features-title">Complete Platform Features</h3>
        <div class="additional-features-grid">
          <div
              v-for="(feature, index) in additionalFeatures"
              :key="index"
              class="additional-feature-item"
          >
            <div class="feature-icon additional">
              <component :is="feature.icon" class="icon" />
            </div>
            <div>
              <h4 class="additional-feature-title">{{ feature.title }}</h4>
              <p class="additional-feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Highlight -->
      <div class="highlight-container">
        <div class="highlight-text">
          <h3 class="highlight-title">Advanced Matching Technology</h3>
          <p class="highlight-description">
            Our proprietary algorithm analyzes over 150 compatibility factors to ensure you connect with individuals who truly align with your lifestyle, values, and relationship goals.
          </p>
          <div class="highlight-features">
            <div class="highlight-feature-item" v-for="(item, index) in highlightFeatures" :key="index">
              <svg
                  class="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="highlight-image-container">
          <img
              src="@/assets/hero2.png"
              alt="Technology and connections"
              class="highlight-image"
          />
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, h } from 'vue';

const ShieldIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
]);

const UsersIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '9', cy: '7', r: '4' }),
  h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
  h('circle', { cx: '16', cy: '7', r: '4' })
]);

const SearchIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '11', cy: '11', r: '8' }),
  h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
]);

const MessageCircleIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-8.5-8.5 8.38 8.38 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z' })
]);

const AwardIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '12', cy: '8', r: '7' }),
  h('polyline', { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' })
]);

const GlobeIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
  h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
]);

const LockIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
  h('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
]);

const ZapIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
]);

const HeartIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' })
]);

const CrownIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M11.562 3.266a.5.5 0 0 1 .876 0L14.39 7.799a1 1 0 0 0 1.341.438L20.443 5.5a.5.5 0 0 1 .763.588l-4 13.07a1 1 0 0 1-.663.632l-5.198 1.682a.5.5 0 0 1-.316 0l-5.198-1.682a1 1 0 0 1-.663-.632l-4-13.07a.5.5 0 0 1 .763-.588l4.712 2.737a1 1 0 0 0 1.341-.438z' })
]);

export default defineComponent({
  name: 'FeaturesSection',
  setup() {
    const mainFeatures = [
      {
        icon: ShieldIcon,
        title: "Premium Security",
        description: "Advanced verification and privacy protection for all members",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: UsersIcon,
        title: "Elite Network",
        description: "Connect with successful, verified individuals seeking quality relationships",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: SearchIcon,
        title: "Smart Matching",
        description: "Sophisticated algorithms to find your perfect connection",
        color: "from-indigo-500 to-purple-500"
      },
      {
        icon: MessageCircleIcon,
        title: "Discreet Communication",
        description: "Secure, private messaging with complete confidentiality",
        color: "from-emerald-500 to-teal-500"
      }
    ];

    const additionalFeatures = [
      {
        icon: AwardIcon,
        title: "Background Verification",
        description: "Comprehensive screening process"
      },
      {
        icon: GlobeIcon,
        title: "Global Reach",
        description: "Members in 60+ countries worldwide"
      },
      {
        icon: LockIcon,
        title: "Privacy First",
        description: "Your data is completely secure"
      },
      {
        icon: ZapIcon,
        title: "Instant Matching",
        description: "Find connections in real-time"
      },
      {
        icon: HeartIcon,
        title: "Relationship Goals",
        description: "Clear expectations and boundaries"
      },
      {
        icon: CrownIcon,
        title: "VIP Treatment",
        description: "Premium support and concierge service"
      }
    ];

    const highlightFeatures = [
      "Personality compatibility analysis",
      "Lifestyle and preference matching",
      "Geographic and availability sync",
      "Mutual benefit alignment"
    ];

    return {
      mainFeatures,
      additionalFeatures,
      highlightFeatures
    };
  }
});
</script>

<style scoped>
.icon{
  width: 26px;
}
.features-section {
  padding: 5rem 0;
  background-color: rgba(30, 41, 59, 0.5); /* bg-slate-800/50 */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.25rem;
  color: #cbd5e1; /* text-slate-300 */
  max-width: 48rem;
  margin: 0 auto;
}

.main-features-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .main-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .main-features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  background: rgba(30, 41, 59, 0.8); /* bg-slate-800/80 */
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(51, 65, 85, 0.5); /* border-slate-700/50 */
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(99, 102, 241, 0.5); /* hover:border-indigo-500/50 */
  transform: scale(1.05);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-icon.from-blue-500 {
  background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
}

.feature-icon.from-purple-500 {
  background: linear-gradient(to bottom right, #8b5cf6, #ec4899);
}

.feature-icon.from-indigo-500 {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.feature-icon.from-emerald-500 {
  background: linear-gradient(to bottom right, #10b981, #14b8a6);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #cbd5e1; /* text-slate-300 */
}

.additional-features-container {
  background: linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3); /* border-slate-600/30 */
}

.additional-features-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.additional-features-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .additional-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .additional-features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.additional-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.additional-feature-item:hover {
  background: rgba(51, 65, 85, 0.3); /* hover:bg-slate-700/30 */
}

.feature-icon.additional {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.additional-feature-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.additional-feature-description {
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.highlight-container {
  margin-top: 4rem;
  display: grid;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .highlight-container {
    grid-template-columns: 1fr 1fr;
  }
}

.highlight-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.highlight-description {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1.5rem;
}

.highlight-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #34d399; /* text-green-400 */
}

.highlight-image-container {
  position: relative;
}

.highlight-image {
  border-radius: 1rem;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.5), transparent);
  border-radius: 1rem;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .features-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .main-features-grid {
    grid-template-columns: 1fr;
  }

  .additional-features-grid {
    grid-template-columns: 1fr;
  }

  .highlight-container {
    grid-template-columns: 1fr;
  }

  .highlight-title {
    font-size: 1.5rem;
  }
}
</style>