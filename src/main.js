// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcp9qXbKh8695-I6wQGlYex-RLNjLuCXU',
  authDomain: 'vue-master-class-forum.firebaseapp.com',
  databaseURL: 'https://vue-master-class-forum.firebaseio.com',
  projectId: 'vue-master-class-forum',
  storageBucket: 'vue-master-class-forum.appspot.com',
  messagingSenderId: '1049376509855',
  appId: '1:1049376509855:web:abd36980029af558fff7aa',
  measurementId: 'G-DHTLXS1BS3'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
