import React, { useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const RefUse = () => {
    const input = useRef();

    const buttonHandler =()=>{
        input.current.focus();
        input.current.setNativeProps({
            fontSize:20,
            backgroundColor:'orange',
        })

    }

  return (
    <View style={{flex:1}}>
        <Text style={{fontSize:30}}>Use REf </Text>
        <TextInput ref={input} style={styles.input} placeholder='Enter ID'></TextInput>
        <TextInput style={styles.input} placeholder='Enter password'></TextInput>
        <Button title='Save Data' onPress={buttonHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderColor:"skyblue",
        borderWidth:1,
        margin:15,
    }
})

export default RefUse