<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="container">
      <!-- Logo -->
      <div class="text-center mb-8">
        <router-link to="/">
        <div class="logo-container">
          <div class="logo">
            <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <span class="brand-name">EliteConnect</span>
        </div>
        </router-link>
        <h1 class="title">Admin Login</h1>

      </div>

      <!-- Login Form -->
      <form class="form-container" @submit.prevent="handleSubmit">
        <div class="space-y-6">
          <!-- Username Field -->
          <div>
            <div class="relative">
              <i class='bx bx-user input-icon'></i>
              <input
                  type="text"
                  v-model="formData.username"
                  placeholder="Username"
                  required
                  class="input-field"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <div class="relative">
              <i class='bx bx-lock-alt input-icon'></i>
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password"
                  placeholder="Password"
                  required
                  class="input-field password-field"
              />
              <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="password-toggle"
              >
                <i :class="showPassword ? 'bx bx-show' : 'bx bxs-low-vision'" class="icon"></i>
              </button>
            </div>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center">
            <input
                type="checkbox"
                v-model="formData.rememberMe"
                class="checkbox"
            />
            <label class="checkbox-label">Remember me</label>
          </div>

          <!-- Sign In Button -->
          <button
              type="submit"
              class="join-button"
          >
            Sign In
          </button>
        </div>

        <!-- Additional Links -->
        <div class="links">
          <a href="#" class="link">Forgot your password?</a>
        </div>
      </form>

      <!-- Footer -->
      <div class="footer">
        <p class="footer-text">&copy; 2025 Match Connecting. Admin Portal.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoardAdminLoginView',
  data() {
    return {
      formData: {
        username: '',
        password: '',
        rememberMe: false,
      },
      showPassword: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log('Admin login attempt:', this.formData);
      this.$router.push('/list-of-users');
    },
  },
};
</script>

<style scoped>
.join-button {
  width: 100%;
  padding: 0.6rem 3rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: all 0.3s ease;
  transform: scale(1);
}

.join-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
  transform: scale(1.05);
}

.min-h-screen {
  min-height: 100vh;
  background-color: #0f172a;
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

.container {
  width: 100%;
  max-width: 28rem;
}

.text-center {
  text-align: center;
}

.mb-8 {
  margin-bottom: 2rem;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo {
  width: 2.5rem;
  height: 2.5rem;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.form-container {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(51, 65, 85, 0.5);
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.relative {
  position: relative;
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
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid #475569;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-field:focus {
  border-color: #6366f1;
}

.input-field::placeholder {
  color: #94a3b8;
}

.password-field {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.password-toggle:hover {
  color: #cbd5e1;
}

.checkbox {
  width: 1rem;
  height: 1rem;
  background: #1e293b;
  border: 1px solid #475569;
  border-radius: 0.25rem;
  accent-color: #ef4444;
}

.checkbox:focus {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
}

.checkbox-label {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #cbd5e1;
}

.links {
  margin-top: 1.5rem;
  text-align: center;
}

.link {
  font-size: 0.875rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: #cbd5e1;
}

.footer {
  margin-top: 2rem;
  text-align: center;
}

.footer-text {
  font-size: 0.75rem;
  color: #64748b;
}

.logo-icon .icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #ffffff;
}
</style>
