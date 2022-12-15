
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux' 
import { getTasks, deleteTask  } from '../actions/todoAction'
import Task from '../component/Task'
import { Alert } from 'react-native'
const Home = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    })
    const tw = useTailwind()
    const dispatch = useDispatch()
    const {tasks, task} = useSelector(state => state.Todo);
    useEffect(() => {
      dispatch(getTasks());
    }, [])
    const deleteTask = (id) => {
      
      // Alert.alert(
      //   "Delete",
      //   "you want to delete the item?",[
      //     {
      //       text: "OK",
      //       onPress: () => {dispatch(deleteTask(id))}
      //     },
      //     {
      //       text: "Cancel",
      //       onPress: () => console.log("Cancel pressed"),
      //       style: "cancel"
      //     }
      //   ]
      // )
      dispatch(deleteTask(id))
  }
  return (
    <SafeAreaView style={tw('flex-1 pt-6 bg-gray-300')}>
      
       <Text style={tw('text-blue-600 mx-auto text-2xl font-bold my-4')}>Tasks</Text>
      <ScrollView style={tw('flex-1')}>
      {tasks && tasks.length > 0 && tasks.map(tas => <Task key={tas.id} todo={tas} deletebutton={() => {deleteTask(tas.id)}}></Task>)}
      </ScrollView>
     
     
    </SafeAreaView>
  )
}

export default Home

