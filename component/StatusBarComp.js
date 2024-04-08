import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const StatusBarComp = () => {
  const [showStatusBar, setShowStatusBar] = useState(false);
    const [statusBarStyle, setStatusBarStyle]= useState('default')
  return (
    <View style={{flex:1}}>
        <Text style={{fontSize:30}}> Status Bar in react native</Text>
        <View style={styles.main}>
        <StatusBar
        backgroundColor='orange'
        hidden={showStatusBar}
        barStyle={statusBarStyle} />
        <Button title='Toggle Status Bar' color='pink' 
        onPress={()=>setShowStatusBar(!showStatusBar)}/>
        <Button title='Update Style' 
        onPress={()=>setStatusBarStyle('dark-content')}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent:'center',
  

  },
  })
  export default StatusBarComp