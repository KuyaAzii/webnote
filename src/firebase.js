// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavDS45UV1IM2-ZaDGCk41ZVvLU26eLg4",
  authDomain: "fir-nidex.firebaseapp.com",
  projectId: "fir-nidex",
  storageBucket: "fir-nidex.appspot.com",
  messagingSenderId: "171992243056",
  appId: "1:171992243056:web:5fc751aa3f24375c860db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;