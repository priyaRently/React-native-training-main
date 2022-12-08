import React, { useState } from "react";
import { Keyboard, TextInput, Button, View, Text,Image } from "react-native";

const App = () => {
	const keyboardShowListener = Keyboard.addListener(
		'keyboardDidShow',
		() => {
			alert('Keyboard is open')
		}
	);
	const keyboardHideListener = Keyboard.addListener(
		'keyboardDidHide',
		() => {
			alert('Keyboard is closed')
		}
	);

	return (
		<View style={{ marginTop: 50 }}>
			<Text style={{ fontSize: 30, color: 'black',fontWeight:'700', 
				alignSelf:'center', marginBottom:20,  }}>
				KEYBOARD</Text>
			<Image style={{ width: 200, height: 200, marginBottom: 30 ,alignSelf:'center'}}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

			<Text style={{ fontSize: 28, color: 'black' }}>
				Email</Text>
			<TextInput
				style={{ backgroundColor: 'white', marginBottom: 10 }}
				onSubmitEditing={Keyboard.dismiss}
			/>
			<Text style={{ fontSize: 28, color: 'black' }}>
				Name</Text>
			<TextInput
				style={{ backgroundColor: 'white', marginBottom: 10 }}
				onSubmitEditing={Keyboard.dismiss}
			/>
			<Text style={{ fontSize: 28, color: 'black' }}>
				Number</Text>
			<TextInput
				style={{ backgroundColor: 'white', marginBottom: 10 }}
				onSubmitEditing={Keyboard.dismiss}
			/>
		</View>
	);
};

export default App;
