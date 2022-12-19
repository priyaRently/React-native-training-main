import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

export default Task = (props) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <CheckBox 
                    value={isSelected}
                    onValueChange={(newValue)=> {
                        setSelection(newValue);
                        handleClick();
                    }}
                    style={styles.checkbox} />
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
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
    task: {
        color: '#fff',
        width: '80%',
        fontSize: 20,
    },
    delete: {
        marginLeft: 10,
        fontSize:20
    },
});