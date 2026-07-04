<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-8">
    <div class="container grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Side - Form -->
      <div class="form-container">
        <!-- Logo -->
        <router-link to="/">
        <div class="logo-container">
          <div class="logo">
            <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span class="brand-name">SMFM</span>
        </div>
        </router-link>

        <!-- Form Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-white mb-3">Exclusive Connect Form</h1>
          <p class="text-slate-400 mb-2">Effortlessly Join Our Network Through a Private, Members-Only Form</p>
          <p class="text-red-400 font-semibold">Fee ($500)</p>
        </div>

        <!-- Form -->
        <form  class="form-box" @submit.prevent="sendMessage">
          <div class="space-y-6">
            <!-- Applicant Name -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Applicant name</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <input
                    v-model="formData.applicantName"
                    type="text"
                    name="applicantName"
                    placeholder="Enter Applicant's name"
                    required
                    class="input-field"
                />
              </div>
            </div>

            <!-- Date of Birth -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Date of birth</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <input
                    v-model="formData.dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    required
                    class="input-field"
                />
              </div>
            </div>

            <!-- Nationality -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Nationality</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                </svg>
                <input
                    v-model="formData.nationality"
                    type="text"
                    name="nationality"
                    placeholder="Enter Nationality"
                    required
                    class="input-field"
                />
              </div>
            </div>

            <!-- Mobile No -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Mobile No</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z"/>
                </svg>
                <input
                    v-model="formData.mobileNo"
                    type="tel"
                    name="mobileNo"
                    placeholder="Enter Mobile No"
                    required
                    class="input-field"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <input
                    v-model="formData.email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    class="input-field"
                />
              </div>
            </div>

            <!-- Gender -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Gender</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7c0 1.38.71 2.59 1.76 3.29C7.54 11.07 6 12.91 6 15c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.09-1.54-3.93-3.76-4.71C15.29 9.59 16 8.38 16 7z"/>
                </svg>
                <select
                    v-model="formData.gender"
                    name="gender"
                    required
                    class="input-field select-field"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <!-- Payment Method -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">Select preferred payment method</label>
              <div class="relative">
                <svg class="input-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <select
                    v-model="formData.paymentMethod"
                    name="paymentMethod"
                    required
                    class="input-field select-field"
                >
                  <option value="">Select preferred payment method</option>
                  <option v-for="method in paymentMethods" :key="method" :value="method.toLowerCase().replace(' ', '-')">{{ method }}</option>
                </select>
              </div>
            </div>

            <!-- Submit Button -->
            <button
                class="submit-button"
            >
              Submit Request
            </button>
          </div>
        </form>
        <br/>
        <!-- Footer -->
        <div class="text-center mt-6">
          <p class="text-xs text-slate-500">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <!-- Right Side - Illustration -->
      <div class="illustration-container">
        <img src="@/assets/about-hero.jpg" alt="icon" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { serverTimestamp } from "firebase/firestore"; // Correct import for Firestore

export default {
  name: "ExclusiveConnect",
  data() {
    return {
      formData: {
        applicantName: "",
        dateOfBirth: "",
        nationality: "",
        mobileNo: "",
        email: "",
        gender: "",
        paymentMethod: "",
      },
      paymentMethods: [
        "Credit Card",
        "Debit Card",
        "PayPal",
        "Bank Transfer",
        "Cryptocurrency",
        "Apple Pay",
        "Google Pay",
        "Cash Payments",
      ],
    };
  },
  methods: {
    async sendMessage() {
      try {
        // Ensure email is defined and valid before using it as a document ID
        if (!this.formData.email) {
          throw new Error("Email is required");
        }

        // Use formData properties correctly
        await setDoc(doc(db, "ExclusiveConnectForm", this.formData.email), {
          applicantName: this.formData.applicantName,
          dateOfBirth: this.formData.dateOfBirth,
          nationality: this.formData.nationality,
          mobileNo: this.formData.mobileNo,
          email: this.formData.email,
          gender: this.formData.gender,
          paymentMethod: this.formData.paymentMethod,
          createdAt: serverTimestamp(),
        }, { merge: true });

        console.log("Data saved successfully");

        // Show success message
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Request sent successfully!",
        });

        // Reset the form
        this.resetForm();
      } catch (error) {
        console.error("Error saving data:", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send request. Please try again.",
        });
      }
    },

    resetForm() {
      // Reset formData properties
      this.formData.applicantName = "";
      this.formData.dateOfBirth = "";
      this.formData.nationality = "";
      this.formData.mobileNo = "";
      this.formData.email = "";
      this.formData.gender = "";
      this.formData.paymentMethod = "";
    },
  },
};
</script>

<style scoped>
/* Base styles */
.min-h-screen {
  min-height: 100vh;
  background-color: #0f172a;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2%;
}

.logo {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(to bottom right, #6366f1, #9333ea);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.brand-name {
  font-size: 1.45rem;
  font-weight: 700;
  color: #FFFFFF;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Container */
.container {
  width: 100%;
  max-width: 75rem;
  display: grid;
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.gap-12 {
  gap: 6rem;
}

/* Form Container */
.form-container {
  width: 100%;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .form-container {
    margin-left: 0;
  }
}

.text-center {
  text-align: center;
}

.mb-8 {
  margin-bottom: 2rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}


.font-bold {
  font-weight: 700;
}


.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-white {
  color: #ffffff;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.text-slate-400 {
  color: #94a3b8;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.text-red-400 {
  color: #f87171;
}

.font-semibold {
  font-weight: 600;
}

.form-box {
  background-color: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(51, 65, 85, 0.5);
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.text-slate-300 {
  color: #cbd5e1;
}

.relative {
  position: relative;
  margin-top: 10px;
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #94a3b8;
}

.input-field {
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(51, 65, 85, 0.5);
  border: 1px solid #475569;
  border-radius: 0.5rem;
  color: #ffffff;
  outline: none;
  transition: border-color 0.2s;
}

.input-field:focus {
  border-color: #6366f1;
}

.input-field::placeholder {
  color: #94a3b8;
}







.submit-button {
  width: 100%;
  padding: 0.9rem 3rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: all 0.3s ease;
  transform: scale(1);
}

.submit-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-slate-500 {
  color: #64748b;
}

/* Illustration */
.illustration-container {
  display: none;
}

@media (min-width: 1024px) {
  .illustration-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.text-red-400 {
  color: #f87171;
}

</style>