<template>
  <header class="header" id="header" v-click-outside="closeMobileNavbar" v-handle-scroll="closeMobileNavbar">
    <router-link :to="{name: 'Home'}" class="logo">
      <img src="../assets/img/vueschool-logo.svg" />
    </router-link>

    <div class="btn-hamburger" @click="mobileNavOpen = !mobileNavOpen">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar" :class="{'navbar-open': mobileNavOpen}">
      <ul v-if="user">
        <!--<li class="navbar-item">-->
          <!--<a href="index.html">Home</a>-->
        <!--</li>-->
        <!--<li class="navbar-item">-->
          <!--<a href="category.html">Category</a>-->
        <!--</li>-->
        <!--<li class="navbar-item">-->
          <!--<a href="forum.html">Forum</a>-->
        <!--</li>-->
        <!--<li class="navbar-item">-->
          <!--<a href="thread.html">Thread</a>-->
        <!--</li>-->
        <!--&lt;!&ndash; Show these option only on mobile&ndash;&gt;-->
        <!--<li class="navbar-item mobile-only">-->
          <!--<a href="profile.html">My Profile</a>-->
        <!--</li>-->
        <!--<li class="navbar-item mobile-only">-->
          <!--<a href="#">Logout</a>-->
        <!--</li>-->

        <li class="navbar-user" v-click-outside="closeUserDropdown">
          <a @click.prevent="userDropdownOpen = !userDropdownOpen">
            <img
              class="avatar-small"
              :src="user.avatar"
              alt
            >
            <span>
                {{user.name}}
              <img 
                class="icon-profile" 
                src="@/assets/img/arrow-profile.svg" 
                alt 
              >
            </span>
          </a>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
           <div id="user-dropdown" :class="{'active-drop': userDropdownOpen}">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <router-link :to="{name: 'Profile'}">View Profile</router-link>
              </li>
              <li class="dropdown-menu-item">
                <a @click.prevent="$store.dispatch('auth/signOut')">Sign Out</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navbar-mobile-item"><router-link :to="{name: 'Profile'}">View Profile</router-link></li>
        <li class="navbar-mobile-item"><a @click.prevent="$store.dispatch('auth/signOut')">Sign Out</a></li>
      </ul>
      
      <ul v-else>
        <li class="navbar-item">
          <router-link :to="{name: 'SignIn'}">Sign In</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{name: 'Register'}">Register</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'
  import clickOutside from '@/directives/click-outside'
  import handleScroll from '@/directives/handle-scroll'

  export default {
    directives: {
      clickOutside,
      handleScroll
    },

    data () {
      return {
        userDropdownOpen: false,
        mobileNavOpen: false
      }
    },

    computed: {
      ...mapGetters({
        'user': 'auth/authUser'
      })
    },

    methods: {
      closeUserDropdown () {
        this.userDropdownOpen = false
      },

      closeMobileNavbar () {
        this.mobileNavOpen = false
      }
    }
  }
</script>

<style scoped>
</style>