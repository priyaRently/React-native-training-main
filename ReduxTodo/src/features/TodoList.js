import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function TodoList() {
    const todos = useSelector((state)=>state.todos);

    if(!todos.length){
        return(
            <View>
                <Text>
                    Start creating a new todo
                </Text>
            </View>
        )
    }
    return(
        <View>
            <Text>
                Todo List
            </Text>
            {todos.map((todo,index) => (
                <Text>
                    {`${index+1}. ${todo.text}`}
                </Text>
            ))}
        </View>
    )
}