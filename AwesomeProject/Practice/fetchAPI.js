import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const APIapp = () => {
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson))
                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    };

    const postData =  () => {
        const requestOptions =
        {
            method: 'POST',
            body: JSON.stringify({
                userId: 10,
                id: 19,
                title: "sunt aut facere repellat occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae utqua"
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        };
    
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            alert(JSON.stringify(json));
            
        });
    
    }
    return (
        <View style={{ flex: 1, margin: 30, }}>
            <View style={{ justifyContent: 'center', padding: 20 }}>
                <TouchableOpacity onPress={getData}
                    style={styles.button}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
                        Get Data Using GET
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={postData}
                    style={styles.button}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
                        Get Data Using POST
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center', padding: 10,margin:10,
        backgroundColor: '#a15100', alignSelf: 'center',
        height: 50, width: 250
    }
})
export default APIapp;