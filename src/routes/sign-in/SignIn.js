import React from 'react';
import {signInWithGooglePopup} from '../../utils/firebase/firebase'

const SignIn = () => {
const logGoogleUser = async () =>{
const response = await signInWithGooglePopup();
console.log(response);
}


  return (
    <>
    <h1>SignIn</h1>
    <button onClick={logGoogleUser}> Sign in with Google</button>
    </>
  )
}

export default SignIn