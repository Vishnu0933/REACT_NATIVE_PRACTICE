import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const UnmountLifeCycle = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 25, color: 'darkblue'}}>
        UseEffect for Unmount component
      </Text>
      <Button title="Toggle " onPress={() => setShow(!show)} />
      {
        show ? <Student /> : null
      }
    </View>
  );
};
const Student = ()=> {
   
 let timer = setInterval(()=>{
    console.warn("TImer called")
 },2000)

   useEffect (()=> { 
    return() => clearInterval(timer);
    })

      return (
        <View>
          <Text style={{fontSize: 25, color: 'darkblue'}}>Student Component hi </Text>
          {/* <Text style={{fontSize: 20, color: 'orange'}}>
            Student Name: {this.props.name}
          </Text> */}
        </View>
      );
    }
  


export default UnmountLifeCycle;
