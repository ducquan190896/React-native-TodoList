import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './Store';

export default function App() {
  const tw = useTailwind();
  const Stack = createNativeStackNavigator()
  return (
    
    
  
    <Provider store={store}>
        <TailwindProvider utilities={utilities}>
       
       <NavigationContainer>
         <Stack.Navigator initialRouteName='home'>
           <Stack.Screen component={Home} name="home"></Stack.Screen>
         </Stack.Navigator>
       </NavigationContainer>
      
   

     </TailwindProvider>
     </Provider>
  
 
  );
}



