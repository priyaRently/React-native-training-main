import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default Task = (props) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <CheckBox  
                    value={isSelected}
                    onValueChange={(newValue)=> {
                        setSelection(newValue);
                        
                    }}
                    style={styles.checkbox} />
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task(isSelected)}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <Icon style={styles.delete} name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#FFE5F1',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    taskContainer: {
        backgroundColor: '#227C70',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task:(isSelected)=>
    {
     const decoration=isSelected ? "line-through":"none";
     return{
        color: '#fff',
        width: '80%',
        fontSize: 20,
        textDecorationLine:decoration,
     };
    },
    delete: {
        marginLeft: 10,
        fontSize:20
    },
});