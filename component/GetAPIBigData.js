import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'

const GetAPIBigData = () => {
    const [data, setData]= useState([]);

    const getApiData = async () =>{
        const url ='https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useState (()=>{
        getApiData();
    },[]);

    
  return (
    <ScrollView>
        <Text style={{fontSize:30}} > List with API call </Text>
        {
            data.length ?
            data.map((item)=>
            <View style={{padding:10, borderColor:'blue', borderRadius:2}}>
             <Text style={{fontSize:25, backgroundColor:'orange'}} > ID: {item.id} </Text>
             <Text style={{fontSize:20, }} > Title: {item.title} </Text>
             <Text style={{fontSize:20, }} > Body: {item.body} </Text>        
            </View>) : null
        }
    </ScrollView>
  )
}

export default GetAPIBigData