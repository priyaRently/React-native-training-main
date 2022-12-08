import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View, PermissionsAndroid } from 'react-native';
//import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        alert('granted', granted);
        if (granted === 'granted') {
            alert('You can use Geolocation');
            return true;
        } else {
            alert('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};

const LocationApp = () => {
    const [location, setLocation] = useState(false);

    const getLocation = () => {
        const result = requestLocationPermission();

        result.then(response => {
            console.log('response is: ', response);
            if (response) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000
                    }
                );
            };
        });
    }
    const resetValue = () => {
        setLocation(null);
    };

    return (

        <View style={styles.container}>
            <Image source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png' }}
                style={{ width: 100, height: 100, margin: 10 }}
            />
            <View>
                <TouchableOpacity onPress={getLocation} style={styles.button}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', padding: 10 }}>
                        Get Location
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>LONGITUDE: {location ? location.coords.longitude : null}</Text>
            <Text style={styles.text}>LATITUDE: {location ? location.coords.latitude : null}</Text>
            <View>
                <TouchableOpacity onPress={resetValue} style={styles.button}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', padding: 10 }}>
                        Reset Value
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        fontSize: 25,
        color: 'black',
        fontWeight: '800'
    },
    button: {
        height: 50,
        width: 200,
        backgroundColor: '#a15100',
        margin:10
    }
});

export default LocationApp;