
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDHUpNiZoB7_gO7NVmns3bhsWMPSg6xULM",
  authDomain: "enterprices-website.firebaseapp.com",
  projectId: "enterprices-website",
  storageBucket: "enterprices-website.appspot.com",
  messagingSenderId: "371964783835",
  appId: "1:371964783835:web:e8715517a5bfd5a87af0fe",
  measurementId: "G-HW1NE4P807"
};

const app = initializeApp(firebaseConfig);
let analytics;
try { analytics = getAnalytics(app); } catch (e) { /* ignore when unavailable */ }

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
