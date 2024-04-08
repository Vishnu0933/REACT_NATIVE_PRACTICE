import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const List = () => {
    const users= [
        { 
            id: 1,
            name: 'Vishnu',
        },
        { 
            id: 2,
            name: 'Mahi',
        },
        { 
            id: 3,
            name: 'Anil',
        },
        { 
            id: 4,
            name: 'Pratap',
        },
        { 
            id: 10,
            name: 'Sangam',
        },
    ]
  return (
    <View>
        <Text style={{fontSize: 30, 
            textAlign: 'center'}}> List with flat list component</Text>
            <FlatList data={users}
            renderItem={({item})=> <Text style={styles.item}>{item.name}</Text>}
            keyExtractor={item=> item.id} />
    </View>
  )
}

const styles = StyleSheet.create(
    { item:{
        fontSize: 20,
        color: 'blue',
        padding:10,
        backgroundColor:'orange',
        borderColor:'black',
        borderWidth:1,
        margin:10,
        borderRadius: 12,
    }

})
export default List