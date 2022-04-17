import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZ_fcVYhB_Zn4WrkxZw3Vq6HKz_MqOu8",
  authDomain: "mechine-service.firebaseapp.com",
  projectId: "mechine-service",
  storageBucket: "mechine-service.appspot.com",
  messagingSenderId: "42232459528",
  appId: "1:42232459528:web:13660ed108b891f444bcbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;