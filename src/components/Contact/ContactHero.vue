<template>
  <section class="hero-section">
    <div class="background-gradient"></div>
    <div class="background-image"></div>

    <div class="content-container">
      <div class="text-content">
        <h1 class="title">
          <span class="title-highlight">Contact</span><br />
          <span class="title-main">Us</span>
        </h1>

        <p class="description">
          Get in touch with our SMFM support team. We're here to help you navigate
          your journey to meaningful connections with complete discretion and professionalism.
        </p>

        <div class="stats-grid">
          <div>
            <div class="stat-number stat-indigo">24/7</div>
            <div class="stat-label">Support Available</div>
          </div>
          <div>
            <div class="stat-number stat-purple">&lt;1hr</div>
            <div class="stat-label">Response Time</div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <div class="image-wrapper">
          <img
              src="https://cdn.pixabay.com/photo/2017/07/25/09/39/call-center-2537390_1280.jpg"
              alt="Contact support"
              class="hero-image"
          />
          <div class="overlay">
            <div class="overlay-content">
              <svg
                  class="clock-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <div class="overlay-title">Support Online</div>
                <div class="overlay-subtitle">Ready to help</div>
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
  name: 'ContactHero'
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
  background-image: url('@/assets/testi-image.webp');
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
  display: flex;
  gap: 1rem;
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
  grid-template-columns: repeat(2, 1fr);
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

.overlay {
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

.clock-icon {
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