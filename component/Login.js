import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
export const Login = props => {
  const [name, setName] = useState('');
  const age = 34;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        style={{
          fontSize: 25,
          width: 190,
          borderColor: 'black',
          borderRadius: 1,
        }}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};
