import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button  } from 'react-native'


const PostAPIwithInputField = () => {
    const [name, setName]= useState('');
    const [email, setEmail]=useState('')
    const [age, setAge]=useState();

    const [nameError, setNameError]= useState(false);
    const [emailError, setEmailError]=useState(false)
    const [ageError, setAgeError]=useState(false);

    const saveData = async () =>{
    console.warn(name)
    // console.warn(age)
    // console.warn(email)
    if(!name){
        setNameError(true)
    }else {
        setNameError(false)  
    }
    if(!age){
        setAgeError(true)
    }else{
        setAgeError(false)
    }
    if(!email){
        setEmailError(true)
    }else{
        setEmailError(false)
    }

    if(!name || !age || !email){
        return false
    }
    const url = "http://10.0.2.2:3000/users" ;
    let result = await fetch(url, {
        method:"POST",
        headers:{
            "Cotent-Type":"application/json"
        },
        body:JSON.stringify({name, age, email})
    });
    result = await result.json();
    console.warn(result)
    setName('');
    setEmail('');
    setAge()
}

  return (
    <View>
        <Text style={{fontSize:30}}> POST API with Input Field Data</Text>
        <TextInput style={styles.input}
         placeholder='Enter Name' 
         value={name}
         onChangeText={(text)=>setName(text)} />
         {
            nameError ?
            <Text style={styles.textError}> Please enter valied name</Text>
            : null
         }
         <TextInput style={styles.input}
         placeholder='Enter Age' 
         value={age}
         onChangeText={(text)=>setAge(text)} />
          {
            ageError ?
            <Text style={styles.textError}> Please enter valied Age</Text>
            : null
         }
         <TextInput style={styles.input}
         placeholder='Enter Email ID' 
         value={email}
         onChangeText={(text)=>setEmail(text)} />
          {
            emailError ?
            <Text style={styles.textError}> Please enter valied Email</Text>
            : null
         }
        <Button title='Save Data' onPress={saveData} />
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        borderColor:'skyblue',
        borderWidth:1,
        margin:15,
        marginBottom:5
        
    },
    textError:{
        color:'red',
        marginLeft:10,
        marginBottom:5,
    }
})
export default PostAPIwithInputField