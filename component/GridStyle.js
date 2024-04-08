import React from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native'

const GridStyle = () => {
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
        { 
            id: 11,
            name: 'Mayur',
        },
        { 
            id: 13,
            name: 'Pratap',
        },
        { 
            id: 15,
            name: 'Sangam',
        },
        { 
            id: 14,
            name: 'Mayur',
        },
        { 
            id: 5,
            name: 'Sangam',
        },
        { 
            id: 6,
            name: 'Mayur',
        },
        { 
            id: 7,
            name: 'Pratap',
        },
        { 
            id: 8,
            name: 'Sangam',
        },
        { 
            id: 9,
            name: 'Prasha',
        },
    ]
  return (
    <View>
        <Text style={{fontSize: 30, 
            textAlign: 'center'}}> Grid with dynamic data</Text>

<ScrollView style= {{marginBottom:90}}>
            <View style={{flex:1, flexDirection:'row',
             flexWrap:'wrap',
              justifyContent:'space-evenly'}}>
            
            {
                users.map((item)=> <Text style={styles.item}> {item.name} </Text>)
            }
             
            </View>
            </ScrollView>
           
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
        height: 100,
        width: 100,
        textAlignVertical:'center',
        textAlign:'center',
    }

})
export default GridStyle