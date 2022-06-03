import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc } from 'firebase/firestore';

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
  export const signInWithGoogleRedirect =()=> signInWithRedirect(auth, provider);
  

  export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc (db, 'users', userAuth.uid );
     console.log(userDocRef);
     const userSnapshot = await getDoc(userDocRef);
     if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
            try {
                await setDoc (userDocRef,{
                    displayName,
                    email,
                    createdAt
                })
            } catch (error) {
                console.log('error creating the user', error.message)
            }
    };
        return userDocRef;
    };
    

 