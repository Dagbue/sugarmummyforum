<template>
  <section class="contact-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Our Global Presence</h2>
        <p class="header-description">
          With offices across three continents, we provide round-the-clock support
          to our elite community worldwide.
        </p>
      </div>

      <!-- Office Locations -->
      <div class="offices-grid">
        <div
            v-for="(office, index) in offices"
            :key="index"
            class="office-card"
        >
          <div class="office-header">
            <div class="office-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            </div>
            <h3 class="office-title">{{ office.city }}</h3>
          </div>
          <div class="office-details">
            <p>{{ office.address }}</p>
            <p>{{ office.zipcode }}</p>
            <div class="detail-item">
              <svg
                  class="detail-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{{ office.hours }}</span>
            </div>
            <div class="detail-item">
              <svg
                  class="detail-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M12 2a10 10 0 0 0-10 10c0 8 10 12 10 12s10-4 10-12a10 10 0 0 0-10-10z"></path>
              </svg>
              <span>{{ office.timezone }}</span>
            </div>
          </div>
        </div>
      </div>



      <!-- Emergency Contact -->
      <div class="emergency-section">
        <svg
            class="emergency-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f87171"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <h3 class="emergency-title">Emergency Support</h3>
        <p class="emergency-description">
          For urgent safety concerns or immediate assistance, our emergency support team
          is available 24/7. Your safety and security are our top priorities.
        </p>
        <div class="emergency-buttons">
          <button class="emergency-button">Emergency Hotline: +1 (555) 911-HELP</button>
          <button class="report-button">Report Safety Concern</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  name: 'ContactInfo',
  setup() {
    const offices = [
      {
        city: 'Auckland',
        address: '11, Commercial Bay Tower Level 17/19 Customs Street West',
        zipcode: 'Auckland 1010',
        timezone: 'New Zealand Standard Time (NZST), UTC+12:00.',
        hours: '9:00 AM - 6:00 PM'
      },

    ]

    const supportChannels = [
      {
        icon: defineComponent({
          template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><path d="M9 9H3"></path><path d="M16 16h-6"></path><circle cx="6" cy="19" r="2"></circle><circle cx="13" cy="19" r="2"></circle></svg>`
        }),
        title: 'Live Chat',
        description: 'Instant support through our website chat',
        availability: '24/7',
        color: 'gradient-blue-cyan'
      },
      {
        icon: defineComponent({
          template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
        }),
        title: 'WhatsApp',
        description: 'Direct messaging for quick questions',
        availability: 'Business Hours',
        color: 'gradient-green-emerald'
      },
      {
        icon: defineComponent({
          template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
        }),
        title: 'Secure Portal',
        description: 'Private member support portal',
        availability: '24/7',
        color: 'gradient-purple-indigo'
      }
    ]

    return { offices, supportChannels }
  }
}
</script>

<style scoped>
.contact-section {
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

.offices-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .offices-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.office-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  transition: all 0.3s ease;
}

.office-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.office-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.office-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.office-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.office-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #d1d5db;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.detail-icon {
  width: 16px;
  height: 16px;
}

.support-section {
  margin-bottom: 4rem;
}

.support-title {
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
}

.support-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .support-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.support-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
  text-align: center;
  transition: all 0.3s ease;
}

.support-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
}

.support-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #ffffff;
}

.gradient-blue-cyan {
  background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
}

.gradient-green-emerald {
  background: linear-gradient(to bottom right, #22c55e, #059669);
}

.gradient-purple-indigo {
  background: linear-gradient(to bottom right, #a855f7, #6366f1);
}

.channel-icon {
  width: 24px;
  height: 24px;
}

.support-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.support-description {
  color: #d1d5db;
  margin-bottom: 0.75rem;
}

.support-availability {
  display: inline-block;
  background: rgba(99, 102, 241, 0.2);
  color: #818cf8;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.emergency-section {
  background: linear-gradient(to right, rgba(127, 29, 29, 0.2), rgba(194, 65, 12, 0.2));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(239, 68, 68, 0.3);
  text-align: center;
}

.emergency-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
}

.emergency-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f87171;
}

.emergency-description {
  color: #d1d5db;
  margin-bottom: 1.5rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.emergency-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .emergency-buttons {
    flex-direction: row;
  }
}

.emergency-button {
  padding: 0.75rem 2rem;
  background: #dc2626;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: background 0.3s ease;
  border: none;
}

.emergency-button:hover {
  background: #b91c1c;
}

.report-button {
  padding: 0.75rem 2rem;
  border: 1px solid #ef4444;
  border-radius: 0.5rem;
  color: #f87171;
  transition: all 0.3s ease;
}

.report-button:hover {
  background: rgba(239, 68, 68, 0.1);
}
</style>