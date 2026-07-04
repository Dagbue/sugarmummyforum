<template>
  <section class="review-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Share Your Success Story</h2>
        <p class="header-description">
          Help others discover the SMFM experience by sharing your testimonial
        </p>
      </div>

      <div class="form-container">
        <form @submit.prevent="handleSubmit" class="form">
          <!-- Personal Information -->
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Name (First name + Initial) *</label>
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
                    v-model="formData.name"
                    required
                    placeholder="e.g., Sarah M."
                    class="form-input"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Location</label>
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input
                    type="text"
                    v-model="formData.location"
                    placeholder="e.g., New York, NY"
                    class="form-input"
                />
              </div>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Profession</label>
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
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <input
                    type="text"
                    v-model="formData.profession"
                    placeholder="e.g., Business Executive"
                    class="form-input"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Member Type *</label>
              <div class="input-wrapper">
                <select
                    v-model="formData.memberType"
                    required
                    class="form-select"
                >
                  <option value="">Select type</option>
                  <option value="sugar-baby">Sugar Baby</option>
                  <option value="sugar-daddy">Sugar Daddy</option>
                  <option value="sugar-mama">Sugar Mama</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div class="form-group">
            <label class="form-label">Overall Rating *</label>
            <div class="rating-container">
              <button
                  v-for="star in 5"
                  :key="star"
                  type="button"
                  @click="formData.rating = star"
                  @mouseenter="hoveredRating = star"
                  @mouseleave="hoveredRating = 0"
                  class="rating-button"
              >
                <svg
                    :class="['star-icon', { 'star-active': star <= (hoveredRating || formData.rating) }]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    :fill="star <= (hoveredRating || formData.rating) ? 'currentColor' : 'none'"
                    stroke="#9ca3af"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
              <span class="rating-text" v-if="formData.rating > 0">
                {{ formData.rating }} star{{ formData.rating > 1 ? 's' : '' }}
              </span>
            </div>
          </div>

          <!-- Testimonial -->
          <div class="form-group">
            <label class="form-label">Your Experience *</label>
            <textarea
                rows="6"
                v-model="formData.testimonial"
                required
                :minlength="100"
                placeholder="Share your experience with SMFM. What made it special? How did it help you achieve your goals?"
                class="form-textarea"
            ></textarea>
            <div class="form-hint">
              Minimum 100 characters. Your testimonial may be featured on our website.
            </div>
          </div>

          <!-- Key Achievement -->
          <div class="form-group">
            <label class="form-label">Key Achievement (Optional)</label>
            <input
                type="text"
                v-model="formData.keyAchievement"
                placeholder="e.g., Found perfect arrangement within 2 weeks"
                class="form-input"
            />
          </div>

          <!-- Privacy Options -->
          <div class="privacy-container">
            <h4 class="privacy-title">Privacy Settings</h4>
            <div class="privacy-options">
              <label class="privacy-option">
                <input
                    type="checkbox"
                    v-model="formData.consentPublish"
                    class="privacy-checkbox"
                />
                <span class="privacy-text">I consent to my testimonial being published on SMFM</span>
              </label>
              <label class="privacy-option">
                <input
                    type="checkbox"
                    v-model="formData.useInitials"
                    class="privacy-checkbox"
                />
                <span class="privacy-text">Use only my first name and last initial for privacy</span>
              </label>
              <label class="privacy-option">
                <input
                    type="checkbox"
                    v-model="formData.videoTestimonial"
                    class="privacy-checkbox"
                />
                <span class="privacy-text">I'm interested in participating in video testimonials</span>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="submit-section">
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
              <span>Submit Testimonial</span>
            </button>
            <p class="submit-message">
              Thank you for sharing your experience! We'll review your testimonial within 24 hours.
            </p>
          </div>
        </form>
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
  name: 'WriteReview',
  setup() {
    const formData = ref({
      name: '',
      location: '',
      profession: '',
      memberType: '',
      rating: 0,
      testimonial: '',
      keyAchievement: '',
      consentPublish: false,
      useInitials: false,
      videoTestimonial: false
    })

    const hoveredRating = ref(0)

    const handleSubmit = async () => {
      // Basic validation
      if (!formData.value.name || !formData.value.memberType || !formData.value.rating || !formData.value.testimonial) {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out all required fields.',
        })
        return
      }

      if (formData.value.testimonial.length < 100) {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Testimonial must be at least 100 characters long.',
        })
        return
      }

      try {
        // Generate a unique ID for the testimonial (using timestamp and name)
        const docId = `${formData.value.name.replace(/\s+/g, '_')}_${Date.now()}`

        // Save to Firebase
        await setDoc(doc(db, 'Testimonials', docId), {
          name: formData.value.name,
          location: formData.value.location,
          profession: formData.value.profession,
          memberType: formData.value.memberType,
          rating: formData.value.rating,
          testimonial: formData.value.testimonial,
          keyAchievement: formData.value.keyAchievement,
          consentPublish: formData.value.consentPublish,
          useInitials: formData.value.useInitials,
          videoTestimonial: formData.value.videoTestimonial,
          createdAt: serverTimestamp()
        }, { merge: true })

        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Testimonial submitted successfully! Thank you for your feedback.',
        })

        // Reset form
        formData.value = {
          name: '',
          location: '',
          profession: '',
          memberType: '',
          rating: 0,
          testimonial: '',
          keyAchievement: '',
          consentPublish: false,
          useInitials: false,
          videoTestimonial: false
        }
      } catch (error) {
        console.error('Error submitting testimonial:', error)
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an issue submitting your testimonial. Please try again later.',
        })
      }
    }

    return { formData, hoveredRating, handleSubmit }
  }
}
</script>

<style scoped>
.review-section {
  padding: 5rem 0;
  background: rgba(15, 23, 42, 0.3);
}

.container {
  max-width: 896px;
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
  display: block;
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

.form-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #6366f1;
  outline: none;
}

.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: border-color 0.3s ease;
}

.form-select:focus {
  border-color: #6366f1;
  outline: none;
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating-button {
  transition: all 0.3s ease;
}

.star-icon {
  width: 32px;
  height: 32px;
}

.star-active {
  color: #facc15;
}

.rating-text {
  margin-left: 1rem;
  color: #d1d5db;
}

.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #ffffff;
  resize: none;
  transition: border-color 0.3s ease;
}

.form-textarea:focus {
  border-color: #6366f1;
  outline: none;
}

.form-hint {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}

.privacy-container {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

.privacy-title {
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.privacy-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.privacy-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.privacy-checkbox {
  border-radius: 0.25rem;
  border: 1px solid #4b5563;
  background: #374151;
}

.privacy-text {
  font-size: 0.875rem;
  color: #ffffff;
}

.submit-section {
  text-align: center;
}

.submit-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: #ffffff;
  transition: all 0.3s ease;
  margin: 0 auto;
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

.submit-message {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 1rem;
}
</style>