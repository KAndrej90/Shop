import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAl4PwRM88tWM-9SFK4KUoEjxV2hK1dB0k",
    authDomain: "clothing-web-shop.firebaseapp.com",
    projectId: "clothing-web-shop",
    storageBucket: "clothing-web-shop.appspot.com",
    messagingSenderId: "859416915618",
    appId: "1:859416915618:web:a090171bad06618a81b1fb"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
