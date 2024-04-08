import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const LifeCycleUseEffect = () => {
  const [count, SetCount]= useState(0);
  const [data, setData]= useState(100)
  useEffect(()=>{
    // console.warn(count)
  },[count])
  return (
    <View>
       <Text style={{fontSize: 28}}> Life Cycle with Use Effect hook </Text>
       <Button title='Update Count' onPress={()=>SetCount(count + 1)}/>
       <Text style={{fontSize: 20}}> Updated Count: {count} </Text>
       <Button title='Update Data' onPress={()=>setData(data + 1)}/>
       <Text style={{fontSize: 20}}>Updated Data: {data} </Text>
       <User info = {{count, data}}/>
    </View>
  )
}

const User =(props)=>{

useEffect(() => {
 console.warn('Run this code when count props is updated') 
}, [props.info.count])

useEffect(() => {
  console.warn('Run this code when data props is updated') 
 }, [props.info.data])

  return (
    <View>
       <Text style={{fontSize: 28, color:'orange'}}> User Component </Text>
       <Text style={{fontSize: 20, color:'green'}}> Props count: {props.info.count} </Text>
       <Text style={{fontSize: 20, color:'green'}}> Props data: {props.info.data} </Text>
    </View>
  )
}

export default LifeCycleUseEffect