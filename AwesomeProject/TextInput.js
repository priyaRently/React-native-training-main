import React from 'react';
import {
    View, Text, StyleSheet,
    TextInput, SafeAreaView
} from 'react-native';
const textInputFromKeyboard = () => {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <SafeAreaView>
                <TextInput
                    style={style.textInputStyle}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='INPUT TEXT'
                />
                <TextInput
                    style={style.textInputStyle}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType='numeric'
                    placeholder='INPUT NUMBER'
                />
            </SafeAreaView>
        </View>
    );
};

const style = StyleSheet.create({
    textInputStyle: {
        height: 40,
        backgroundColor: 'azure',
        fontSize: 20,
        margin: 12,
        borderWidth: 1
    }
});

export default textInputFromKeyboard;