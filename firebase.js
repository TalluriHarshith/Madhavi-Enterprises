// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

// ✅ Your Firebase config (from console)
const firebaseConfig = {
  apiKey: "AIzaSyDHUpNiZoB7_gO7NVmns3bhsWMPSg6xULM",
  authDomain: "enterprices-website.firebaseapp.com",
  projectId: "enterprices-website",
  storageBucket: "enterprices-website.appspot.com",   // 👈 corrected domain
  messagingSenderId: "371964783835",
  appId: "1:371964783835:web:fdfeb82f30ff82bb7af0fe",
  measurementId: "G-FZEL7WQJ5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other scripts
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);