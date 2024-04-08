import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const Input = () => {
    const [name, setName]= useState('');

  return (
    <View>
    <Text style={{fontSize:25}}> Handle Text Input</Text>
    <Text style={{fontSize:20}}> Your name is {name}</Text>
    <TextInput 
        style={styles.textInput} 
        placeholder='Input text'
        value= {name}
        onChangeText={(text)=>setName(text)}
    />
    <Button title='Clear input value'
    onPress={()=>setName('')}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    textInput : {
        fontSize:25, 
        color: 'blue',
        borderWidth:2, 
        borderColor: 'blue', 
        margin:10 }
})

export default Input