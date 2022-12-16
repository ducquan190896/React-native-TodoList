import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import {getTasks, deleteTask, openUpdateStatus } from '../actions/todoAction';
import { useNavigation } from '@react-navigation/native';
const Task = ({todo}) => {
    const tw = useTailwind();
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {tasks, task, taskSuccess} = useSelector(stage => stage.Todo)
    const [showUpdate, setShowUpdate] = useState(false);
    const deletebutton= async (id) => {
        Alert.alert(
            "Delete",
            "you want to delete the task",
            [
                {
                    text: "OK",
                    onPress: async () => {
                        await dispatch(deleteTask(id))
                        dispatch(getTasks())
                    }
                        
                },
                {
                    text: "cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        )

     
       dispatch(getTasks())
    }
    const openUpdate = () => {
        dispatch(openUpdateStatus(todo))
    }
  
  return (
   <View   style={tw('mb-2')}>
    <TouchableOpacity onPress={() => setShowUpdate(prev => !prev)}>
    <Card containerStyle={tw(' w-2/3 mx-auto flex relative px-4  bg-white rounded-2xl')}>
        <Text style={tw('text-lg font-bold text-slate-700 mx-auto')}>{todo.task}</Text>
        {todo.becomplete && (
         <View style={tw('rounded-full bg-sky-400 absolute top-2 -left-12 ')}>
                <FontAwesome name="check" size={24} color="white" />
        </View>
         )}  
         
    </Card>
    {showUpdate && (
       <View style={tw('flex flex-row items-center justify-center mt-2 ')}>
         <Button onPress={openUpdate} title="update task" buttonStyle={tw(' bg-sky-400 mx-6 rounded-lg')}></Button>
        <TouchableOpacity onPress={() => deletebutton(todo.id)} activeOpacity={0.5} style={[tw(' bg-white  w-6 h-6 rounded-full')]}>
        <Ionicons name="close" size={24} color="red" />
        </TouchableOpacity>
       </View>
     )} 
    </TouchableOpacity>
    
   </View>
  )
}

export default Task

const styles = StyleSheet.create({
    deleteTask: {
        transform: [{translateY: -10}]
    }
})