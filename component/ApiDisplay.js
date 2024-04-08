import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

const ApiDisplay = () => {
    const [data, setData]= useState([])
    const getApiData = async () =>{
        url='http://10.0.2.2:3000/users';  //htis is API server for android users
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }
    useEffect(()=>{
        getApiData()
    }, [])
  return (
    <ScrollView>
        <Text style={{fontSize:30}}>API crud with JSON</Text>
        {
            data.length?
            data.map((item)=> <View style={{borderWidth:2, borderColor:'black'}}>
            <Text style={{fontSize:25}}> ID: {item.id}</Text>
            <Text style={{fontSize:25}}>Name: {item.name}</Text>
            <Text style={{fontSize:25}}>Age: {item.age}</Text>
            <Text style={{fontSize:25}}>Email: {item.email}</Text>    
            </View>) : null
        }
    </ScrollView>
  )
}

export default ApiDisplay