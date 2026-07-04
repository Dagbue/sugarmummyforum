<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="brand-section">
          <div class="brand-logo">
            <svg
                class="logo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
            <span class="brand-name">SMFM</span>
          </div>
          <p class="brand-description">
            The premier platform for sophisticated connections and mutually beneficial relationships among successful individuals worldwide.
          </p>
          <div class="brand-info">
            <div class="info-item">
              <svg
                  class="info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Secure & Private</span>
            </div>
            <div class="info-item">
              <svg
                  class="info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
              <span>60+ Countries</span>
            </div>
          </div>
        </div>

        <!-- Platform -->
        <div class="footer-column">
          <h4 class="column-title">Platform</h4>
          <div class="column-links">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About Us</router-link>
            <router-link to="/pricing" class="link">Pricing</router-link>
            <router-link to="/testimonials" class="link">Testimony</router-link>
            <router-link to="/contactUs" class="link">Contact Us</router-link>
            <router-link to="/request" class="link">Join SMFA</router-link>
          </div>
        </div>


        <!-- Contact -->
        <div class="footer-column">
          <h4 class="column-title">Contact</h4>
          <div class="column-links">
            <div class="contact-item">
              <i class='bx bx-envelope contact-icon'></i>
              <span>support@sugarmummyforum.com</span>
            </div>
            <div class="contact-item">
              <svg
                  class="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path
                    d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              <span>+61 480 882 242</span>
            </div>
            <div class="contact-item">

              <i class='bx bx-current-location contact-icon'></i>
              <span>11, Commercial Bay Tower Level 17/19 Customs Street West, Auckland 1010, New Zealand</span>
            </div>
            <div class="contact-item award">
              <svg
                  class="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <span>Premium Quality Assured</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="trust-indicators">
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-value text-indigo-400">50K+</div>
            <div class="trust-label">Verified Members</div>
          </div>
          <div class="trust-item">
            <div class="trust-value text-purple-400">15+</div>
            <div class="trust-label">Years Experience</div>
          </div>
          <div class="trust-item">
            <div class="trust-value text-indigo-400">99%</div>
            <div class="trust-label">Satisfaction Rate</div>
          </div>
          <div class="trust-item">
            <div class="trust-value text-purple-400">24/7</div>
            <div class="trust-label">Premium Support</div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="bottom-section">
        <p class="copyright">
          &copy; 2026 SMFM. All rights reserved. Connecting sophisticated individuals worldwide.
        </p>
        <div class="bottom-links">
          <p class="bottom-link">Privacy</p>
          <p class="bottom-link">Terms</p>
          <p class="bottom-link">Cookies</p>
          <p class="bottom-link">Accessibility</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  setup() {
    return {};
  }
};
</script>

<style scoped>
.footer-section {
  background-color: #1e293b; /* bg-slate-800 */
  padding: 4rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-grid {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3%;
}

@media (max-width: 768px) {
  .footer-grid {
    display: block;
  }
}


.brand-section {
  display: flex;
  flex-direction: column;
  width: 45%;
}

@media (max-width: 768px) {
  .brand-section {
    width: 95%;
    margin-bottom: 3%;
  }
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.brand-description {
  color: #cbd5e1; /* text-slate-300 */
  margin-bottom: 1.5rem;
}

.brand-info {
  display: flex;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #cbd5e1; /* text-slate-300 */
}

.info-icon {
  width: 1rem;
  height: 1rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  width: 20%;
}

@media (max-width: 768px) {
  .footer-column {
    width: 95%;
    margin-bottom: 5%;
    margin-top: 5%;
  }
}

.column-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.column-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link {
  color: #cbd5e1; /* text-slate-300 */
  transition: color 0.3s ease;
}

.link:hover {
  color: white;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #cbd5e1; /* text-slate-300 */
}

.contact-item.award {
  margin-top: 1rem;
}

.contact-icon {
  width: 1rem;
  height: 1rem;
}

.trust-indicators {
  border-top: 1px solid #334155; /* border-slate-700 */
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.trust-grid {
  display: grid;
  gap: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .trust-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-value {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.text-indigo-400 {
  color: #818cf8;
}

.text-purple-400 {
  color: #c084fc;
}

.trust-label {
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.bottom-section {
  border-top: 1px solid #334155; /* border-slate-700 */
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .bottom-section {
    flex-direction: row;
    justify-content: space-between;
  }
}

.copyright {
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .copyright {
    margin-bottom: 0;
  }
}

.bottom-links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #94a3b8; /* text-slate-400 */
}

.bottom-link {
  transition: color 0.3s ease;
}

.bottom-link:hover {
  color: white;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .footer-section {
    padding: 3rem 0;
  }



  .trust-grid {
    grid-template-columns: 1fr;
  }

  .bottom-section {
    flex-direction: column;
    align-items: center;
  }

  .copyright {
    text-align: center;
    margin-bottom: 1rem;
  }

  .bottom-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>