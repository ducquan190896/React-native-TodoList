
import { FlatList, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux' 
import { getTasks, deleteTask  } from '../actions/todoAction'
import Task from '../component/Task'
import { Alert } from 'react-native'
import Form from '../component/Form'


const Home = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    })
    const tw = useTailwind()
    const dispatch = useDispatch()
    const {tasks, task, taskSuccess} = useSelector(state => state.Todo);
    useEffect(() => {
     
      dispatch(getTasks());
    }, [])

    useEffect(() => {
      if(tasks.length != 0) {
        dispatch(getTasks());
      }
    }, [ taskSuccess])
    
  return (
    <SafeAreaView style={tw('flex-1 pt-6 bg-gray-300 px-6')}>
      
       <Text style={tw('text-blue-600 mx-auto text-2xl font-bold my-4')}>Tasks</Text>
       <Form></Form>
       
       
        <KeyboardAvoidingView style={tw('flex-1')}>
        <TouchableWithoutFeedback style={tw('flex-1')} onPress={Keyboard.dismiss}>
        <ScrollView style={tw('flex-1')}>
      {tasks && tasks.length > 0 && tasks.map(tas => <Task key={tas.id} todo={tas} ></Task>)}
        </ScrollView>

        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
       
    </SafeAreaView>
  )
}

export default Home

