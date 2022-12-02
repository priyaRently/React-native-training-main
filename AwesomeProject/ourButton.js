import React from 'react';
import {
    View, Image, Text, StyleSheet,
    TextInput, SafeAreaView, ScrollView, Button, Alert
} from 'react-native';

const ComponentFunc = () => {

    return (
        <View>
            <Text style={style.text}>Button</Text>
            <Button title='Click Here' style={style.button}
                onPress={()=> Alert.alert('Button Clicked')}
                />               
        </View>
    );
};

const style = StyleSheet.create( {
    button: {width: 50},
    text: {textAlign:'center', fontWeight:'bold',
    color:'black', fontSize:20, margin:20}
})

export default ComponentFunc;