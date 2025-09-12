import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXnEjvqq8lspDRlEJiDkztxWTmLYMoDGg",
  authDomain: "salamander-ai.firebaseapp.com",
  projectId: "salamander-ai",
  storageBucket: "salamander-ai.firebasestorage.app",
  messagingSenderId: "87955960620",
  appId: "1:87955960620:web:85b30a28edf96c71d83289",
  measurementId: "G-ZV0YR21B6X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;