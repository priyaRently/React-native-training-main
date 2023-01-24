import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './SignIn/home';
import ProfileScreen from './SignIn/profile';
import SettingsScreen from './SignIn/setting';
import SignInScreen from './SignOut/signIn';
import SignUpScreen from './SignOut/signUp';

const Stack = createNativeStackNavigator();

// export default function flows() {
//   const isSignedIn = false;
//   return (
//     <NavigationContainer>
//       {isSignedIn ? (
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//           <Stack.Screen name="Settings" component={SettingsScreen} />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen name="SignIn" component={SignInScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   )

// }

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};