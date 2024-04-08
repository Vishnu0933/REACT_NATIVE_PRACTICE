import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Modal, TextInput} from 'react-native';

const MakeListFromAPI = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    //console.warn(`${url}/${id}`)
    let result = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      console.warn('deleted user');
      getApiData();
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const updateUser = data => {
    setOpenDialog(true);
    setSelectedUser(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>
        {/* <View style={{flex:1}}><Text>{item.email}</Text></View> */}
        <View style={{flex: 1.5}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              {/* <View style={{flex:1}}><Text>{item.email}</Text></View> */}
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={openDialog} transparent={true}>
        <UserModal
          setOpenDialog={setOpenDialog}
          selectedUser={selectedUser}
          getApiData={getApiData}
        />
      </Modal>
    </View>
  );
};

const UserModal = props => {
  console.warn(props.selectedUser);

  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);

  const updateUser = async () => {
    console.warn(props.selectedUser.id);
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      props.getApiData();
      props.setOpenDialog(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <View style={{marginBottom: 15}}>
          <Button title="Update save" color="green" onPress={updateUser} />
        </View>
        <Button title="close" onPress={() => props.setOpenDialog(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange',
    margin: 5,
    padding: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 200,
    marginBottom: 15,
    fontSize: 20,
  },
});
export default MakeListFromAPI;
