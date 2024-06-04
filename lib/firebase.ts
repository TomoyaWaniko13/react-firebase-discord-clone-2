// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth-types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqWhYQv-jWwV1qf-jkRMM85ehYBvmMmsc',
  authDomain: 'react-firebase-discord-clone-2.firebaseapp.com',
  projectId: 'react-firebase-discord-clone-2',
  storageBucket: 'react-firebase-discord-clone-2.appspot.com',
  messagingSenderId: '892080346865',
  appId: '1:892080346865:web:61eb8251121dc4e9083b50',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// https://firebase.google.com/docs/auth/web/start
const auth = getAuth(app);
// https://firebase.google.com/docs/auth/web/google-signin
const provider = new GoogleAuthProvider();

export { auth, provider, db };
