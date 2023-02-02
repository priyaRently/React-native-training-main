import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/home'
import ProfileScreen from '../Screens/profile';
const Stack = createNativeStackNavigator();

const Details = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' }
            }} >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
    );
};

export default Details;