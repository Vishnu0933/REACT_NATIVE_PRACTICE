import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './Home'
import { Login } from './Login'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'orange',
            },
            hearderTintColor: 'blue',
            headerBackTitleStyle:{
                fontSize:25,
            },
        }}>
            <Stack.Screen name='Login' component={Login}
            options={{
                title:'User Login',
                headerLeft: ()=> <Button title='left Btn' onPress={()=>console.warn('Left Btn pressed')}/> ,
                headerRight: ()=> <Button title='Right Btn' onPress={()=>console.warn('Right Btn pressed')} /> ,
                headerStyle:{
                    backgroundColor:'pink',   
                },
                hearderTintColor: 'blue',
                headerTitleStyle:{
                    fontSize:35,
                    fontWeight:'bold',
                },  
            }}
            />

            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default StackNavigation