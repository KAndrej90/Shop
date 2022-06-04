import React from "react";
import Button from "../../components/button/Button";
import { SignUpForm } from "../../components/sign-up/SignUpForm";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>SignIn</h1>
      <Button onClick={logGoogleUser} buttonType="google">
        Sign in with Google
      </Button>
      <SignUpForm />
    </>
  );
};

export default Authentication;
