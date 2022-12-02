import React from 'react';
import {
     View, Image, Text, StyleSheet,
     TextInput, SafeAreaView, TouchableHighlight, Alert
} from 'react-native';

const componentFuncTH = () => {
     const [count, setCount] = React.useState(0);
     const onPress = () => {
          if (count >= 10)
               Alert.alert("Reached Maximum Limit");
          else
               setCount(count + 1);
     };
     return (
          <View style={style.tHighlight}>
               <TouchableHighlight onPress={onPress}>
                    <View style={style.button}>
                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Touch Here</Text>
                    </View>
               </TouchableHighlight>
               <View style={style.countContainer}>
                    <Text style={style.countText}> {count} </Text>
               </View>
          </View>
     );
};

const style = StyleSheet.create({
     tHighlight: { padding: 10 },
     button: {
          alignItems: 'center',
          backgroundColor: 'grey',
          padding: 10
     },
     countContainer: { alignItems: 'center' },
     countText: { color: 'black', fontSize: 20 }
});

export default componentFuncTH;