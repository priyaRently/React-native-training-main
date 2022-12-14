import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';

const Profile = () =>{
    const route = useRoute();
    return (
        <View style={{margin:10}}>
           <Text style={styles.text}>Name : {route.params.name}</Text>
           <Text style={styles.text}>Email : {route.params.email}</Text>
           <Text style={styles.text}>Number : {route.params.number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize:25,
        fontStyle: 'italic',
        fontWeight: '700',
        margin:10
    }
})
export default Profile;