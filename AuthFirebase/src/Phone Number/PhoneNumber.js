import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PhoneNumber = (props) => {
    const [phoneNumber, setNumber] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Phone Number</Text>
            <TextInput placeholder='Number'
                style={styles.input}
                value={phoneNumber}
                onChangeText={(num) => setNumber(num)}
            />
            <TouchableOpacity style={styles.btn}
                onPress={() => props.onSubmit(phoneNumber)}>
                <Text style={styles.btnText}>PROCEED Signin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PhoneNumber

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