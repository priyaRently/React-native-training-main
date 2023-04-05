import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const VerifyCode = (props) => {
    const [code,setCode]= useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>
            <TextInput placeholder='OTP'
                value={code}
                onChangeText={(num)=>setCode(num)}
                style={styles.input} />
            <TouchableOpacity style={styles.btn}
                onPress={() => props.onSubmit(code)}>
                <Text style={styles.btnText}>Confirm OTP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VerifyCode

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center'
    },
    title: {
        marginTop: 100,
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
        color: 'black'
    },
    input: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
        padding: 15,
        fontSize: 18,
        borderColor: 'black'
    },
    btn: {
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'yellow'
    },
    btnText: {
        fontWeight: 'bold',
        color: 'black'
    },
})