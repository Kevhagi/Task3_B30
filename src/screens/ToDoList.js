import * as React from 'react'
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#E8EAED"
    },
    titleWrapper : {
        paddingStart: 20,
        paddingTop: 20
    },
    title : {
        fontSize: 24,
        fontWeight: "700"
    },
    taskWrapper : {
        paddingHorizontal: 20,
        marginBottom: 150
    },
    tasks: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        flex: 1
    },
    items: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    square: {
        width: 24,
        height: 24.,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 8
    },
    itemTask: {
        width: "80%"
    },
    editTask: {
        opacity: 0.4
    },
    inputWrapper: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: 300,
        borderRadius: 60,
        backgroundColor: "#FFF",
        borderColor: "#C0C0C0",
        borderWidth: 1
    },
    addInputWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1
    },
    addInput: {
        fontWeight: "700",
        fontSize: 24
    }
})

export default function ToDoList() {
    const tasks = [
        {
            task: 'Task with long-long descriptions that it is make the flex wrap do their job'
        },
        {
            task: 'Test'
        },
        {
            task: 'Tast2'
        },
        {
            task: 'Test3'
        },
        {
            task: 'asd'
        },
        {
            task: 'asddsads'
        },
        {
            task: 'asdfddasss'
        },
        {
            task: 'fdfddfgd'
        }
    ]
    return(
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>To-Do List</Text>    
            </View>

            <View style={styles.taskWrapper}>
                <FlatList 
                    data={tasks}
                    renderItem={ ({item}) => 
                        <View style={styles.tasks}>
                            <View style={styles.items}>
                                <TouchableOpacity style={styles.square}>
                                </TouchableOpacity>
                                <Text style={styles.itemTask}>{item.task}</Text>
                                <TouchableOpacity>
                                    <Feather style={styles.editTask} name="edit" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={ (item) => item.task}
                />
            </View>
            
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.inputWrapper}
            >
                <TextInput 
                    style={styles.input}
                    placeholder='Write a task'
                />
                <TouchableOpacity>
                    <View style={styles.addInputWrapper}>
                        <Text style={styles.addInput}>+</Text>    
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

