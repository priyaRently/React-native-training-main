import React from 'react';
import {useColorScheme} from 'react-native';
import Home from './src/Home/home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <Home/>
    </>
  );
};
export default App;
