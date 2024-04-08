import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, SetDisplay] = useState(false);

  const resetFromData = () => {
    SetDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}> Form </Text>
      <Text style={{fontSize: 20}}> Name </Text>
      <TextInput
        placeholder="Enter User Name"
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={{fontSize: 20}}> Email </Text>
      <TextInput
        placeholder="Enter User Email"
        style={styles.textInput}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{fontSize: 20}}> Password </Text>
      <TextInput
        placeholder="Enter User Password"
        style={styles.textInput}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => SetDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFromData} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>User Name is: {name}</Text>
            <Text style={{fontSize: 20}}>User Email is: {email}</Text>
            <Text style={{fontSize: 20}}>User Password is: {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});
export default Form;
