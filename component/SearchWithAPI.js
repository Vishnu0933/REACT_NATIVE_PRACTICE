import React from 'react'
import { Text, TextInput, View } from 'react-native'

const SearchWithAPI = () => {
    const searchUser =async (text) =>{
      
        const url=`http://10.0.2.2:3000/users?q=${text}`;
        let result = await fetch(url)
        result = await result.json();
        if(result){
            console.warn(result)
        }else{
          console.warn("error")
        }

        
    }
  return (
    <View style={{flex: 1}}>
        {/* <Text style={{fontSize:30}}>Search With API</Text> */}
        <TextInput
        style={{borderColor:'skyblue', borderWidth:3, margin:15, fontSize:20}}
        placeholder={"Search"}
        onChangeText={(text)=>searchUser(text)}
        />
    </View>
  )
}

export default SearchWithAPI