import React, { useEffect, useState } from 'react';
import {
    View, Image, Text, StyleSheet,
    TouchableOpacity, Animated, Alert
} from 'react-native';

const AnimationFunc = () => {
    const value = useState(new Animated.ValueXY(
                            { x:0, y:0}))[0]

    function moveBallRight() {
        Animated.loop(
            Animated.timing(value, {
                toValue: {x:290, y:0},
                duration: 500,
                useNativeDriver: false,
                delay:500
        })).start() 
        
    }
    // function moveBallLeft() {
    //     Animated.timing(value, {
    //         toValue: {x:0, y:0},
    //         duration: 300,
    //         useNativeDriver: true
    //     }).start() 
    // }
    return(
        <View>
            <Text style={{fontSize:40, textAlign:'center',
                    fontWeight:'900', textDecorationLine:'underline'}}> ANIMATION </Text>
            <Animated.View style={value.getLayout()}>
                <View style={{ width: 100, height:100, 
                     borderRadius: 100/2, backgroundColor:'black'}}
                />    
            </Animated.View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={moveBallRight} style={{padding:10, margin:10}}>
                    <Text style={{ backgroundColor:'skyblue', width:100}}>
                        Click here to move right</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={moveBallLeft} style={{padding:10, margin:10}}>
                    <Text style={{ backgroundColor:'skyblue', width:100}}>
                        Click here to move left</Text>
                </TouchableOpacity> */}
            </View> 
        </View>
    );
};

export default AnimationFunc;