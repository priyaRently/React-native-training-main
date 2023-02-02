import React, {useState} from 'react';
import {
    View,
    Button
} from 'react-native';
import { Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const Home = () => {

    const [name,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const submit = () => {
        navigation.navigate("Profile",{
            name:name,
            email:email,
            number:number,
        });
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Input 
                placeholder='Name' 
                value={name} 
                onChangeText={(text)=>setName(text)}/>
           <Input 
                placeholder='Email' 
                value={email} 
                onChangeText={(text)=>setEmail(text)}/>
           <Input 
                placeholder='Number' 
                value={number} 
                onChangeText={(text)=>setNumber(text)}/>
            <Input 
                placeholder='Password' 
                value={password} 
                onChangeText={(text)=>setPassword(text)}
                secureTextEntry/>   

            <Button title='Submit' onPress={submit}/> 
        </View>
    );
};

export default Home;