import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtQ1zL3JuV3mH6kX9DJiLyCkCIXcEwzb8',
  authDomain: 'search-n64.firebaseapp.com',
  projectId: 'search-n64',
  storageBucket: 'search-n64.appspot.com',
  messagingSenderId: '759342297445',
  appId: '1:759342297445:web:ffbce273a141b96a42b18c',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
