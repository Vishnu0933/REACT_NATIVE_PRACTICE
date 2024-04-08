import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'

const FlatListWithAPI = () => {
   const [data, setData]= useState([]);

   const getApiData = async ()=>{
    const url ='https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(url);
        result = await result.json();
        setData(result);
   }
   useEffect(()=>{
    getApiData();
   },[])

  return (
    <View>
        <Text style={{fontSize:30}}> API Call with FlatList</Text>
        {
            data.length?
            <FlatList data={data} renderItem={({item})=> 
            <View style={{padding:10, margin: 5, borderColor:"black", borderWidth:2,}}>
             <Text style={{fontSize:25, backgroundColor:'orange' }}> ID:  {item.id}</Text>
             <Text style={{fontSize:20}}>Title:  {item.title}</Text>
             <Text style={{fontSize:15}}>Body:  {item.body}</Text>     
            </View>}>
            </FlatList>: null
        }
        
    </View>
  )
}

export default FlatListWithAPI