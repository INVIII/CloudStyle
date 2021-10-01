import { createApp } from 'vue';
import firebase from 'firebase/compat/app';
import App from './App.vue';
import router from './router';



  firebase.initializeApp({
    apiKey: "AIzaSyCXtI8sC_zTdrev5qUiwIRSN51yMAwVfls",
    authDomain: "cloud-style.firebaseapp.com",
    projectId: "cloud-style",
    storageBucket: "cloud-style.appspot.com",
    messagingSenderId: "709153862296",
    appId: "1:709153862296:web:a37b836e5068ab1918d6ed",
    measurementId: "G-42SQK9DB5E"
  });

const app = createApp(App);

app.use(router);
app.mount('#app');
