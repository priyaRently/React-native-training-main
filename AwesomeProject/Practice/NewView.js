import React from 'react';
import {
    View, Image, Text, StyleSheet,
    TextInput, SafeAreaView
} from 'react-native';

const ComponentFunc = () => {

    return (
        <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
            <Image style={style.imageStyle}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />


            <View style={{ backgroundColor: "blue", height: 50 }} />
            <Text style={style.helloText}>
                Hello World !!
            </Text>
            <Text style={style.baseText}>
                I am Bold
                <Text style={style.innerText}> and red.</Text>
            </Text>
            <Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}> =**=Text=**= </Text>
                <Text>First part and </Text>
                <Text>second part</Text>
                <Text> second part</Text>
            </Text>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold' }}> =**=View=**= </Text>
                <Text>First part and </Text>
                <Text>second part</Text>
                <Text>second part</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    innerText: { color: 'red' },
    helloText: {
        backgroundColor: "yellow",
        fontSize: 30,
        fontWeight: "bold",
        color: 'black'
    },
    imageStyle: { width: 100, height: 100, margin: 10 }
});

export default ComponentFunc;

