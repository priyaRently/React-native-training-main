import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email/Password Authentication</Text>
      <TextInput placeholder='E-mail'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input} />
      <TextInput placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}
          onPress={() => props.signin(email, password)} >
          <Text style={styles.btnText}>SIGNIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
          onPress={() => props.createUser(email, password)}>
          <Text style={styles.btnText}>CREATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center'
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: 'black'
  },
  input: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    padding: 15,
    fontSize: 18,
    borderColor: 'black'
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  btn: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'yellow'
  },
  btnText: {
    fontWeight: 'bold',
    color: 'black'
  },
})