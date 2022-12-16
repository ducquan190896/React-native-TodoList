import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckBox, Input } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, getTasks, updateTaskFunction } from '../actions/todoAction'
import { Alert } from 'react-native'


const Form = () => {
    const [todo, setTodo] = useState(null)
    const [todoId, setTodoId] = useState(null);
    const [completeStatus, SetCompleteStatus] = useState(false)
    
    const tw = useTailwind()
    const dispatch = useDispatch();
    const {taskSuccess, taskError, updateStatus, updateTask} = useSelector(state => state.Todo)

    useEffect(() => {
      if(updateStatus == true && updateTask) {
        setTodo(updateTask.task)
        setTodoId(updateTask.id)
        SetCompleteStatus(updateTask.becomplete)
      }
    }, [updateStatus, updateTask])

    const addButton = async () => {
       if(!updateStatus) {
        if(todo && todo.trim().length > 0) {
          const taskObj = {
              task: todo,
              becomplete: completeStatus
          }
         await dispatch(addTask(taskObj))
        //  dispatch(getTasks())
          setTodo(null)
         } else {
          Alert.alert("please type your task")
         }
       } else {
        if(todo && todo.trim().length >  0) {
          const taskObj = {
            task: todo,
            becomplete: completeStatus,
            id: todoId
          }
        await  dispatch(updateTaskFunction(todoId, taskObj))
        // dispatch(getTasks)
        setTodo(null)
        setTodoId(null)
        SetCompleteStatus(false)
        }
       }
    }

  return (
    <View style={tw('my-4')}>
      
        <TextInput  value={todo} onChangeText={text => setTodo(text)} underlineColorAndroid="transparent"  placeholder='type your task...' style={tw('rounded-2xl mx-auto w-full h-14 py-2 px-4 bg-white')}></TextInput>
        {updateStatus && (
          <CheckBox containerStyle={{backgroundColor: "transparent"}} textStyle="white"  center title="Complete Status" checked={completeStatus} onPress={() => SetCompleteStatus(prev => !prev)}></CheckBox>
        )}
        <TouchableOpacity onPress={addButton} style={tw('mt-4 p-4 bg-sky-400 rounded-full mx-auto')}>
            <Text style={tw('font-bold text-white text-lg')}>Add Task</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Form

const styles = StyleSheet.create({})