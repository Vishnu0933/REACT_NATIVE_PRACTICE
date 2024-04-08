import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CustomeModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30}}> Custome Modal</Text>

      <View style={styles.main}>
        { showModal ?
          <View style={styles.modal}>
            <View style={styles.body}>
              <Text style={{fontSize: 20, paddingBottom: 30}}>
                Custom modal text
              </Text>
              <Button
                title="close"
                color="red"
                onPress={() => setShowModal(false)}
              />
            </View>
          </View>
         : null }
        <Button title="toggle custome modal" onPress= {() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(50,50,50,0.5)',
    padding: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:2,
  },
  body: {
    width: 300,
    height: 300,
    backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 12,
  },
});
export default CustomeModal;
