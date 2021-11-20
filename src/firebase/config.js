// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",
  authDomain: "taxis-stackblitz.firebaseapp.com",
  projectId: "taxis-stackblitz",
  storageBucket: "taxis-stackblitz.appspot.com",
  messagingSenderId: "977311415632",
  appId: "1:977311415632:web:c4a419e65259ff87fa8055"
};

// Initialize Firebase
const appF = initializeApp(firebaseConfig);

export default appF;