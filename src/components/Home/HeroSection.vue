<template>
  <section id="home" class="hero-section">
    <div class="background-gradient"></div>
    <div
        class="background-image"
        :style="{
        backgroundImage: 'url(https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }"
    ></div>

    <div class="content-container">
      <div class="text-content">
        <div class="rating-container">
          <div class="stars">
            <svg
                v-for="n in 5"
                :key="n"
                class="star-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
          <span class="rating-text">Rated #1 Premium Platform</span>
        </div>

        <h1 class="hero-title">
          <span class="title-highlight">Sugar</span>
          <br />
          <span>MummyForum</span>
        </h1>

        <p class="hero-description">
          Where successful individuals meet for mutually beneficial relationships.
          Discreet, exclusive, and designed for those who value quality
          connections.
        </p>

        <div class="features-container">
          <div class="feature-item">
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
            <span class="feature-text">100% Verified Profiles</span>
          </div>
          <div class="feature-item">
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
            <span class="feature-text">Complete Privacy</span>
          </div>
        </div>

        <div class="button-container" @click="onPostClick">
          <button class="primary-button">
            <span>Start Your Journey</span>
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
<!--          <button class="secondary-button">-->
<!--            <svg-->
<!--                class="play-icon"-->
<!--                viewBox="0 0 24 24"-->
<!--                fill="none"-->
<!--                stroke="currentColor"-->
<!--                stroke-width="2"-->
<!--                stroke-linecap="round"-->
<!--                stroke-linejoin="round"-->
<!--            >-->
<!--              <polygon points="5 3 19 12 5 21 5 3"></polygon>-->
<!--            </svg>-->
<!--            <span>Watch Story</span>-->
<!--          </button>-->
        </div>

<!--        <div class="stats-container">-->
<!--          <div class="stat-item">-->
<!--            <div class="stat-value text-indigo-400">50K+</div>-->
<!--            <div class="stat-label">Active Members</div>-->
<!--          </div>-->
<!--          <div class="stat-item">-->
<!--            <div class="stat-value text-purple-400">98%</div>-->
<!--            <div class="stat-label">Success Rate</div>-->
<!--          </div>-->
<!--          <div class="stat-item">-->
<!--            <div class="stat-value text-indigo-400">60+</div>-->
<!--            <div class="stat-label">Countries</div>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <div class="image-container">
        <div class="image-wrapper">
          <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elegant couple"
              class="hero-image"
          />
          <div class="online-indicator">
            <div class="pulse-dot"></div>
            <span class="indicator-text">2,847 Members Online Now</span>
          </div>
          <div class="match-notification">
            <div class="match-title">New Match!</div>
            <div class="match-details">Sarah, 28 • Executive</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'HeroSection',
  methods: {
    onPostClick() {
      this.$router.push("/request");
    },
  },
};
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
  inset: 0;
  background: linear-gradient(to bottom right, #0f172a, rgba(79, 70, 229, 0.2), rgba(147, 51, 234, 0.2));
}

.background-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
}

.content-container {
  position: relative;
  z-index: 10;
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
  width: 1.25rem;
  height: 1.25rem;
  color: #facc15; /* Equivalent to text-yellow-400 */
}

.rating-text {
  margin-left: 0.5rem;
  color: #cbd5e1; /* Equivalent to text-slate-300 */
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 0.9;
  margin-bottom: 1.3rem;
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.title-highlight {
  background: linear-gradient(to right, #ffffff, #e0e7ff, #ddd6fe);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #cbd5e1; /* Equivalent to text-slate-300 */
  margin-bottom: 1.5rem;
  max-width: 28rem;
}

.features-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .features-container {
    justify-content: flex-start;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #34d399; /* Equivalent to text-green-400 */
}

.feature-text {
  font-size: 0.875rem;
  color: #cbd5e1; /* Equivalent to text-slate-300 */
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

  @media (min-width: 1024px) {
    .button-container {
      justify-content: flex-start;
    }
  }
}

.primary-button,
.secondary-button {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: white;
  border: none;
}

.primary-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.secondary-button {
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  background: transparent;
}

.secondary-button:hover {
  border-color: rgba(255, 255, 255, 0.4);
}

.arrow-icon,
.play-icon {
  width: 1.15rem;
  height: 1.15rem;
}

.stats-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .stats-container {
    justify-content: flex-start;
  }
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8; /* Equivalent to text-slate-400 */
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.online-indicator {
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pulse-dot {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #10b981; /* Equivalent to bg-green-500 */
  border-radius: 9999px;
  animation: pulse 2s infinite;
}

.indicator-text {
  font-size: 0.875rem;
  color: white;
}

.match-notification {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 0.75rem;
  padding: 1rem;
  color: white;
}

.match-title {
  font-size: 0.875rem;
  font-weight: 500;
}

.match-details {
  font-size: 0.75rem;
  opacity: 0.8;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Additional mobile responsiveness */
@media (max-width: 640px) {
  .hero-title {
    font-size: 1.875rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .primary-button,
  .secondary-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .stats-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>