import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

const ResponsiveUIFlex = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 25, }}>
        Responsive UI with flex  ss
      </Text>
      <View style={styles.box1} >
      <View style={styles.innerBox1}/> 
      <View style={styles.innerBox2}/>
      <View style={styles.innerBox3}/>
      </View>
      <View style={styles.box2}/>
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,

  },
  box1:{
    backgroundColor:'white',
    flex:1,
    flexDirection: 'row',
    
  },
  innerBox1:{
    backgroundColor:'red',
    flex:1,
    margin:5,

  },
  innerBox2:{
    backgroundColor:'blue',
    flex:1,
    margin:5,
  },
  innerBox3:{
    backgroundColor:'yellow',
    flex:1,
    margin:5,
  },
  

  box2:{
    backgroundColor:'pink',
    flex:1
  },
  box3:{
    backgroundColor:'lightblue',
    flex:1
  }
})


export default ResponsiveUIFlex;
