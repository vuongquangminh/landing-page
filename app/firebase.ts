// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWlJaAhBreSv4vBS1F61m2GbREF2G9gdk',
  authDomain: 'fir-test-464202.firebaseapp.com',
  projectId: 'firebasetest-464202',
  storageBucket: 'firebasetest-464202.firebasestorage.app',
  messagingSenderId: '758369773909',
  appId: '1:758369773909:web:05997d027685e020a4e7dc',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
