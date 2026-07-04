<template>
  <section class="cta-section">
    <div class="container">
      <!-- Main CTA -->
      <div class="main-cta">
        <h2 class="cta-title">Ready to Begin Your SMFM Journey?</h2>
        <p class="cta-description">
          Join thousands of successful individuals who have found their perfect connection through SugarMummyForum.
          Your sophisticated relationship awaits.
        </p>
        <div class="button-container">
          <button class="primary-button" @click="onPostClick">
            <span>Join SMFM Today</span>
            <svg
                class="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button @click="onPostClick2" class="secondary-button">Schedule Consultation</button>
        </div>
      </div>

      <!-- Benefits Grid -->
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="benefit-icon verified">
            <svg
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
          <h3 class="benefit-title">100% Verified</h3>
          <p class="benefit-description">
            Every member undergoes comprehensive verification for your safety and peace of mind.
          </p>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon premium">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path
                  d="M11.562 3.266a.5.5 0 0 1 .876 0L14.39 7.799a1 1 0 0 0 1.341.438L20.443 5.5a.5.5 0 0 1 .763.588l-4 13.07a1 1 0 0 1-.663.632l-5.198 1.682a.5.5 0 0 1-.316 0l-5.198-1.682a1 1 0 0 1-.663-.632l-4-13.07a.5.5 0 0 1 .763-.588l4.712 2.737a1 1 0 0 0 1.341-.438z"
              ></path>
            </svg>
          </div>
          <h3 class="benefit-title">Premium Experience</h3>
          <p class="benefit-description">
            Luxury features and personalized service designed for successful individuals.
          </p>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon results">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 class="benefit-title">Instant Results</h3>
          <p class="benefit-description">
            Start connecting with compatible matches within minutes of joining.
          </p>
        </div>
      </div>

      <!-- Guarantee -->
      <div class="guarantee-container">
        <h3 class="guarantee-title">30-Day Success Guarantee</h3>
        <p class="guarantee-description">
          We're so confident in our platform that we guarantee you'll make meaningful connections within 30 days.
        </p>
        <div class="guarantee-features">
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span>No Risk</span>
          </div>
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span>No Questions Asked</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection',
  setup() {
    return {};
  },
  methods: {
    onPostClick() {
      this.$router.push("/request");
    },
    onPostClick2() {
      this.$router.push("/contactUs");
    },
  },
};
</script>

<style scoped>
.cta-section {
  padding: 5rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.main-cta {
  text-align: center;
  margin-bottom: 4rem;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
}

@media (min-width: 1024px) {
  .cta-title {
    font-size: 2.6rem;
  }
}

.cta-description {
  font-size: 1.15rem;
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .button-container {
    flex-direction: row;
  }
}

.primary-button,
.secondary-button {
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
}

.primary-button {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: white;
}

.primary-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.secondary-button {
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: none;
  color: white;
}

.secondary-button:hover {
  border-color: rgba(255, 255, 255, 0.4);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.benefits-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.benefit-item {
  text-align: center;
}

.benefit-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.benefit-icon svg {
  width: 2rem;
  height: 2rem;
  color: white;
}

.benefit-icon.verified {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.benefit-icon.premium {
  background: linear-gradient(to bottom right, #8b5cf6, #ec4899);
}

.benefit-icon.results {
  background: linear-gradient(to bottom right, #10b981, #14b8a6);
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.benefit-description {
  color: #cbd5e1; /* text-slate-300 */
}

.guarantee-container {
  background: linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3); /* border-slate-600/30 */
  text-align: center;
}

.guarantee-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.guarantee-description {
  color: #cbd5e1; /* text-slate-300 */
  max-width: 32rem;
  margin: 0 auto 1.5rem;
}

.guarantee-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #34d399; /* bg-green-400 */
  border-radius: 9999px;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .cta-section {
    padding: 3rem 0;
  }

  .cta-title {
    font-size: 1.875rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .button-container {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .guarantee-title {
    font-size: 1.25rem;
  }

  .guarantee-features {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>