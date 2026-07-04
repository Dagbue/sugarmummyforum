<template>
  <section class="hero-section">
    <div class="background-gradient"></div>
    <div class="background-image"></div>

    <div class="content-container">
      <div class="text-content">
        <div class="rating-container">
          <div class="stars">
            <svg
                v-for="n in 5"
                :key="n"
                class="star-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="#facc15"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <span class="rating-text">Premium Membership Plans</span>
        </div>

        <h1 class="title">
          <span class="title-highlight">Choose Your</span><br />
          <span class="title-main">Elite Plan</span>
        </h1>

        <p class="description">
          Select the perfect membership tier for your lifestyle and connection goals.
          All plans include our premium security and verification features.
        </p>

        <div class="stats-grid">
          <div>
            <div class="stat-number stat-indigo">3</div>
            <div class="stat-label">Membership Tiers</div>
          </div>
          <div>
            <div class="stat-number stat-purple">30-Day</div>
            <div class="stat-label">Money Back</div>
          </div>
          <div>
            <div class="stat-number stat-indigo">24/7</div>
            <div class="stat-label">VIP Support</div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <div class="image-wrapper">
          <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Premium lifestyle"
              class="hero-image"
          />
          <div class="bottom-overlay">
            <div class="overlay-content">
              <svg
                  class="crown-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#facc15"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
              </svg>
              <div>
                <div class="overlay-title">Premium Features</div>
                <div class="overlay-subtitle">Unlock Everything</div>
              </div>
            </div>
          </div>
          <div class="top-overlay">
            <div class="overlay-title">Most Popular</div>
            <div class="overlay-subtitle">Premium Plan</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingHero'
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, #0f172a, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3));
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/testi-hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
}

.content-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .content-container {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }
}

@media (min-width: 640px) {
  .content-container {
    padding: 1.5rem;
  }
}

.text-content {
  text-align: center;
}

@media (min-width: 1024px) {
  .text-content {
    text-align: left;
  }
}

.rating-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .rating-container {
    justify-content: flex-start;
  }
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star-icon {
  width: 24px;
  height: 24px;
  color: #facc15;
}

.rating-text {
  margin-left: 0.75rem;
  font-size: 1.125rem;
  color: #d1d5db;
}

.title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .title {
    font-size: 4.5rem;
    line-height: 5rem;
  }
}

.title-highlight {
  background: linear-gradient(to right, #ffffff, #c7d2fe, #e9d5ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.title-main {
  color: #ffffff;
}

.description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 28rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  margin-bottom: 2rem;
}

.stat-number {
  font-size: 1.875rem;
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
  font-size: 0.875rem;
  color: #9ca3af;
}

.image-container {
  display: none;
}

@media (min-width: 1024px) {
  .image-container {
    display: block;
  }
}

.image-wrapper {
  position: relative;
}

.hero-image {
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.bottom-overlay {
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.overlay-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.crown-icon {
  width: 24px;
  height: 24px;
}

.overlay-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
}

.overlay-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
  color: #ffffff;
}

.top-overlay {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 0.75rem;
  padding: 1rem;
  color: #ffffff;
}
</style>