<template>
  <section class="team-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Meet Our Team</h2>
        <p class="header-description">
          Our diverse team of experts is dedicated to creating the world's premier platform
          for sophisticated connections.
        </p>
      </div>

      <!-- Leadership Team -->
      <div class="leadership-section">
        <h3 class="section-title">Leadership Team</h3>
        <div class="leadership-grid">
          <div
              v-for="(member, index) in leadership"
              :key="index"
              class="member-card"
          >
            <div class="member-image-container">
              <img
                  :src="member.image"
                  :alt="member.name"
                  class="member-image"
              />
              <div class="image-overlay"></div>
            </div>
            <div class="member-info">
              <h4 class="member-name">{{ member.name }}</h4>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="social-links">
                <a
                    :href="member.social.linkedin"
                    class="social-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                    :href="member.social.twitter"
                    class="social-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                    :href="`mailto:${member.social.email}`"
                    class="social-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Departments -->
      <div class="departments-container">
        <h3 class="section-title">Our Global Team</h3>
        <div class="departments-grid">
          <div
              v-for="(dept, index) in departments"
              :key="index"
              class="department-item"
          >
            <div class="department-count">{{ dept.count }}</div>
            <div class="department-name">{{ dept.name }}</div>
            <div class="department-description">{{ dept.description }}</div>
          </div>
        </div>
        <div class="departments-footer">
          <p class="footer-text">
            Join our team of passionate professionals dedicated to revolutionizing how successful individuals connect.
          </p>
<!--          <button class="join-button">View Open Positions</button>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      leadership: [
        {
          name: 'Alexandra Chen',
          role: 'CEO & Co-Founder',
          bio: 'Former tech executive with 15+ years in relationship technology. Harvard MBA, passionate about creating meaningful connections.',
          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: {
            linkedin: '#',
            twitter: '#',
            email: '#'
          }
        },
        {
          name: 'Marcus Rodriguez',
          role: 'CTO & Co-Founder',
          bio: 'Security expert and former Silicon Valley engineer. Specializes in privacy-first technology and scalable platforms.',
          image: 'https://cdn.pixabay.com/photo/2020/11/30/17/19/man-5791551_1280.jpg',
          social: {
            linkedin: '#',
            twitter: '#',
            email: 'marcus@eliteconnect.com'
          }
        },
        {
          name: 'Dr. Sarah Williams',
          role: 'Head of Safety & Psychology',
          bio: 'Licensed psychologist and relationship expert. Ensures our platform promotes healthy, beneficial connections.',
          image: 'https://cdn.pixabay.com/photo/2016/03/13/20/49/woman-1254453_1280.jpg',
          social: {
            linkedin: '#',
            twitter: '#',
            email: '#'
          }
        },
        {
          name: 'James Thompson',
          role: 'VP of Global Operations',
          bio: 'International business expert who oversees our expansion across 60+ countries and ensures cultural sensitivity.',
          image: 'https://cdn.pixabay.com/photo/2015/11/07/22/29/business-1032839_1280.jpg',
          social: {
            linkedin: '#',
            twitter: '#',
            email: '#'
          }
        }
      ],
      departments: [
        {
          name: 'Engineering',
          count: '45+',
          description: 'Building secure, scalable technology'
        },
        {
          name: 'Safety & Moderation',
          count: '25+',
          description: 'Ensuring member safety 24/7'
        },
        {
          name: 'Customer Success',
          count: '30+',
          description: 'Supporting our global community'
        },
        {
          name: 'Global Operations',
          count: '20+',
          description: 'Managing worldwide expansion'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team-section {
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

.leadership-section {
  margin-bottom: 5rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
}

.leadership-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .leadership-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .leadership-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.member-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
  text-align: center;
}

.member-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.member-image-container {
  position: relative;
  margin-bottom: 1rem;
}

.member-image {
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  object-fit: cover;
  margin: 0 auto;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.5), transparent);
  border-radius: 9999px;
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.member-role {
  color: #818cf8;
  margin-bottom: 0.75rem;
}

.member-bio {
  font-size: 0.875rem;
  color: #d1d5db;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.social-icon {
  width: 2rem;
  height: 2rem;
  background: #1e293b;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background: #6366f1;
}

.departments-container {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.departments-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .departments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .departments-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.department-item {
  text-align: center;
}

.department-count {
  font-size: 2.25rem;
  font-weight: 700;
  color: #818cf8;
  margin-bottom: 0.5rem;
}

.department-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.department-description {
  color: #9ca3af;
}

.departments-footer {
  text-align: center;
  margin-top: 3rem;
}

.footer-text {
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.join-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.join-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}
</style>