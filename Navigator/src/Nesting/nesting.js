import React from 'react';
import {
    StyleSheet, Button,
    Text,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Messages() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Messages Screen</Text>
      </View>
    );
}
function Feed() {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Feed Screen</Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      </View>
    );
  }

function Home() {
    return (
        <Tab.Navigator screenOptions={{headerTitleAlign:'center'}}>
            <Tab.Screen name="Feed" component={Feed}  />
            <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
    );
}

function Profile() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    );
  }

function Settings() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Setting Screen</Text>
      </View>
    );
  }
const nesting = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
                <Stack.Screen name="Home" component={Home}
                    options={{ headerShown: true }}
                />
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    text: {fontSize:25}
})
export default nesting;