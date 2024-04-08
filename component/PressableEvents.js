import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PressableEvents = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{flex:1}}>
        <Text style={{fontSize:30}}> Pressable in react native</Text>
        <View style={styles.main}>
        <Pressable
        //onPress={()=>console.warn('On press')}
        onPressIn={()=>console.warn('In press')}
        onPressOut={()=>console.warn('out press')}
        onLongPress={()=>console.warn('Long press')}
        >
        <Text style={styles.textBtn}> On Press</Text>
        </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent:'center',
    
    backgroundColor:'orange',  

  },
  textBtn:{
    fontSize:20,
    backgroundColor:'#fff',
    padding:10,
    margin:20,
    borderRadius:12,
    shadowColor:'black',
    elevation:5,
    textAlign:'center',



  }
  
});

export default PressableEvents;
