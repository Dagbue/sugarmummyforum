<template>
  <div class="outer">

    <div class="sidebar" v-show="!mobile">

      <div class="logo-container">
        <div class="logo">
          <svg class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <span class="brand-name">SMFM</span>
      </div>

      <ul class="nav-list" >


        <router-link to="/list-of-users">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">List Of Requests</span>
            </a>
          </li>
        </router-link>

        <router-link to="/investments-list">
          <li>
            <a class="hover">
              <img src="../../assets/virtacc.svg" alt="logo" class="link-img" />
              <span class="links-name wallets">Contact Message</span>
            </a>
          </li>
        </router-link>


        <router-link to="/deposit-requests">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Testimonial</span>
            </a>
          </li>
        </router-link>

        <router-link to="/generate-code">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Generate Code</span>
            </a>
          </li>
        </router-link>

        <router-link to="/withdrawal-requests">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Connect Form</span>
            </a>
          </li>
        </router-link>

        <router-link to="/createProfileView">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Create Profile</span>
            </a>
          </li>
        </router-link>

      </ul>


    </div>



    <div  class="dropdown-nav-2" v-show="mobileNav" >

      <div class="logo">
        <img src="@/assets/companylogo.png" alt="logo" class="afo-logo" />
      </div>

            <ul>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bxs-home'></i>
                  <router-link to="/list-of-users" class="">List Of Requests</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bxs-user'></i>
                  <router-link to="/investments-list" class="">Contact Message</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bx-support' ></i>
                  <router-link to="/deposit-requests" class="">Testimonial</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bx-support' ></i>
                  <router-link to="/generate-code" class="">Generate Code</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bx-support' ></i>
                  <router-link to="/withdrawal-requests" class="">Connect Form</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bx-support' ></i>
                  <router-link to="/createProfileView" class="">Create Profile</router-link>
                </a>
              </li>

            </ul>
    </div>


    <dash-content>
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content>


  </div>
</template>

<script>
import DashContent from "@/components/baseComponents/dash/DashContent.vue";

export default {
  name: "DashBoardSideBarAdminView",
  components: {DashContent},
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 10%;
  margin-bottom: 15%;
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
}

.outer{
  display: flex;
}
.afo-logo{
  width: 85%;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 235px;
  /*background-image: url('~@/assets/sidebarimage.svg');*/
  background-color: #0f172a;
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px 4px;
  list-style: none;
  line-height: 25px;
}
.sidebar ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 16px;
  padding-top: 3px;
}
.hover:hover{
  background: rgba(255, 255, 255, 0.2);
  /*border: 1px solid rgba(255, 255, 255, 0.05);*/
  backdrop-filter: blur(3.5px);
  padding: 8px;
  border-radius: 4px;
}
.link-img{
  margin-right: 5%;
  width: 12%;
}
.links-name{
  font-size: 16px;
  color: #ffffff;
}
.wallets{
  font-size: 15.5px;
}
.feature-card-1 p {
  font-size: 17px;
}
.feature-card-2 p{
  font-size: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  border-radius: 3px;
  padding: 2.5px 8px;
  margin-right: 8px;
}
.feature-card-3 img{
  margin-right: 7px;
}
.feature-card-3 p{
  padding-top: 2px;
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 2%;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  padding-top: 15px;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.dropdown-nav{
  background-color: #175CD3;
  height: 100vh;
  list-style: none;
}
.logout{
  display: flex;
  justify-content: center;
  margin-top: 110%;
  margin-right: 25%;
}

.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 10px;
}

.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #000;
  padding-top: 15px;
}

.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(360deg);
}

.links-name-separate{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.links-name-separate span{
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;
}


.dropdown-nav-2{
  display: flex;
  align-content: center;
  align-items: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #0f171c;
  font-size: 17px;
  text-align: center;
}

.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
}

.dropdown-nav-2 ul {
  padding-top: 10px;
}

.dropdown-nav-2 a {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  align-content: center;
  align-items: center;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
}

.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #C30000;
}

.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
  margin-left: 60%;
}
.icon-active{
  transform: rotate(180deg);
}

@media (max-width: 990px) {
  i{
    font-size: 20px;
    padding-right: 5px;
  }

}

@media (max-width: 550px) {
}

</style>