import React from 'react';
import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase';

const SignIn = () => {

  const logGoogleUser = async () =>{
  const {user} = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
};


  return (
    <>
    <h1>SignIn</h1>
    <button onClick={logGoogleUser}> Sign in with Google</button>
    </>
  )
}

export default SignIn