import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ShowHideComp = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 25, color: 'darkblue'}}>
        Show / Hide Component
      </Text>
      <Button title="Toggle component" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 25, color: 'darkgreen'}}>User Component</Text>
    </View>
  );
};
export default ShowHideComp;
