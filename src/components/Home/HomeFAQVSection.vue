<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-description">
          Everything you need to know about SMFM
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
                class="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <svg
                v-else
                class="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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

      <div class="contact-container">
        <p class="contact-text">Still have questions?</p>
        <button class="contact-button" @click="onPostClick">Contact Support</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeFAQSection',
  setup() {
    const openIndex = ref(0);
    const faqs = [
      {
        question: "How does the verification process work?",
        answer: "Our comprehensive verification process includes ID verification, background checks, and income verification for premium memberships. This ensures all members are genuine and meet our community standards."
      },
      {
        question: "Is my privacy and discretion guaranteed?",
        answer: "Absolutely. We use advanced encryption for all communications, offer anonymous browsing options, and never share your personal information. Your privacy is our top priority."
      },
      {
        question: "What makes SMFM different from other dating platforms?",
        answer: "We focus exclusively on successful, verified individuals seeking mutually beneficial relationships. Our platform offers premium features like personal matchmaking consultants, concierge services, and exclusive events."
      },
      {
        question: "How does the matching algorithm work?",
        answer: "Our proprietary algorithm analyzes over 150 compatibility factors including lifestyle preferences, relationship goals, location, and mutual benefit alignment to suggest the most compatible matches."
      },
      {
        question: "Can I cancel my membership at any time?",
        answer: "Yes, you can cancel your membership at any time. We also offer a 30-day money-back guarantee if you're not completely satisfied with your experience."
      },
      {
        question: "What safety measures are in place?",
        answer: "We have 24/7 safety monitoring, encrypted communications, report and block features, and a dedicated safety team. All members undergo verification before joining the platform."
      },
      {
        question: "How do I arrange meetings safely?",
        answer: "We provide built-in scheduling tools, location suggestions for public meetings, and safety verification features. Our concierge service can also assist with meeting arrangements for SMFM members."
      },
      {
        question: "What is included in the SMFM membership?",
        answer: "SMFM membership includes everything in Premium plus personal matchmaking consultation, background verification service, concierge meeting arrangements, exclusive events access, and 24/7 VIP support."
      }
    ];

    const toggleFAQ = (index) => {
      openIndex.value = openIndex.value === index ? null : index;
    };

    return {
      openIndex,
      faqs,
      toggleFAQ
    };
  },
  methods: {
    onPostClick() {
      this.$router.push("/contactUs");
    },
  },
};
</script>

<style scoped>
.faq-section {
  padding: 5rem 0;
  background-color: rgba(30, 41, 59, 0.3); /* bg-slate-800/30 */
}

.container {
  max-width: 896px; /* max-w-4xl */
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
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(30, 41, 59, 0.8); /* bg-slate-800/80 */
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  border: 1px solid rgba(51, 65, 85, 0.5); /* border-slate-700/50 */
  overflow: hidden;
}

.faq-button {
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-button:hover {
  background: rgba(51, 65, 85, 0.3); /* hover:bg-slate-700/30 */
}

.faq-question {
  font-weight: 600;
  font-size: 1.125rem;
  color: #cbd5e1;
}

.faq-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.faq-icon[stroke="currentColor"] {
  color: #818cf8; /* text-indigo-400 when open */
}

.faq-button:not(:has(.faq-icon[stroke="currentColor"])) .faq-icon {
  color: #94a3b8; /* text-slate-400 when closed */
}

.faq-answer {
  padding: 0 1.5rem 1rem;
}

.faq-answer p {
  color: #cbd5e1; /* text-slate-300 */
  line-height: 1.625;
}

.contact-container {
  text-align: center;
  margin-top: 3rem;
}

.contact-text {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1rem;
}

.contact-button {
  padding: 0.9rem 2.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .faq-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .faq-question {
    font-size: 1rem;
  }
}
</style>