<template>
  <section id="how-it-works" class="how-it-works-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">How SMFM Works</h2>
        <p class="section-description">
          Four simple steps to start your journey toward meaningful, mutually beneficial connections
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="steps-grid">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="step-container"
        >
          <div class="step-card">
            <div class="step-content">
              <div class="step-icons">
                <div class="step-number">
                  {{ step.step }}
                </div>
<!--                <div class="step-icon">-->
<!--                  <component :is="step.icon" class="icon" />-->
<!--                </div>-->
              </div>
              <div class="step-details">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
                <ul class="step-details-list">
                  <li
                      v-for="(detail, detailIndex) in step.details"
                      :key="detailIndex"
                      class="step-detail-item"
                  >
                    <div class="detail-dot"></div>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
              v-if="index < steps.length - 1 && index % 2 === 0"
              class="step-connector"
          ></div>
        </div>
      </div>

      <!-- Safety & Security Section -->
      <div class="safety-container">
        <div class="safety-grid">
          <div class="safety-text">
            <div class="safety-header">
              <svg
                  class="shield-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                ></path>
              </svg>
              <h3 class="safety-title">Your Safety is Our Priority</h3>
            </div>
            <p class="safety-description">
              We maintain the highest standards of safety and verification to ensure every interaction is secure and authentic.
            </p>
            <div class="safety-features">
              <div
                  v-for="(feature, index) in safetyFeatures"
                  :key="index"
                  class="safety-feature-item"
              >
                <div class="feature-dot"></div>
                <span class="feature-text">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="safety-image-container">
            <img
                src="https://cdn.pixabay.com/photo/2017/01/01/14/39/hacker-1944688_1280.jpg"
                alt="Security and privacy"
                class="safety-image"
            />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, h } from 'vue';

const UserPlusIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '8.5', cy: '7', r: '4' }),
  h('line', { x1: '20', y1: '8', x2: '20', y2: '14' }),
  h('line', { x1: '23', y1: '11', x2: '17', y2: '11' })
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

const MessageSquareIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
]);

const CalendarIcon = () => h('svg', {
  class: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
  h('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
  h('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
  h('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
]);

export default defineComponent({
  name: 'HowItWorksSection',
  setup() {
    const steps = [
      {
        step: "01",
        icon: UserPlusIcon,
        title: "Create Your SMFM Profile",
        description: "Build a sophisticated profile that showcases your personality, lifestyle, and what you're seeking in a connection.",
        details: [
          "Professional photo verification",
          "Detailed lifestyle preferences",
          "Background verification process",
          "Privacy settings customization"
        ]
      },
      {
        step: "02",
        icon: SearchIcon,
        title: "Discover Quality Matches",
        description: "Browse and connect with verified members who align with your interests and relationship goals.",
        details: [
          "Advanced filtering options",
          "Compatibility scoring",
          "Location-based matching",
          "Mutual interest indicators"
        ]
      },
      {
        step: "03",
        icon: MessageSquareIcon,
        title: "Connect Securely",
        description: "Engage in meaningful conversations through our secure, private messaging system.",
        details: [
          "Encrypted messaging",
          "Photo sharing controls",
          "Video call integration",
          "Anonymous communication options"
        ]
      },
      {
        step: "04",
        icon: CalendarIcon,
        title: "Arrange & Meet",
        description: "Plan and enjoy meaningful meetings with complete discretion and mutual understanding.",
        details: [
          "Built-in scheduling tools",
          "Location suggestions",
          "Safety verification",
          "Feedback and rating system"
        ]
      }
    ];

    const safetyFeatures = [
      "ID Verification Required",
      "24/7 Safety Monitoring",
      "Encrypted Communications",
      "Report & Block Features"
    ];

    return {
      steps,
      safetyFeatures
    };
  }
});
</script>

<style scoped>
.how-it-works-section {
  padding: 5rem 0;
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
  max-width: 32rem;
  margin: 0 auto;
}

.steps-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.step-container {
  position: relative;
}

.step-card {
  background: rgba(30, 41, 59, 0.8); /* bg-slate-800/80 */
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(51, 65, 85, 0.5); /* border-slate-700/50 */
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: rgba(99, 102, 241, 0.5); /* hover:border-indigo-500/50 */
}

.step-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-icons {
  flex-shrink: 0;
}

.step-number {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.step-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), rgba(147, 51, 234, 0.2));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.step-details {
  flex: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.step-description {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1rem;
}

.step-details-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.step-detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.detail-dot {
  width: 0.375rem;
  height: 0.375rem;
  background-color: #818cf8; /* bg-indigo-400 */
  border-radius: 9999px;
}

.step-connector {
  display: none;
}

@media (min-width: 1024px) {
  .step-connector {
    display: block;
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 2rem;
    height: 0.125rem;
    background: linear-gradient(to right, #6366f1, transparent);
  }
}

.safety-container {
  background: linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3); /* border-slate-600/30 */
}

.safety-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .safety-grid {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.safety-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.shield-icon {
  width: 2rem;
  height: 2rem;
  color: #818cf8; /* text-indigo-400 */
}

.safety-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.safety-description {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1.5rem;
}

.safety-features {
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .safety-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

.safety-feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #34d399; /* bg-green-400 */
  border-radius: 9999px;
}

.feature-text {
  font-size: 0.875rem;
}

.safety-image-container {
  position: relative;
  width: 75%;
  display: block;
  margin: 0 auto;
}

.safety-image {
  border-radius: 0.75rem;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.5), transparent);
  border-radius: 0.75rem;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .how-it-works-section {
    padding: 3rem 0;
  }

  .safety-image-container {
    width: 95%;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-title {
    font-size: 1.25rem;
  }

  .safety-title {
    font-size: 1.25rem;
  }
}
</style>