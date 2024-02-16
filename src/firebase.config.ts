import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBcKAhQH_4R0I5JtkGdKn69QjiDrm01xLo',
  authDomain: 'rayvarz-test.firebaseapp.com',
  projectId: 'rayvarz-test',
  storageBucket: 'rayvarz-test.appspot.com',
  messagingSenderId: '1005727858673',
  appId: '1:1005727858673:web:11a2f91618047e765b4e50',
  measurementId: 'G-B15Q6T9W8B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
