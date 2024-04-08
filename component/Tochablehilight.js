import React from 'react';
import {View, Text, TouchableHighlight, Button, StyleSheet } from 'react-native';

const Tochablehilight = () => {
  return (
    <View  style={styles.main}>
      <Text style={{fontSize:30, fontWeight:700}} >
        Touchable High light
     </Text>
    
     <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
     </TouchableHighlight>
     <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
     </TouchableHighlight>
     <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Success</Text>
     </TouchableHighlight>
     <TouchableHighlight>
        <Text style={[styles.button, styles.info]}>Info</Text>
     </TouchableHighlight>
     <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
     </TouchableHighlight>
     <Button title='Button'/>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    button:{
        backgroundColor:'#bbb',
        color: '#fff',
        fontSize:24,
        margin: 10,
        padding:10,
        textAlign:'center',
        borderRadius: 12,
        borderColor: 'red',
        elevation:10,
        // borderWidth:2,
        opacity:1,
    },
    success:{
        backgroundColor:'orange'
    },
    primary:{
        backgroundColor:'lightblue'
    },
    info:{
        backgroundColor:'gold'
    },
    error:{
        backgroundColor:'red'
    },
    
})

export default Tochablehilight