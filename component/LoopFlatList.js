import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const LoopFlatList = () => {
  const users = [
    {
      id: 1,
      name: 'vishnu',
      email: 'vishnu@gmail.com',
    },
    {
      id: 2,
      name: 'Pranay',
      email: 'pranay234@gmail.com',
    },
    {
      id: 3,
      name: 'vinay',
      email: 'vinay@gmail.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 25}}>Component in Loop with FlatList </Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}></FlatList>
    </View>
  );
};
const UserData = props => {
  const item = props.item;

  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.id}</Text>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'orange',
    flex: 1,
    backgroundColor: 'lightyellow',
    textAlign: 'center',
  },

  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default LoopFlatList;
