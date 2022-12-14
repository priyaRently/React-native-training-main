import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Profile from './profile';
const Stack = createNativeStackNavigator();

const Details = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' }
            }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile}
                    options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Details;