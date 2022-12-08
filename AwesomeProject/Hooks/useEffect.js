import React, { useState, useEffect } from "react";
import { Keyboard, TextInput, Button, View, Text,Image } from "react-native";

const CompFunc = () => {
    const [count, setCount] = useState(0);
    const [data, SetData] = useState(0);
    
    return(
        <View style={{alignItems: 'center', margin:20 }}>
            <Text style={{fontSize:30,}}>{count}</Text>
            <Button title="update state" onPress={()=>{ setCount(count ) }}/>
        </View>
    );
};

export default CompFunc;