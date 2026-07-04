<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Featured Success Stories</h2>
        <p class="header-description">
          Hear directly from our elite members about their transformative experiences on SMFM
        </p>
      </div>

      <div class="testimonials-grid">
        <div
            v-for="(testimonial, index) in featuredTestimonials"
            :key="index"
            class="testimonial-card"
        >
          <!-- Header -->
          <div class="card-header">
            <div class="rating-stars">
              <svg
                  v-for="n in testimonial.rating"
                  :key="n"
                  class="star-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            <span class="category-tag">{{ testimonial.category }}</span>
          </div>

          <!-- Profile -->
          <div class="profile-section">
            <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="profile-image"
            />
            <div class="profile-info">
              <h3 class="profile-name">{{ testimonial.name }}</h3>
              <p class="profile-role">{{ testimonial.role }}</p>
              <div class="profile-meta">
                <div class="meta-item">
                  <svg
                      class="meta-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{{ testimonial.location }}</span>
                </div>
                <div class="meta-item">
                  <svg
                      class="meta-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <span>{{ testimonial.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial -->
          <div class="testimonial-content">
            <svg
                class="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#818cf8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v8c0 1.25.75 2 2 2h3l-2 4z"></path>
              <path d="M13 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v8c0 1.25.75 2 2 2h3l-2 4z"></path>
            </svg>
            <p class="testimonial-text">"{{ testimonial.testimonial }}"</p>
          </div>

          <!-- Highlight -->
          <div class="highlight-section">
            <div class="highlight-title">Key Achievement:</div>
            <div class="highlight-text">{{ testimonial.highlight }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedTestimonialsSection',
  data() {
    return {
      featuredTestimonials: [
        {
          name: 'Alexandra M.',
          age: 28,
          location: 'New York City, NY',
          role: 'Business Executive',
          image: 'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg',
          rating: 5,
          date: '2 months ago',
          testimonial: 'I was skeptical about sugar dating platforms until I found SMFM. The quality of connections here is unmatched. I\'ve met genuine, successful individuals who understand my lifestyle and goals. The verification process gives me complete confidence in every interaction.',
          highlight: 'Found my perfect arrangement within 2 weeks',
          category: 'Sugar Baby'
        },
        {
          name: 'Marcus R.',
          age: 45,
          location: 'Los Angeles, CA',
          role: 'Tech Entrepreneur',
          image: 'https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg',
          rating: 5,
          date: '1 month ago',
          testimonial: 'As a busy entrepreneur, I needed a platform that understood discretion and quality. SMFM delivered beyond my expectations. The women I\'ve connected with are intelligent, ambitious, and genuinely interested in mutually beneficial relationships.',
          highlight: '3 meaningful connections in first month',
          category: 'Sugar Daddy'
        },
        {
          name: 'Sophia L.',
          age: 24,
          location: 'Miami, FL',
          role: 'Graduate Student',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          date: '3 weeks ago',
          testimonial: 'SMFM helped me find financial support while pursuing my MBA. The gentlemen I\'ve met are respectful, generous, and genuinely interested in my success. This platform has been life-changing for my education and career goals.',
          highlight: 'Tuition fully covered through connections',
          category: 'Sugar Baby'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-section {
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
  max-width: 768px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.rating-stars {
  display: flex;
  gap: 0.25rem;
}

.star-icon {
  width: 20px;
  height: 20px;
  color: #facc15;
}

.category-tag {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid rgba(99, 102, 241, 0.3);
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.profile-role {
  color: #818cf8;
}

.profile-meta {
  display: flex;
  gap: 1rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}



.meta-icon {
  width: 12px;
  height: 12px;
}

.testimonial-content {
  position: relative;
  margin-bottom: 1.5rem;
}

.quote-icon {
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  width: 32px;
  height: 32px;
  color: rgba(129, 140, 248, 0.3);
}

.testimonial-text {
  color: #d1d5db;
  font-style: italic;
  padding-left: 1.5rem;
  line-height: 1.625;
}

.highlight-section {
  background: linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.highlight-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #818cf8;
  margin-bottom: 0.25rem;
}

.highlight-text {
  font-size: 0.875rem;
  color: #d1d5db;
}
</style>