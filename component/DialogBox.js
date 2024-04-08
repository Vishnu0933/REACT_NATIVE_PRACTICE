import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const DialogBox = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{flex:1}}>
      <Text> Modal (DialogBox ) in react native</Text>

      <View style={styles.main}>
        <Modal transparent={true} visible={showModal} animationType="slide">
          <View style={styles.centralView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Modal (DialogBox) opened </Text>
              <Button color='red' title="close Modal" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </Modal>
        <View style={styles.buttonView}>
          <Button color='orange' title="Open Modal" onPress={() => setShowModal(true)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
    
  },
  centralView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default DialogBox;
