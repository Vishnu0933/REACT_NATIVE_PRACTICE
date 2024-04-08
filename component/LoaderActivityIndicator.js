import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'

const LoaderActivityIndicator = () => {
    const [show, SetShow] = useState(false);
    const buttonHandler = () =>{
        SetShow(true);
        setTimeout(()=> {
            SetShow(false)
        },3000);

    }
  return (
    <View style={{flex:1}}> 
        <Text style={{fontSize:30, backgroundColor:'orange'}}>
        Loader Activity Indicator
        </Text>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
         <ActivityIndicator color='green' size={100} animating={show}/>
          {show ? <ActivityIndicator color='red' size={100} />: null}  
            <Button title='show Loader' onPress={buttonHandler}/>
        </View>
       

    </View>
  )
}

export default LoaderActivityIndicator