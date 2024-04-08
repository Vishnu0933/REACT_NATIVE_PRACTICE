import React from 'react'
import { Button, View, Text } from 'react-native'

const PostAPIcall = () => {
    
    const saveAPIData = async ()=>{
        console.warn("function called")
        const data ={
            name: "Kachikudda",
            age: 24,
            email: "kachikudda@gmail.com"
        }
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        result= await result.json()
        console.warn(result)
    }
  return (
    <View>
        <Text style={{fontSize:30}}>Post API call</Text>
        <Button title='Save Data' onPress={saveAPIData} />
    </View>
  )
}

export default PostAPIcall