import React from 'react'
import { SectionList, Text, View } from 'react-native'

const ForSectionList = () => {
    const users = [
        {
            id:1,
            name:'Vishnu',
            data:['javascript', 'css', 'HTML']
        },
        {
            id:2,
            name:'Mohan',
            data:['PHP', 'JAVA', 'Python']
        },
        {
            id:3,
            name:'Sanjay',
            data:['.Net', 'Angular', 'MongoDB']
        },

    ]
  return (
    <View>
        <Text style={{fontSize:30}}>Section List in React-Native </Text>
        <SectionList 
        sections={users}
        renderItem={({item})=> <Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=> (
            <Text style={{fontSize:20, color:'blue', marginTop:20}}>{name}</Text>
        )}
        />
      
    </View>
  )
}

export default ForSectionList