import React from 'react';
import {
    View, Text, StyleSheet,
     Alert, TouchableOpacity
} from 'react-native';

const ComponentFunc = () => {

    return (
        <View>
            <Text style={style.text}>Button</Text>
            <TouchableOpacity style={[style.button,]}
                onPress={() => Alert.alert('Button Clicked')}>
                <Text style={style.text}> CLICK HERE </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[style.button,]}
                onPress={() => Alert.alert('Button Clicked')}>
                <Text style={style.text}> CLICK HERE </Text>
            </TouchableOpacity>

        </View>
    );
};

const style = StyleSheet.create({
    button: { backgroundColor: 'skyblue', margin: 30 },
    text: {
        textAlign: 'center', fontWeight: 'bold',
        color: 'black', fontSize: 20, margin: 20
    }
})

export default ComponentFunc;