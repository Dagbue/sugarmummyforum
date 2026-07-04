<template>
  <section class="hero-section">
    <div class="background-gradient"></div>
    <div class="background-image"></div>

    <div class="content-container">
      <div class="text-content">
        <h1 class="title">
          <span class="title-highlight">About</span><br />
          <span class="title-main">SMFM</span>
        </h1>

        <p class="description">
          Pioneering the future of sophisticated connections since 2012.
          We've redefined how successful individuals meet and form meaningful relationships.
        </p>

        <div class="button-container" @click="onPostClick">
          <button class="join-button">
            <span>Join Our Community</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div class="stats-grid">
          <div>
            <div class="stat-number stat-indigo">15+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div>
            <div class="stat-number stat-purple">60+</div>
            <div class="stat-label">Countries</div>
          </div>
          <div>
            <div class="stat-number stat-indigo">5M+</div>
            <div class="stat-label">Members</div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <div class="image-wrapper">
          <img
              src="@/assets/about-hero.jpg"
              alt="Sophisticated couple"
              class="hero-image"
          />
          <div class="image-overlay">
            <div class="overlay-content">
              <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <div>
                <div class="overlay-title">Trusted Platform</div>
                <div class="overlay-subtitle">Since 2012</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutHeroSection',
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
  background-image: url('https://d3qkxh84sanyh9.cloudfront.net/us/usa_bg.webp');
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

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .button-container {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .button-container {
    justify-content: flex-start;
  }
}

.join-button {
  padding: 1rem 2.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
}

.join-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
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
  width: 77%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.image-overlay {
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

.heart-icon {
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
</style>