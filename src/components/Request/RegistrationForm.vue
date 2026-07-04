<template>
  <section class="registration-section">
    <div class="container">
      <div class="header">
        <h2 class="header-title">Find Your Perfect Match</h2>
        <p class="header-description">
          Complete your profile to connect with verified members who share your lifestyle and values
        </p>
      </div>

      <div class="content-grid">
        <!-- Registration Form -->
        <div class="form-container">
          <form @submit.prevent="handleSubmit" class="form">
            <!-- Full Name -->
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
                    name="fullName"
                    v-model="formData.fullName"
                    required
                    placeholder="Enter your full name"
                    class="form-input"
                />
              </div>
            </div>

            <!-- Email -->
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

            <!-- Gender and Looking For -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">I am a *</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        v-model="formData.gender"
                        class="radio-input"
                    />
                    <span>Male</span>
                  </label>
                  <label class="radio-label">
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        v-model="formData.gender"
                        class="radio-input"
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Looking for a *</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input
                        type="radio"
                        name="lookingFor"
                        value="sugar-daddy"
                        v-model="formData.lookingFor"
                        class="radio-input"
                    />
                    <span>Sugar Daddy</span>
                  </label>
                  <label class="radio-label">
                    <input
                        type="radio"
                        name="lookingFor"
                        value="sugar-mama"
                        v-model="formData.lookingFor"
                        class="radio-input"
                    />
                    <span>Sugar Mama</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Age and Country -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Age Range *</label>
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <select
                      name="age"
                      v-model="formData.age"
                      required
                      class="form-select"
                  >
                    <option value="">Select Age Range</option>
                    <option v-for="range in ageRanges" :key="range" :value="range">{{ range }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Country *</label>
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
                    <path d="M12 2a10 10 0 0 0-10 10c0 8 10 12 10 12s10-4 10-12a10 10 0 0 0-10-10z"></path>
                  </svg>
                  <select
                      name="country"
                      v-model="formData.country"
                      required
                      class="form-select"
                  >
                    <option value="">Choose Country</option>
                    <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- State and City -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">State/Province</label>
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
                      name="state"
                      v-model="formData.state"
                      placeholder="State/Province"
                      class="form-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">City</label>
                <input
                    type="text"
                    name="city"
                    v-model="formData.city"
                    placeholder="Your city"
                    class="form-input"
                />
              </div>
            </div>

            <!-- Terms and Privacy -->
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input
                    type="checkbox"
                    name="agreeTerms"
                    v-model="formData.agreeTerms"
                    required
                    class="checkbox-input"
                />
                <span class="checkbox-text">
                  I agree to the <a href="#" class="link">Terms of Service</a> and
                  confirm that I am at least 18 years old.
                </span>
              </label>
              <label class="checkbox-label">
                <input
                    type="checkbox"
                    name="agreePrivacy"
                    v-model="formData.agreePrivacy"
                    required
                    class="checkbox-input"
                />
                <span class="checkbox-text">
                  I agree to the <a href="#" class="link">Privacy Policy</a> and
                  consent to receive communications from SMFA.
                </span>
              </label>
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
              <span>Send Request</span>
            </button>
          </form>
        </div>

        <!-- Benefits Section -->
        <div class="benefits-container">
          <div class="benefits-card">
            <h3 class="benefits-title">Why Join SMFM?</h3>
            <div class="benefits-list">
              <div class="benefit-item">
                <div class="benefit-icon verified">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="benefit-subtitle">100% Verified Members</h4>
                  <p class="benefit-text">Every profile undergoes comprehensive verification for your safety and peace of mind.</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon community">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="20" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4 class="benefit-subtitle">SMFA Community</h4>
                  <p class="benefit-text">Connect with successful, sophisticated individuals who share your values and lifestyle.</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon global">
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
                    <path d="M12 2a10 10 0 0 0-10 10c0 8 10 12 10 12s10-4 10-12a10 10 0 0 0-10-10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="benefit-subtitle">Global Reach</h4>
                  <p class="benefit-text">Access to members in 60+ countries worldwide for international connections.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy Notice -->
          <div class="privacy-card">
            <div class="privacy-content">
              <svg
                  class="privacy-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div>
                <h4 class="privacy-title">Your Privacy is Protected</h4>
                <p class="privacy-text">
                  All personal information is encrypted and stored securely. We never share your data with third parties
                  and you have complete control over your profile visibility.
                </p>
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
  name: 'RegistrationForm',
  setup() {
    const formData = ref({
      fullName: '',
      email: '',
      gender: '',
      lookingFor: '',
      age: '',
      country: '',
      state: '',
      city: '',
      agreeTerms: false,
      agreePrivacy: false
    })

    const showPassword = ref(false)
    const showConfirmPassword = ref(false)

    const countries = [
      'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
      'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
      'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
      'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
      'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
      'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China',
      'Colombia', 'Comoros', 'Congo (Democratic Republic of the)', 'Congo (Republic of the)',
      'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
      'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
      'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
      'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
      'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
      'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
      'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
      'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos',
      'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
      'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
      'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
      'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
      'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
      'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia',
      'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea',
      'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
      'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
      'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
      'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
      'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
      'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
      'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
      'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
      'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
      'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
      'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ]

    const ageRanges = [
      '18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '60+'
    ]

    const handleSubmit = async () => {
      // Basic validation for required fields
      if (!formData.value.fullName || !formData.value.email || !formData.value.gender ||
          !formData.value.lookingFor || !formData.value.age || !formData.value.country ||
          !formData.value.agreeTerms || !formData.value.agreePrivacy) {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out all required fields.',
        })
        return
      }

      try {
        // Save to Firebase
        await setDoc(doc(db, "Requests", formData.value.email), {
          fullName: formData.value.fullName,
          email: formData.value.email,
          gender: formData.value.gender,
          lookingFor: formData.value.lookingFor,
          age: formData.value.age,
          country: formData.value.country,
          state: formData.value.state,
          city: formData.value.city,
          agreeTerms: formData.value.agreeTerms,
          agreePrivacy: formData.value.agreePrivacy,
          createdAt: serverTimestamp(),
        }, { merge: true })

        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Request sent successfully!',
        })

        // Reset form
        formData.value = {
          fullName: '',
          email: '',
          gender: '',
          lookingFor: '',
          age: '',
          country: '',
          state: '',
          city: '',
          agreeTerms: false,
          agreePrivacy: false
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an issue submitting your request. Please try again later.',
        })
      }
    }

    return { formData, showPassword, showConfirmPassword, countries, ageRanges, handleSubmit }
  }
}
</script>

<style scoped>
.registration-section {
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

.form-input,
.form-select {
  width: 100%;
  padding: 0.75rem;
  background: rgba(55, 65, 81, 0.5);
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #ffffff;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-select:focus {
  border-color: #6366f1;
  outline: none;
}

.form-input {
  padding-left: 2.5rem;
}

.password-input {
  padding-right: 2.5rem;
}

.form-select {
  padding-left: 2.5rem;
  appearance: none;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
}

.radio-input {
  width: 1rem;
  height: 1rem;
  accent-color: #6366f1;
  background: #374151;
  border: 1px solid #4b5563;
  border-radius: 0.25rem;
}

.radio-input:focus {
  outline: none;
  ring: 2px solid #6366f1;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #d1d5db;
}

.toggle-icon {
  width: 20px;
  height: 20px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-input {
  width: 1rem;
  height: 1rem;
  margin-top: 0.25rem;
  accent-color: #6366f1;
  background: #374151;
  border: 1px solid #4b5563;
  border-radius: 0.25rem;
}

.checkbox-text {
  font-size: 0.875rem;
  color: #d1d5db;
}

.link {
  color: #818cf8;
  transition: color 0.3s ease;
}

.link:hover {
  color: #a5b4fc;
}

.submit-button {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
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

.benefits-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefits-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(100, 116, 139, 0.5);
}

.benefits-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.benefit-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.benefit-icon.verified {
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
}

.benefit-icon.community {
  background: linear-gradient(to bottom right, #a855f7, #ec4899);
}

.benefit-icon.global {
  background: linear-gradient(to bottom right, #10b981, #0d9488);
}

.benefit-subtitle {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.benefit-text {
  font-size: 0.875rem;
  color: #d1d5db;
}

.privacy-card {
  background: linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(51, 65, 85, 0.5));
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.privacy-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.privacy-icon {
  width: 24px;
  height: 24px;
  margin-top: 0.25rem;
}

.privacy-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #34d399;
}

.privacy-text {
  font-size: 0.875rem;
  color: #d1d5db;
}
</style>