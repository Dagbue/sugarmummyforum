<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">More Success Stories</h2>
        <p class="header-description">
          Browse through hundreds of authentic testimonials from our global community
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="filter-buttons">
        <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="['filter-button', { 'filter-active': activeFilter === filter.id }]"
        >
          <div class="filter-content">
            <svg
                class="filter-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span>{{ filter.label }}</span>
            <span class="filter-count">{{ filter.count }}</span>
          </div>
        </button>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div
            v-for="(testimonial, index) in filteredTestimonials"
            :key="index"
            class="testimonial-card"
        >
          <!-- Rating -->
          <div class="card-header">
            <div class="rating-stars">
              <svg
                  v-for="n in testimonial.rating"
                  :key="n"
                  class="star-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
            <span :class="['category-tag', testimonial.category === 'Sugar Baby' ? 'category-sugar-baby' : 'category-sugar-daddy']">
              {{ testimonial.category }}
            </span>
          </div>

          <!-- Testimonial Text -->
          <p class="testimonial-text">"{{ testimonial.testimonial }}"</p>

          <!-- Profile -->
          <div class="profile-section">
            <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="profile-image"
            />
            <div class="profile-info">
              <div class="profile-name">{{ testimonial.name }}</div>
              <div class="profile-location">
                <svg
                    class="location-icon"
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
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
<!--      <div class="load-more-section">-->
<!--        <button class="load-more-button">Load More Stories</button>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TestimonialGridSection',
  setup() {
    const activeFilter = ref('all')

    const testimonials = [
      {
        name: 'Emma K.',
        age: 26,
        location: 'London, UK',
        category: 'Sugar Baby',
        rating: 5,
        testimonial: 'The international reach is incredible. I\'ve connected with successful gentlemen from around the world who appreciate intelligence and ambition.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'David W.',
        age: 52,
        location: 'San Francisco, CA',
        category: 'Sugar Daddy',
        rating: 5,
        testimonial: 'The verification process and security measures give me complete confidence. It\'s refreshing to find a platform that prioritizes authenticity.',
        image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Isabella C.',
        age: 23,
        location: 'Milan, Italy',
        category: 'Sugar Baby',
        rating: 5,
        testimonial: 'As a fashion student, I needed financial support without compromising my values. SMFM connected me with mentors who genuinely care about my success.',
        image: 'https://cdn.pixabay.com/photo/2024/05/22/09/29/ai-generated-8780177_1280.jpg'
      },
      {
        name: 'James T.',
        age: 41,
        location: 'Dubai, UAE',
        category: 'Sugar Daddy',
        rating: 5,
        testimonial: 'The concierge service is exceptional. They help arrange meetings and ensure everything is handled with complete discretion and professionalism.',
        image: 'https://cdn.pixabay.com/photo/2024/11/22/13/20/man-9216455_1280.jpg'
      },
      {
        name: 'Aria M.',
        age: 25,
        location: 'Toronto, Canada',
        category: 'Sugar Baby',
        rating: 5,
        testimonial: 'I was hesitant at first, but the platform\'s emphasis on mutual respect and clear expectations made all the difference. Truly life-changing.',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Robert H.',
        age: 48,
        location: 'Sydney, Australia',
        category: 'Sugar Daddy',
        rating: 5,
        testimonial: 'The quality of women on this platform is outstanding. Intelligent, ambitious, and genuinely interested in building meaningful connections.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Chloe R.',
        age: 22,
        location: 'Paris, France',
        category: 'Sugar Baby',
        rating: 5,
        testimonial: 'The platform helped me focus on my art career without financial stress. The gentlemen I\'ve met are cultured and supportive of my creative pursuits.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Michael S.',
        age: 39,
        location: 'Singapore',
        category: 'Sugar Daddy',
        rating: 5,
        testimonial: 'Traveling frequently for business, I needed flexible arrangements. SMFM\'s global network made it possible to maintain connections worldwide.',
        image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Luna P.',
        age: 27,
        location: 'Barcelona, Spain',
        category: 'Sugar Baby',
        rating: 5,
        testimonial: 'The platform\'s emphasis on safety and verification made me feel secure from day one. Every interaction has been respectful and genuine.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]

    const filters = [
      { id: 'all', label: 'All Stories', count: testimonials.length },
      { id: 'Sugar Baby', label: 'Sugar Babies', count: testimonials.filter(t => t.category === 'Sugar Baby').length },
      { id: 'Sugar Daddy', label: 'Sugar Daddies', count: testimonials.filter(t => t.category === 'Sugar Daddy').length }
    ]

    const filteredTestimonials = computed(() => {
      return activeFilter.value === 'all'
          ? testimonials
          : testimonials.filter(t => t.category === activeFilter.value)
    })

    return { activeFilter, filters, filteredTestimonials }
  }
}
</script>

<style scoped>
.testimonials-section {
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
  margin-bottom: 3rem;
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
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-button {
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  background: #1e293b;
  color: #d1d5db;
  transition: all 0.3s ease;
  border: none;
}

.filter-button:hover {
  background: #334155;
}

.filter-active {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: #ffffff;
}

.filter-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-icon {
  width: 16px;
  height: 16px;
}

.filter-count {
  background: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.filter-active .filter-count {
  background: #4b5563;
}

.testimonials-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  transform: scale(1.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.rating-stars {
  display: flex;
  gap: 0.25rem;
}

.star-icon {
  width: 16px;
  height: 16px;
  color: #facc15;
}

.category-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.category-sugar-baby {
  background: rgba(236, 72, 153, 0.2);
  color: #f472b6;
}

.category-sugar-daddy {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.testimonial-text {
  color: #d1d5db;
  margin-bottom: 1rem;
  font-style: italic;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.profile-image {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
}

.profile-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #9ca3af;
}

.location-icon {
  width: 12px;
  height: 12px;
}

.load-more-section {
  text-align: center;
  margin-top: 3rem;
}

.load-more-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.load-more-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}
</style>