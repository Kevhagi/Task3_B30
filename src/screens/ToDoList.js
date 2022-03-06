import React, { useState, useEffect } from 'react'
import { Alert, FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
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

import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Dialog from "react-native-dialog";

export default function ToDoList() {
    const { tasks } = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const [task, setTask] = useState('') //Store input onChange new task
    const [visible, setVisible] = useState(false) //State alert dialog

    const showDialog = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        AsyncStorage.getItem('Tasks')
            .then(tasks => {
                const parsedTasks = JSON.parse(tasks);
                if (parsedTasks && typeof parsedTasks === 'object') {
                    dispatch(setTasks(parsedTasks));
                }
            })
            .catch(err => console.log(err))
    }

    const addTask = () => {
        if (task.length == 0) {
            Alert.alert('Warning!', 'Please write your task.')
        } else {
            try {
                let setID = tasks.length + 1
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].ID === setID) {
                        setID = setID + 1 
                    }
                }

                var Task = {
                    ID: setID,
                    Task: task
                }
                let newTasks = [];
                newTasks = [...tasks, Task];
                AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                    .then(() => {
                        dispatch(setTasks(newTasks));
                    })
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error);
            }
        }
    }

    const editTask = (id) => {
        if (tasks.length !== 0){
            const index = tasks.findIndex(task => task.ID === id)

            tasks.splice(index, 1)
            var updateTask = {
                ID : id,
                Task : 'Dummy dari code'
            }

            let newTasks = []
            newTasks = [...tasks, updateTask]

            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                })
                .catch(err => console.log(err))    
        }
    }

    const deleteTask = (id) => {
        if (tasks.length !== 0){
            const index = tasks.findIndex(task => task.ID === id)
            tasks.splice(index, 1)
            let newTasks = []
            newTasks = [...tasks]
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                })
                .catch(err => console.log(err))
        }
    }

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
                                <TouchableOpacity 
                                    style={styles.square}
                                    onPress={() => {deleteTask(item.ID)}}
                                >    
                                </TouchableOpacity>
                                <Text style={styles.itemTask}>{item.Task}</Text>
                                <TouchableOpacity onPress={() => {editTask(item.ID)}}>
                                    <Feather style={styles.editTask} name="edit" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={ (item, index) => index.toString()}
                />
            </View>
            
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.inputWrapper}
            >
                <TextInput 
                    style={styles.input}
                    placeholder='Write a task'
                    onChangeText={(value) => setTask(value)}
                />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.addInputWrapper}>
                        <Text style={styles.addInput}>+</Text>    
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

