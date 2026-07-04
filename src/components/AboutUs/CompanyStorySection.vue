<template>
  <section class="story-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Our Journey</h2>
        <p class="header-description">
          From a simple idea to the world's premier platform for sophisticated connections.
          Here's how we've evolved over the years.
        </p>
      </div>

      <div class="story-content">
        <div class="story-text">
          <h3 class="story-title">The SMFM Story</h3>
          <p class="story-paragraph">
            SMFM was born from a simple observation : successful individuals deserve a platform
            that understands their unique needs and lifestyle. Traditional dating apps weren't designed
            for people seeking mutually beneficial relationships built on transparency and respect.
          </p>
          <p class="story-paragraph">
            Our founders, having experienced the challenges of finding meaningful connections in their
            professional lives, decided to create something different. A platform where authenticity
            meets sophistication, where privacy is paramount, and where every connection has the
            potential to be transformative.
          </p>
          <p class="story-paragraph">
            Today, SMFM stands as the gold standard in premium relationship platforms,
            trusted by millions of successful individuals worldwide who value quality, discretion,
            and genuine connections.
          </p>
        </div>
        <div class="story-image-container">
          <img
              src="@/assets/company-story.webp"
              alt="Company founders"
              class="story-image"
          />
          <div class="image-overlay"></div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-items">
          <div
              v-for="(milestone, index) in milestones"
              :key="index"
              :class="['timeline-item', index % 2 === 0 ? 'timeline-left' : 'timeline-right']"
          >
            <div :class="['timeline-content', index % 2 === 0 ? 'pr-8' : 'pl-8']">
              <div class="milestone-card">
                <div class="milestone-header">
                  <div class="milestone-icon-container">
                    <img :src="milestone.icon" class="milestone-icon" :alt="milestone.title" />
                  </div>
                  <div class="milestone-year">{{ milestone.year }}</div>
                </div>
                <h4 class="milestone-title">{{ milestone.title }}</h4>
                <p class="milestone-description">{{ milestone.description }}</p>
              </div>
            </div>
            <div class="timeline-dot-container">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CompanyStorySection',
  data() {
    return {
      milestones: [
        {
          year: '2012',
          title: 'Foundation',
          description: 'SMFM was founded with a vision to create authentic connections for successful individuals.',
          icon: require("@/assets/icons8-calendar-50.png"),
        },
        {
          year: '2015',
          title: 'Global Expansion',
          description: 'Expanded to 25 countries, establishing our international presence and diverse community.',
          icon: require("@/assets/icons8-calendar-50.png"),
        },
        {
          year: '2018',
          title: '1 Million Members',
          description: 'Reached our first million verified members, becoming the leading platform in our space.',
          icon: require("@/assets/icons8-calendar-50.png"),
        },
        {
          year: '2021',
          title: 'Industry Recognition',
          description: 'Received multiple awards for innovation, safety, and user experience excellence.',
          icon: require("@/assets/icons8-calendar-50.png"),
        },
        {
          year: '2025',
          title: '5 Million Strong',
          description: 'Today, we proudly serve over 5 million members across 60+ countries worldwide.',
          icon: require("@/assets/icons8-calendar-50.png"),
        }
      ]
    }
  }
}
</script>

<style scoped>
.story-section {
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

.story-content {
  display: grid;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .story-content {
    grid-template-columns: 1fr 1fr;
  }
}

.story-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.story-paragraph {
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.story-image-container {
  position: relative;
}

.story-image {
  border-radius: 1rem;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.5), transparent);
  border-radius: 1rem;
}

.timeline-container {
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #6366f1, #9333ea);
  border-radius: 9999px;
}

@media (max-width: 1023px) {
  .timeline-line {
    display: none;
  }
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline-item {
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  .timeline-item {
    flex-direction: row;
  }
  .timeline-left {
    flex-direction: row;
  }
  .timeline-right {
    flex-direction: row-reverse;
  }
}

.timeline-content {
  width: 100%;
}

@media (min-width: 1024px) {
  .timeline-content {
    width: 41.666667%;
  }
  .timeline-left .pr-8 {
    padding-right: 2rem;
  }
  .timeline-right .pl-8 {
    padding-left: 2rem;
  }
}

.milestone-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
}

.milestone-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.milestone-icon-container {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.milestone-icon {
  width: 24px;
  height: 24px;
}

.milestone-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #818cf8;
}

.milestone-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.milestone-description {
  color: #d1d5db;
}

.timeline-dot-container {
  display: none;
}

@media (min-width: 1024px) {
  .timeline-dot-container {
    display: flex;
    width: 16.666667%;
    justify-content: center;
  }
}

.timeline-dot {
  width: 1rem;
  height: 1rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 9999px;
  border: 4px solid #0f172a;
}

.timeline-spacer {
  display: none;
}

@media (min-width: 1024px) {
  .timeline-spacer {
    display: block;
    width: 41.666667%;
  }
}
</style>