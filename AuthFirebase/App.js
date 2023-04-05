import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Signup from './src/Email/Signup'
import Home from './src/Home'
import PhoneNumber from './src/Phone Number/PhoneNumber'
import auth from '@react-native-firebase/auth';
import VerifyCode from './src/Phone Number/VerifyCode';
import Google from './src/Google/Google'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const createUser = (email, password) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);

    } catch (error) {
      Alert(error.message);
    }
  };

  const signin = (email, password) => {
    try {
      auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert(error);
    }
  };

  // async function signIn(phoneNumber) {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     setConfirm(confirmation);
  //   } catch (error) {
  //     Alert(error);
  //   }
  // }

  // async function confirmVerificationCode(code) {
  //   try {
  //     await confirm.confirm(code);
  //     setConfirm(null);
  //   } catch (error) {
  //     Alert('Invalid code');
  //   }
  // }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) {
    return <Home />;
  }

  //return <Signup createUser={createUser} signin={signin} />;

  // if (confirm) return <VerifyCode onSubmit={confirmVerificationCode}/>;
  // return <PhoneNumber onSubmit={signIn} />;

  return <Google/>
  
}

export default App
