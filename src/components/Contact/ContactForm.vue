<template>
  <section class="contact-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Send Us a Message</h2>
        <p class="header-description">
          Have questions about our platform? Need assistance with your account?
          Our dedicated support team is here to help you every step of the way.
        </p>
      </div>

      <div class="content-grid">
        <!-- Contact Form -->
        <div class="form-container">
          <form @submit.prevent="handleSubmit" class="form">
            <!-- Name and Email -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <div class="input-wrapper">
                  <svg
                      class="input-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9ca3af"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="20" cy="7" r="4"></circle>
                  </svg>
                  <input
                      type="text"
                      name="name"
                      v-model="formData.name"
                      required
                      placeholder="Your full name"
                      class="form-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <div class="input-wrapper">
                  <svg
                      class="input-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9ca3af"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                      type="email"
                      name="email"
                      v-model="formData.email"
                      required
                      placeholder="your@email.com"
                      class="form-input"
                  />
                </div>
              </div>
            </div>

            <!-- Phone and Inquiry Type -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <div class="input-wrapper">
                  <svg
                      class="input-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9ca3af"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <input
                      type="tel"
                      name="phone"
                      v-model="formData.phone"
                      placeholder="+1 (555) 123-4567"
                      class="form-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Inquiry Type</label>
                <select
                    name="inquiryType"
                    v-model="formData.inquiryType"
                    class="form-select"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="safety">Safety Concern</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>
            </div>

            <!-- Subject -->
            <div class="form-group">
              <label class="form-label">Subject *</label>
              <input
                  type="text"
                  name="subject"
                  v-model="formData.subject"
                  required
                  placeholder="Brief description of your inquiry"
                  class="form-input"
              />
            </div>

            <!-- Message -->
            <div class="form-group">
              <label class="form-label">Message *</label>
              <div class="input-wrapper">
                <svg
                    class="input-icon textarea-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <textarea
                    name="message"
                    v-model="formData.message"
                    required
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                    class="form-textarea"
                ></textarea>
              </div>
            </div>

            <!-- Privacy Notice -->
            <div class="privacy-notice">
              <div class="privacy-content">
                <svg
                    class="shield-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <div class="privacy-text">
                  <strong>Privacy Guaranteed:</strong> All communications are encrypted and handled with complete confidentiality.
                  We never share your personal information with third parties.
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-button">
              <svg
                  class="submit-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="contact-info">
          <div class="info-card">
            <h3 class="info-title">Get in Touch</h3>
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon email">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 class="info-subtitle">Email Support</h4>
                  <p class="info-text">support@sugarmummyforum.com</p>
                  <p class="info-subtext">Response within 1 hour</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon phone">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="info-subtitle">Phone Support</h4>
                  <p class="info-text">+61 480 882 242</p>
                  <p class="info-subtext">24/7 VIP Support Line</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon location">
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
                <div>
                  <h4 class="info-subtitle">Office Location</h4>
                  <p class="info-text">11, Commercial Bay Tower Level 17/19 Customs Street West, Auckland 1010, New Zealand</p>
                  <p class="info-subtext">Global presence and support</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Response Times -->
          <div class="response-card">
            <h3 class="response-title">Response Times</h3>
            <div class="response-items">
              <div class="response-item">
                <span class="response-label">General Inquiries</span>
                <span class="response-value indigo">&lt; 1 hour</span>
              </div>
              <div class="response-item">
                <span class="response-label">Technical Support</span>
                <span class="response-value purple">&lt; 30 minutes</span>
              </div>
              <div class="response-item">
                <span class="response-label">VIP/Elite Members</span>
                <span class="response-value yellow">&lt; 15 minutes</span>
              </div>
              <div class="response-item">
                <span class="response-label">Emergency Issues</span>
                <span class="response-value red">Immediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { db } from '@/firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'

export default {
  name: 'ContactForm',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    })

    const handleSubmit = async () => {
      // Basic validation for required fields
      if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out all required fields.',
        })
        return
      }

      try {
        // Generate a unique ID for the support request
        const docId = `${formData.value.email}_${Date.now()}`

        // Save to Firebase
        await setDoc(doc(db, 'SupportRequest', docId), {
          name: formData.value.name,
          email: formData.value.email,
          phone: formData.value.phone,
          subject: formData.value.subject,
          message: formData.value.message,
          inquiryType: formData.value.inquiryType,
          createdAt: serverTimestamp(),
        }, { merge: true })

        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Message sent successfully!',
        })

        // Reset form
        formData.value = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an issue submitting your message. Please try again later.',
        })
      }
    }

    return { formData, handleSubmit }
  }
}
</script>

<style scoped>
.contact-section {
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

.content-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-container {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.textarea-icon {
  top: 0.75rem;
  transform: none;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  background: rgba(55, 65, 81, 0.5);
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #6366f1;
  outline: none;
}

.form-input {
  padding-left: 2.5rem;
}

.form-textarea {
  resize: none;
  padding-left: 2.5rem;
}

.privacy-notice {
  background: rgba(55, 65, 81, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

.privacy-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.shield-icon {
  width: 35px;
  height: 35px;
  margin-top: 0.125rem;
}

.privacy-text {
  font-size: 0.875rem;
  color: #d1d5db;
}

.privacy-text strong {
  font-weight: 700;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: none;
}

.submit-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.submit-icon {
  width: 20px;
  height: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.info-icon.email {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.info-icon.phone {
  background: linear-gradient(to bottom right, #a855f7, #ec4899);
}

.info-icon.location {
  background: linear-gradient(to bottom right, #10b981, #0d9488);
}

.info-subtitle {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.info-text {
  color: #d1d5db;
  margin-bottom: 0.5rem;
}

.info-subtext {
  font-size: 0.875rem;
  color: #9ca3af;
}

.response-card {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.response-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.response-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.response-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.response-label {
  color: #d1d5db;
}

.response-value {
  font-weight: 500;
}

.response-value.indigo {
  color: #818cf8;
}

.response-value.purple {
  color: #a855f7;
}

.response-value.yellow {
  color: #facc15;
}

.response-value.red {
  color: #f87171;
}
</style>
