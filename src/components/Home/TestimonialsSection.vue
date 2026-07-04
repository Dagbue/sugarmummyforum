<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Success Stories</h2>
        <p class="section-description">
          Hear from our members about their exceptional experiences and meaningful connections
        </p>
      </div>

      <div class="testimonials-grid">
        <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
        >
          <div class="rating">
            <svg
                v-for="n in testimonial.rating"
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

          <div class="quote-container">
            <svg
                class="quote-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 .008"
              ></path>
              <path
                  d="M13 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3"
              ></path>
            </svg>
            <p class="quote-text">{{testimonial.content}}</p>
          </div>

          <div class="user-info">
            <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="user-image"
            />
            <div>
              <div class="user-name">{{ testimonial.name }}</div>
              <div class="user-role">{{ testimonial.role }}</div>
              <div class="user-location">{{ testimonial.location }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-container">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div :class="['stat-value', stat.color]">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  setup() {
    const testimonials = [
      {
        name: "Alexandra M.",
        role: "Business Executive",
        location: "New York",
        content: "The quality of connections here is unmatched. I've found genuine, meaningful relationships that align perfectly with my lifestyle and goals.",
        rating: 5,
        image: "https://cdn.pixabay.com/photo/2017/06/01/00/44/smiling-2362136_1280.jpg"
      },
      {
        name: "James R.",
        role: "Entrepreneur",
        location: "Los Angeles",
        content: "Discrete, professional, and exactly what I was looking for. The verification process ensures you're connecting with genuine, successful individuals.",
        rating: 5,
        image: "https://cdn.pixabay.com/photo/2022/01/07/19/06/executive-6922418_1280.jpg"
      },
      {
        name: "Sophia L.",
        role: "Creative Director",
        location: "London",
        content: "A sophisticated platform that understands the importance of quality over quantity. The matching algorithm is incredibly accurate.",
        rating: 5,
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        name: "Michael K.",
        role: "Investment Banker",
        location: "Dubai",
        content: "Finally, a platform that caters to successful professionals. The concierge service and privacy features are exceptional.",
        rating: 5,
        image: "https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324_1280.jpg"
      },
      {
        name: "Isabella C.",
        role: "Fashion Designer",
        location: "Milan",
        content: "The international reach is amazing. I've connected with fascinating people from around the world who share my values and interests.",
        rating: 5,
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        name: "David W.",
        role: "Tech CEO",
        location: "San Francisco",
        content: "The verification process and security measures give me complete confidence. It's refreshing to find a platform that prioritizes authenticity.",
        rating: 5,
        image: "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg"
      }
    ];

    const stats = [
      { value: "50K+", label: "SMFA Members", color: "text-indigo-400" },
      { value: "15+", label: "Years Experience", color: "text-purple-400" },
      { value: "60+", label: "Countries", color: "text-indigo-400" },
      { value: "99%", label: "Satisfaction", color: "text-purple-400" }
    ];

    return {
      testimonials,
      stats
    };
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background-color: rgba(30, 41, 59, 0.5); /* bg-slate-800/50 */
}

.container {
  max-width: 1280px;
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
  max-width: 32rem;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-card {
  background: rgba(30, 41, 59, 0.8); /* bg-slate-800/80 */
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(51, 65, 85, 0.5); /* border-slate-700/50 */
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  border-color: rgba(99, 102, 241, 0.3); /* hover:border-indigo-500/30 */
  transform: scale(1.05);
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.star-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #facc15; /* text-yellow-400 */
}

.quote-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.quote-icon {
  width: 2rem;
  height: 2rem;
  color: rgba(99, 102, 241, 0.3); /* text-indigo-400/30 */
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
}

.quote-text {
  color: #cbd5e1; /* text-slate-300 */
  font-style: italic;
  padding-left: 1.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-image {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;
}

.user-name {
  font-weight: 600;
}

.user-role {
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.user-location {
  font-size: 0.75rem;
  color: #6b7280; /* text-slate-500 */
}

.stats-container {
  display: grid;
  gap: 2rem;
  text-align: center;
  background: linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3); /* border-slate-600/30 */
}

@media (min-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.text-indigo-400 {
  color: #818cf8;
}

.text-purple-400 {
  color: #c084fc;
}

.stat-label {
  color: #cbd5e1; /* text-slate-300 */
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .testimonials-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>