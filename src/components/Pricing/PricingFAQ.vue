<template>
  <section class="faq-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Pricing FAQ</h2>
        <p class="header-description">
          Everything you need to know about our pricing and billing
        </p>
      </div>

      <div class="faq-list">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
        >
          <button
              class="faq-button"
              @click="toggleFAQ(index)"
          >
            <span class="faq-question">{{ faq.question }}</span>
            <svg
                v-if="openIndex === index"
                class="chevron-icon"
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
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <svg
                v-else
                class="chevron-icon"
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
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div v-if="openIndex === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Payment Security -->
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon secure">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 class="feature-title">Secure Payments</h3>
          <p class="feature-description">Bank-level encryption and PCI compliance for all transactions</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon billing">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>
          <h3 class="feature-title">Flexible Billing</h3>
          <p class="feature-description">Multiple payment methods and billing cycles to suit your needs</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon changes">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path d="M11.5 15a6.5 6.5 0 1 0 0-6"></path>
              <path d="M17 8.5L12.5 13"></path>
              <path d="M12.5 9L17 13.5"></path>
            </svg>
          </div>
          <h3 class="feature-title">Easy Changes</h3>
          <p class="feature-description">Upgrade, downgrade, or cancel anytime with just a few clicks</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PricingFAQ',
  setup() {
    const openIndex = ref(0)
    const faqs = [
      {
        question: 'Can I change my plan at any time?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference immediately. When downgrading, the change will take effect at your next billing cycle, and you\'ll retain premium features until then.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system with industry-standard security measures.'
      },
      {
        question: 'Is there a free trial available?',
        answer: 'We offer a 7-day free trial for the Premium plan, which includes all premium features. No credit card is required to start your trial, but you\'ll need to provide payment information before the trial ends to continue your membership.'
      },
      {
        question: 'How does the 30-day money-back guarantee work?',
        answer: 'If you\'re not completely satisfied with your SMFM experience within the first 30 days, simply contact our support team for a full refund. No questions asked, no complicated process - we\'ll process your refund within 5-7 business days.'
      },
      {
        question: 'What happens if I cancel my subscription?',
        answer: 'You can cancel your subscription at any time from your account settings. You\'ll retain access to all premium features until the end of your current billing period. After cancellation, your account will revert to a basic free account with limited features.'
      },
      {
        question: 'Are there any hidden fees or additional charges?',
        answer: 'No, there are no hidden fees. The price you see is exactly what you\'ll pay. All features listed in your chosen plan are included at no additional cost. Optional services like expedited verification may have separate fees, which are clearly disclosed.'
      },
      {
        question: 'Do you offer discounts for longer commitments?',
        answer: 'Yes! Annual subscriptions save you up to 40% compared to monthly billing. We also offer special discounts for students, military personnel, and first responders. Contact our support team to learn about available discounts.'
      },
      {
        question: 'How secure are my payment details?',
        answer: 'Your payment information is completely secure. We use bank-level encryption and never store your full credit card details on our servers. All transactions are processed through PCI-compliant payment processors with the highest security standards.'
      },
      {
        question: 'Can I pause my subscription temporarily?',
        answer: 'Yes, Elite members can pause their subscription for up to 3 months per year. During the pause, your profile will be hidden, but your data and connections will be preserved. Premium and Essential members can contact support for special circumstances.'
      }
    ]

    const toggleFAQ = (index) => {
      openIndex.value = openIndex.value === index ? null : index
    }

    return { openIndex, faqs, toggleFAQ }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 5rem 0;
  background: rgba(15, 23, 42, 0.3);
}

.container {
  max-width: 896px;
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
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
  background: rgba(15, 23, 42, 0.8);
}

.faq-item {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  overflow: hidden;
}

.faq-button {
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease;
  background: rgba(51, 65, 85, 0.3);
  border: none;
}


.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.chevron-icon {
  width: 20px;
  height: 20px;
}

.faq-answer {
  padding: 0 1.5rem 1rem;
}

.faq-answer p {
  color: #d1d5db;
  line-height: 1.625;
}

.features-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  text-align: center;
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #ffffff;
}

.feature-icon.secure {
  background: linear-gradient(to bottom right, #22c55e, #059669);
}

.feature-icon.billing {
  background: linear-gradient(to bottom right, #3b82f6, #4f46e5);
}

.feature-icon.changes {
  background: linear-gradient(to bottom right, #a855f7, #ec4899);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.feature-description {
  color: #d1d5db;
}
</style>