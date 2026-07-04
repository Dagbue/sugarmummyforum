<template>
  <template v-if="!$route.meta.hideNavigation" >
<!--    <intro-message-modal @close="hideDialog" v-if="count === false && dialogIsVisible === true" />-->
    <nav :class="['header-nav', { 'scrolled': scrolled }]"  >
      <div class="container">
        <div class="nav-content">
          <router-link to="/">
            <div class="logo-container">
              <div class="logo">
                <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <span class="brand-name">SMFM</span>
              <!--            <span class="brand-name">SugarMummyForAll</span>-->
            </div>
          </router-link>

          <!-- Desktop Menu -->
          <div class="desktop-menu">
            <router-link  to="/" class="nav-link">Home</router-link>
            <router-link  to="/about" class="nav-link">About Us</router-link>
            <router-link  to="/testimonials" class="nav-link">Testimonies</router-link>
            <!--            <router-link  to="/pricing" class="nav-link">Pricing</router-link>-->
            <router-link  to="/contactUs" class="nav-link">Contact</router-link>
            <router-link  to="/request" class="join-button">Join SMFM</router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-toggle" @click="toggleMenu">
            <svg v-if="isMenuOpen" class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg v-else class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="mobile-menu">
          <router-link @click="toggleMenu"  to="/" class="mobile-nav-link">Home</router-link>
          <router-link @click="toggleMenu"  to="/about" class="mobile-nav-link">About Us</router-link>
          <router-link @click="toggleMenu"  to="/testimonials" class="mobile-nav-link">Testimonies</router-link>
          <!--          <router-link @click="toggleMenu" to="/pricing" class="mobile-nav-link">Pricing</router-link>-->
          <router-link @click="toggleMenu" to="/contactUs" class="mobile-nav-link">Contact</router-link>
          <router-link @click="toggleMenu" to="/request" class="mobile-join-button">Join SMFM</router-link>
        </div>
      </div>
    </nav>
  </template>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';
// import IntroMessageModal from "@/components/baseComponents/IntroMessageModal.vue";

export default {
  name: 'HeaderView',
  // components: {IntroMessageModal},
  setup() {
    const store = useStore();
    const isMenuOpen = ref(false);
    const scrolled = ref(false);
    const dialogIsVisible = ref(true);

    const count = computed(() => store.state.isModalOpened);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const hideDialog = () => {
      dialogIsVisible.value = false;
    };

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isMenuOpen,
      scrolled,
      toggleMenu,
      dialogIsVisible,
      count,
      hideDialog,
    };
  },
  methods: {
    onPostClick() {
      this.$router.push("/request");
    },
  }
};
</script>

<style scoped>
.header-nav {
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  padding: 1.5rem 0;
  color: white;
}

.header-nav.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(8px);
  padding: 1rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.desktop-menu {
  display: none;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #a5b4fc;
}

.join-button {
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

.mobile-menu-toggle {
  display: block;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.menu-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.mobile-menu {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(8px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #a5b4fc;
}

.mobile-join-button {
  padding: 0.5rem;
  background: linear-gradient(to right, #6366f1, #9333ea);
  border-radius: 9999px;
  color: white;
  border: none;
  transition: all 0.3s ease;
  padding-left: 15px;
}

.mobile-join-button:hover {
  background: linear-gradient(to right, #4f46e5, #7e22ce);
}

@media (min-width: 768px) {
  .header-nav {
    padding: 1.5rem 0;
  }

  .header-nav.scrolled {
    padding: 1rem 0;
  }

  .desktop-menu {
    display: flex;
  }

  .mobile-menu-toggle {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .brand-name {
    font-size: 1.5rem;
  }
}
</style>