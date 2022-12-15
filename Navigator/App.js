import { View, Text } from 'react-native';
import React from 'react';
import Routes from './src/routes';
import Nest from './src/Nesting/nesting';
import Modal from './src/modal';
import Drawers from './src/DrawerNavigation/drawer'; 

const App = () => {
  return (
    <>
      <Drawers/>
    </>
  )
}

export default App;