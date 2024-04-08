import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Hooks = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'pink'} />
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default Hooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
