<template>
  <section class="pricing-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Choose Your Membership</h2>
        <p class="header-description">
          Select the perfect plan for your lifestyle and connection goals
        </p>

        <!-- Billing Toggle -->
        <div class="billing-toggle">
          <span :class="{ 'text-active': billingCycle === 'monthly' }">Monthly</span>
          <button
              @click="billingCycle = billingCycle === 'monthly' ? 'yearly' : 'monthly'"
              class="toggle-button"
          >
            <div
                :class="['toggle-knob', { 'toggle-yearly': billingCycle === 'yearly' }]"
            ></div>
          </button>
          <span :class="{ 'text-active': billingCycle === 'yearly' }">
            Yearly
            <span class="savings-text">(Save up to 40%)</span>
          </span>
        </div>
      </div>

      <div class="plans-grid">
        <div
            v-for="(plan, index) in plans"
            :key="index"
            :class="['plan-card', { 'plan-popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="popular-badge">
            Most Popular
          </div>
          <div v-if="plan.savings > 0" class="savings-badge">
            Save ${{ plan.savings }}/mo
          </div>

          <div class="plan-content">
            <div :class="['icon-container', plan.color]">
              <img :src="plan.icon" class="plan-icon" :alt="plan.name" />
            </div>
            <h3 class="plan-title">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
            <div class="plan-price">
              <span class="price-amount">${{ getPrice(plan) }}</span>
              <span class="price-period">/{{ billingCycle === 'yearly' ? 'month' : 'month' }}</span>
            </div>
            <div v-if="billingCycle === 'yearly'" class="annual-billing">
              Billed ${{ getPrice(plan) * 12 }} annually
            </div>
          </div>

          <div class="features-list">
            <div class="features-header">✓ Included Features:</div>
            <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="feature-item">
              <svg
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
              <span>{{ feature }}</span>
            </div>
            <div v-if="plan.notIncluded.length > 0" class="not-included-header">✗ Not Included:</div>
            <div
                v-for="(feature, featureIndex) in plan.notIncluded"
                :key="featureIndex"
                class="feature-item not-included"
            >
              <svg
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
              <span>{{ feature }}</span>
            </div>
          </div>

          <div @click="onPostClick">
            <button :class="['plan-button', { 'button-popular': plan.popular }] ">
              Get Started
            </button>
          </div>

        </div>
      </div>

      <!-- Money Back Guarantee -->
<!--      <div class="guarantee-section">-->
<!--        <svg-->
<!--            class="shield-icon"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            width="48"-->
<!--            height="48"-->
<!--            viewBox="0 0 24 24"-->
<!--            fill="none"-->
<!--            stroke="#34d399"-->
<!--            stroke-width="2"-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--        >-->
<!--          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>-->
<!--        </svg>-->
<!--        <h3 class="guarantee-title">30-Day Money-Back Guarantee</h3>-->
<!--        <p class="guarantee-description">-->
<!--          We're confident you'll love EliteConnect. If you're not completely satisfied within your first 30 days,-->
<!--          we'll refund your membership fee, no questions asked.-->
<!--        </p>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'PricingPlans',
  setup() {
    const billingCycle = ref('monthly')

    const plans = [
      {
        name: 'Essential',
        monthlyPrice: 99,
        yearlyPrice: 89,
        description: 'Perfect for getting started with premium connections',
        icon: require("@/assets/icons8-star-50.png"),
        color: 'gradient-slate',
        features: [
          'Up to 10 connections per month',
          'Basic profile verification',
          'Standard messaging',
          'Mobile app access',
          'Basic search filters',
          'Email customer support',
          'Profile visibility boost (1x/month)',
          'Basic safety features'
        ],
        notIncluded: [
          'Video call integration',
          'Advanced search filters',
          'Priority support',
          'Anonymous browsing',
          'Concierge service'
        ],
        popular: false,
        savings: billingCycle.value === 'yearly' ? 10 : 0
      },
      {
        name: 'Premium',
        monthlyPrice: 199,
        yearlyPrice: 179,
        description: 'Most popular choice for serious connections',
        icon: require("@/assets/icons8-crown-50.png"),
        color: 'gradient-indigo-purple',
        features: [
          'Unlimited connections',
          'Priority profile verification',
          'Advanced messaging features',
          'Video call integration',
          'Advanced search & filters',
          'Priority customer support',
          'Profile boost feature (5x/month)',
          'Read receipts & typing indicators',
          'Anonymous browsing',
          'Enhanced safety features',
          'Mobile & desktop apps',
          'Premium badge on profile'
        ],
        notIncluded: [
          'Personal matchmaking consultant',
          'Concierge meeting arrangements',
          'Background verification service'
        ],
        popular: true,
        savings: billingCycle.value === 'yearly' ? 20 : 0
      },
      {
        name: 'Elite',
        monthlyPrice: 399,
        yearlyPrice: 359,
        description: 'Ultimate luxury experience with concierge service',
        icon: require("@/assets/icons8-bolt-50.png"),
        color: 'gradient-yellow-orange',
        features: [
          'Everything in Premium',
          'Personal matchmaking consultant',
          'Background verification service',
          'Concierge meeting arrangements',
          'Exclusive events access',
          '24/7 VIP support hotline',
          'Anonymous browsing',
          'Profile writing service',
          'Professional photo review',
          'Unlimited profile boosts',
          'VIP badge on profile',
          'Priority in search results',
          'Personal relationship advisor',
          'Exclusive member directory',
          'White-glove onboarding'
        ],
        notIncluded: [],
        popular: false,
        savings: billingCycle.value === 'yearly' ? 40 : 0
      }
    ]

    const getPrice = (plan) => {
      return billingCycle.value === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
    }

    return { billingCycle, plans, getPrice }
  },
  methods: {
    onPostClick() {
      this.$router.push("/request");
    },
    onPostClick2() {
      this.$router.push("/contactUs");
    },
  },
}
</script>

<style scoped>
.pricing-section {
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
  max-width: 640px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.billing-toggle span {
  color: #9ca3af;
}

.text-active {
  color: #ffffff;
}

.savings-text {
  color: #34d399;
  margin-left: 0.25rem;
}

.toggle-button {
  position: relative;
  width: 4rem;
  height: 2rem;
  background: #374151;
  border-radius: 9999px;
  transition: background 0.3s ease;
  outline: none;
  border: none;
}

.toggle-knob {
  position: absolute;
  top: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  transition: transform 0.3s ease;
  transform: translateX(0.25rem);
}

.toggle-yearly {
  transform: translateX(2.25rem);
}

.plans-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  .plans-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.plan-card {
  position: relative;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
}

.plan-card:hover {
  transform: scale(1.05);
  border-color: rgba(99, 102, 241, 0.3);
}

.plan-popular {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.popular-badge {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: #ffffff;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.savings-badge {
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: #22c55e;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.plan-content {
  text-align: center;
  margin-bottom: 2rem;
}

.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #ffffff;
}

.gradient-slate {
  background: linear-gradient(to bottom right, #475569, #334155);
}

.gradient-indigo-purple {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.gradient-yellow-orange {
  background: linear-gradient(to bottom right, #eab308, #f97316);
}

.plan-icon {
  width: 24px;
  height: 24px;
}

.plan-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.plan-description {
  color: #9ca3af;
  margin-bottom: 1rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.price-amount {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
}

.price-period {
  color: #9ca3af;
  margin-left: 0.5rem;
}

.annual-billing {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.features-header,
.not-included-header {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.features-header {
  color: #34d399;
}

.not-included-header {
  color: #6b7280;
  margin-top: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-item span {
  font-size: 0.875rem;
  color: #d1d5db;
}

.not-included span {
  color: #6b7280;
}

.check-icon,
.x-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.plan-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  background: #374151;
  color: #ffffff;
  transition: background 0.3s ease;
  border: none;
}

.plan-button:hover {
  background: #475569;
}

.button-popular {
  background: linear-gradient(to right, #6366f1, #9333ea);
  border: none;
}

.button-popular:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
}

.guarantee-section {
  text-align: center;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.shield-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
}

.guarantee-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.guarantee-description {
  color: #d1d5db;
  max-width: 640px;
  margin: 0 auto;
}
</style>