import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GoogleIcon from '/home/priya/Desktop/Github/React-native-training-main/AuthFirebase/assets/google.svg'
const Google = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Google Authentication</Text>
            <TouchableOpacity style={styles.optionBtn}>
                <GoogleIcon width={24} height={24} />
                <Text style={styles.optionText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Google

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
    btn: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center'
    },
    btnText: {
        color: 'black',
    },
    optionBtn: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    optionText: { 
        fontSize: 18, 
        color: 'black', 
        marginLeft: 50,        
    },
})