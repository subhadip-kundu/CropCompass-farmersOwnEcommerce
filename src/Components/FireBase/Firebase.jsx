import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAt2RSt_hdf0ey78cD2ZWl-QFlP1eaal1M",
  authDomain: "cropcompass0.firebaseapp.com",
  projectId: "cropcompass0",
  storageBucket: "cropcompass0.appspot.com",
  messagingSenderId: "990084125797",
  appId: "1:990084125797:web:ddfd97e85b1f9d6087a28c",
  measurementId: "G-7G6KJWBWDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // Initialize Firebase storage
export const firestore = getFirestore(app);

export const auth = getAuth(app);

// Optionally, you can export the app if needed elsewhere
// export default app;

// Set the default directory for storage
// export const storageRef = ref(storage, 'CropCompassDb');