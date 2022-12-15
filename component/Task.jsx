
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/todoAction';
const Task = ({todo, deletebutton}) => {
    const tw = useTailwind();
    const dispatch = useDispatch()
   
  return (
    <Card containerStyle={tw('my-2 w-2/3 mx-auto flex relative px-4  bg-white rounded-2xl')}>
        
        <Text style={tw('text-lg font-bold text-slate-700 mx-auto')}>{todo.task}</Text>
        {todo.becomplete && (
         <View style={tw('rounded-full bg-sky-400 absolute top-2 -left-12 ')}>
                <FontAwesome name="check" size={24} color="white" />
        </View>
         )}  
         <TouchableOpacity onPress={deletebutton} activeOpacity={0.5} style={[tw('absolute top-1/2 -right-12 bg-white  w-6 h-6 rounded-full'), styles.deleteTask]}>
            <Ionicons name="close" size={24} color="red" />
         </TouchableOpacity>
    </Card>
  )
}

export default Task

const styles = StyleSheet.create({
    deleteTask: {
        transform: [{translateY: -10}]
    }
})