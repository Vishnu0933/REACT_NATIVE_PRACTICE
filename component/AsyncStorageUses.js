import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const AsyncStorageUses = () => {
    const [name, setName]= useState('')
    const setData = async()=>{
        await AsyncStorage.setItem("name","Vishnukant Sontakke");

    }
    const getData = async()=>{
        const name = await AsyncStorage.getItem("name");
        setName(name);
        console.warn(name);
    }

const removeData =async()=>{
    await AsyncStorage.removeItem("name")
    setName('');
}
  return (
    <View>
        <Text>Async Storage With React Native {name}</Text>
        <Button title='Set data' onPress={setData}/>
        <Button title='Get data' onPress={getData}/>
        <Button title='Remove data' onPress={removeData}/>
    </View>
  )
}

export default AsyncStorageUses