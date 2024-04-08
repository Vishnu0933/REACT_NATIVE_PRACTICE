import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const GetApiUses = () => {
    
    const [data, SetData] = useState(undefined)
    const getApiData= async () =>{
        const url='https://jsonplaceholder.typicode.com/posts/1'   
        let result = await fetch(url);
        result = await result.json();
        SetData(result)
    }
    useEffect(()=>{
        getApiData();

    }, [])

  return (
    <View>
        <Text style={{fontSize:30}}> API Call</Text>
        {
            data ? 
            <View>
              <Text style={{fontSize:30}}>Id: {data.id}</Text>
              <Text style={{fontSize:30}}>UserID: {data.userId}</Text>
              <Text style={{fontSize:30}}>Title: {data.title}</Text>
              <Text style={{fontSize:30}}> Body: {data.body}</Text>
            </View> :  null
        }
    </View>
  )
}

export default GetApiUses