import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text, Button,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { changeCount } from './actions/countAction';
import { bindActionCreators } from 'redux';


const CompApp = () => {

  const [counter, setCounter] = useState(0);
  const decrementCount = () => {
    setCounter(counter-1);
  };

  const incrementCount = () => {
    setCounter(counter+1);
  };
  return (
    <View styles={styles.container}>
      <Text>
        Counter App
      </Text>
      <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={incrementCount}
      />
      <Text>{counter}</Text>
      <Button
        title="Decrement"
        onPress={decrementCount}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:50
  }
});

