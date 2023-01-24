
import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import Add from './add';
import Task from './task';

export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
    }

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO LIST</Text>
            
            <ScrollView style={styles.scrollView}>
                {
                    tasks.map((task, index) => {
                        return (
                            <View key={index} style={styles.taskContainer}>
                                <Task index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
                            </View>
                        );
                    })
                }
            </ScrollView>
            <Add addTask={addTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#85586F',
    },
    heading: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
    },
    scrollView: {
        marginBottom: 70,
    },
    taskContainer: {
        marginTop: 20,
    }
});