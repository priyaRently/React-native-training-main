import React, { useEffect, useState } from 'react';
import { Text,Image, StyleSheet, TouchableOpacity, View, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationApp = () => {
    const [currentLongitutde, setCurrentLongitude] = useState('0');
    const [currentLatitude, setCurrentLatitude] = useState('0');
    const [locationStatus, setLocationStatus] = useState('');

    useEffect(() => {
        const requestLocationPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    {
                        title: 'Location Access Required',
                        message: 'Apps needs to Access your location'
                    },
                );
                if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getOneTimeLocation();
                    subscribeLocation();
                } else{
                    setLocationStatus('Permission Denied');
                }
            } catch(err) {
                console.warn(err);
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);
    
    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            (position) => {
                setLocationStatus('You are Here');
                const currentLongitutde = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);

                setCurrentLongitude(currentLongitutde);
                setCurrentLatitude(currentLatitude);
            }, 
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    } ;

    const subscribeLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                setLocationStatus('You are Here');
                console.log(position);
                
                const currentLongitutde = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);

                setCurrentLongitude(currentLongitutde);
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy:false,
                maximumAge:1000
            },
        );
    };

    return(
        <View>
            <View style={styles.container}>
                <Image source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png'}}
                    style = {{width:100, height:100, margin:10}}
                />
                <Text style={styles.text}>LocationStatus: {locationStatus}</Text>
                <Text style={styles.text}>Longitude: {currentLongitutde}</Text>
                <Text style={styles.text}>Latitude: {currentLatitude}</Text>
                <View>
                    <TouchableOpacity onPress={getOneTimeLocation} style={styles.button}>
                        <Text style={{textAlign: 'center', fontSize: 20, color: 'white',padding:10 }}>Press</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    },
    text: {
        fontSize: 25,
        color: 'grey',
        fontWeight: '800'
    },
    button: { 
        height:50,
        width:200,
        backgroundColor:'#a15100'
    }
})
export default LocationApp;