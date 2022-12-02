import React, { useState } from 'react';
import {
    View, Image, Text, StyleSheet,
    TextInput, SafeAreaView, ScrollView, Button, Alert, TouchableOpacity
} from 'react-native';

const CountNumber = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View style={styles.mainView}>
            <Text style={styles.text}> {counter} </Text>

            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        setCounter(counter + 10);
                    }}>
                    <Text style={styles.innerText}> +10 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        setCounter(0);
                    }}>
                    <Text style={styles.innerText}> Reset </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        if(counter > 0) setCounter(counter - 10);
                    }}>
                    <Text style={styles.innerText}> -10 </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: { alignItems: 'center', margin:20, padding:20},
    button: { height:50, width:100, backgroundColor:'black', margin:25 , alignItems:'center'},
    innerText: { fontSize: 30, fontWeight:'bold', color:'white'},
    text: {fontSize: 55, fontWeight:'bold', color:'black'}
});

export default CountNumber;