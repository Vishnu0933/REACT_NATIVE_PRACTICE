import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

const PlatformUses = () => {
  return (
    <View style={{flex: 1, fontSize:35}}>
      <Text> Platform: {Platform.OS} </Text>

      <View style={styles.main}>
        {Platform.OS === 'android' ? (
          <View style={{height: 100, width: 100, backgroundColor: 'orange'}}></View>
        ) : (
          <View style={{height: 100, width: 100, backgroundColor: 'green'}}>
          </View>
        )}

        <Text style={styles.text}> text color change </Text>
        <Text style={{fontSize:15}} > {JSON.stringify(Platform)}</Text>
        <Text style={{fontSize:15}} > {JSON.stringify(Platform.constants.Version)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: Platform.OS === 'android' ? 'orange' : 'green',
  },
});

export default PlatformUses;
