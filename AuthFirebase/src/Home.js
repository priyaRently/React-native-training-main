import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.title2}>You're Logged in</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => auth().signOut()}>
          <Text style={styles.btnText}>SIGNOUT</Text>
      </TouchableOpacity>
    </View >
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  title2: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  btn: {
    bottom: 0,
    position: 'absolute',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginBottom: 50
  },
  btnText: {
    fontWeight: 'bold',
    color: 'black'
  },
})