<template>
  <section class="comparison-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Feature Comparison</h2>
        <p class="header-description">
          Compare all features across our membership tiers to find the perfect plan for your needs
        </p>
      </div>

      <div class="comparison-table">
        <!-- Header -->
        <div class="table-header">
          <div class="header-cell">Features</div>
          <div class="header-cell">
            <div class="plan-info">
              <svg
                  class="plan-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span class="plan-title">Essential</span>
            </div>
            <div class="plan-price">$99<span class="price-period">/mo</span></div>
          </div>
          <div class="header-cell">
            <div class="plan-info">
              <svg
                  class="plan-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
              </svg>
              <span class="plan-title">Premium</span>
            </div>
            <div class="plan-price">$199<span class="price-period">/mo</span></div>
            <div class="popular-label">Most Popular</div>
          </div>
          <div class="header-cell">
            <div class="plan-info">
              <svg
                  class="plan-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#facc15"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M11 20L5.5 9.5l-1.7 6.7L11 20"></path>
                <path d="M7 4l-1.7 6.7L11 7l-6.7 3.7L7 4"></path>
                <path d="M13 4l6.7 3.7L13 11l1.7-6.7L13 4"></path>
                <path d="M13 20l6.7-3.7-1.7-6.7L13 20"></path>
              </svg>
              <span class="plan-title">Elite</span>
            </div>
            <div class="plan-price">$399<span class="price-period">/mo</span></div>
          </div>
        </div>

        <!-- Feature Categories -->
        <div v-for="(category, categoryIndex) in features" :key="categoryIndex">
          <div class="category-header">
            <h3 class="category-title">{{ category.category }}</h3>
          </div>
          <div
              v-for="(item, itemIndex) in category.items"
              :key="itemIndex"
              class="feature-row"
          >
            <div class="feature-name">{{ item.name }}</div>
            <div class="feature-value">
              <template v-if="typeof item.essential === 'boolean'">
                <svg
                    v-if="item.essential"
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg
                    v-else
                    class="x-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </template>
              <span v-else class="value-text">{{ item.essential }}</span>
            </div>
            <div class="feature-value">
              <template v-if="typeof item.premium === 'boolean'">
                <svg
                    v-if="item.premium"
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg
                    v-else
                    class="x-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </template>
              <span v-else class="value-text">{{ item.premium }}</span>
            </div>
            <div class="feature-value">
              <template v-if="typeof item.elite === 'boolean'">
                <svg
                    v-if="item.elite"
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 22"
                    fill="none"
                    stroke="#34d399"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg
                    v-else
                    class="x-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </template>
              <span v-else class="value-text">{{ item.elite }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
<!--      <div class="cta-section">-->
<!--        <p class="cta-text">Ready to upgrade your connection experience?</p>-->
<!--        <div class="cta-buttons">-->
<!--          <button class="primary-button">Start Premium Trial</button>-->
<!--          <button class="secondary-button">Compare All Plans</button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureComparison',
  setup() {
    const features = [
      {
        category: 'Core Features',
        items: [
          { name: 'Profile Creation & Verification', essential: true, premium: true, elite: true },
          { name: 'Basic Messaging', essential: true, premium: true, elite: true },
          { name: 'Mobile App Access', essential: true, premium: true, elite: true },
          { name: 'Basic Search Filters', essential: true, premium: true, elite: true },
          { name: 'Monthly Connections', essential: '10', premium: 'Unlimited', elite: 'Unlimited' },
          { name: 'Profile Visibility Boosts', essential: '1/month', premium: '5/month', elite: 'Unlimited' }
        ]
      },
      {
        category: 'Communication & Matching',
        items: [
          { name: 'Advanced Messaging Features', essential: false, premium: true, elite: true },
          { name: 'Video Call Integration', essential: false, premium: true, elite: true },
          { name: 'Read Receipts & Typing Indicators', essential: false, premium: true, elite: true },
          { name: 'Advanced Search & Filters', essential: false, premium: true, elite: true },
          { name: 'Anonymous Browsing', essential: false, premium: true, elite: true },
          { name: 'Priority in Search Results', essential: false, premium: false, elite: true }
        ]
      },
      {
        category: 'Support & Services',
        items: [
          { name: 'Email Customer Support', essential: true, premium: true, elite: true },
          { name: 'Priority Customer Support', essential: false, premium: true, elite: true },
          { name: '24/7 VIP Support Hotline', essential: false, premium: false, elite: true },
          { name: 'Personal Matchmaking Consultant', essential: false, premium: false, elite: true },
          { name: 'Concierge Meeting Arrangements', essential: false, premium: false, elite: true },
          { name: 'Personal Relationship Advisor', essential: false, premium: false, elite: true }
        ]
      },
      {
        category: 'Premium Services',
        items: [
          { name: 'Background Verification Service', essential: false, premium: false, elite: true },
          { name: 'Profile Writing Service', essential: false, premium: false, elite: true },
          { name: 'Professional Photo Review', essential: false, premium: false, elite: true },
          { name: 'Exclusive Events Access', essential: false, premium: false, elite: true },
          { name: 'Exclusive Member Directory', essential: false, premium: false, elite: true },
          { name: 'White-glove Onboarding', essential: false, premium: false, elite: true }
        ]
      }
    ]

    return { features }
  }
}
</script>

<style scoped>
.comparison-section {
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

.comparison-table {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(51, 65, 85, 0.5);
  border-bottom: 1px solid rgba(71, 85, 105, 0.5);
}

.header-cell {
  text-align: center;
}

.header-cell:first-child {
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.plan-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.plan-icon {
  width: 20px;
  height: 20px;
}

.plan-title {
  font-weight: 600;
  color: #ffffff;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.price-period {
  font-size: 0.875rem;
  color: #9ca3af;
}

.popular-label {
  font-size: 0.75rem;
  color: #818cf8;
}

.category-header {
  padding: 1rem 1.5rem;
  background: rgba(51, 65, 85, 0.3);
  border-bottom: 1px solid rgba(71, 85, 105, 0.3);
}

.category-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #818cf8;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.3);
  transition: background 0.3s ease;
}

.feature-row:hover {
  background: rgba(51, 65, 85, 0.2);
}

.feature-name {
  color: #d1d5db;
}

.feature-value {
  text-align: center;
}

.check-icon,
.x-icon {
  width: 20px;
  height: 20px;
  margin: 0 auto;
}

.value-text {
  font-size: 0.875rem;
  color: #d1d5db;
}

.cta-section {
  text-align: center;
  margin-top: 3rem;
}

.cta-text {
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
  }
}

.primary-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.secondary-button {
  padding: 0.75rem 2rem;
  border: 2px solid #4b5563;
  border-radius: 9999px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  border-color: #6b7280;
}
</style>