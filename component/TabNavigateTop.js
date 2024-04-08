//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

const Tab = createMaterialTopTabNavigator();

const TabNavigateTop = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='SignUp' component={SignUp} />
            <Tab.Screen name='Other' component={SignUp} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const Login = () =>{

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Login Page </Text>
        </View>
    )
}

const SignUp = () =>{

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Sign Up Page </Text>
        </View>
    )
}

export default TabNavigateTop