import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDvgrUd3vpD5aP32T9nduhsLAlc9XFoUOs",
    authDomain: "phonestonebypdx.firebaseapp.com",
    projectId: "phonestonebypdx",
    storageBucket: "phonestonebypdx.appspot.com",
    messagingSenderId: "160475743247",
    appId: "1:160475743247:web:8892527dbf5f80e9de0f7a",
    measurementId: "G-EPSKVNVVTJ"
  }
  firebase.initializeApp(firebaseConfig)
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')