import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const RadioButton = () => {
    const skills = [
        {
            id: 1,
            name:'SQL',

        },
        {
            id: 2,
            name:'HLML',
            
        },
        {
            id: 3,
            name:'CSS',
            
        },
        {
            id: 4,
            name:'React',
            
        },
        {
            id: 5,
            name:'Java',
            
        },
    ];

    const [selectedRadio, setSelectedRadio]= useState('');

  return (
    <View style={{flex:1}}>
       <Text> Radio Button Touchable opacity </Text>
         <View style ={styles.main}>
        {
            skills.map((item, index)=> <TouchableOpacity
            key={index} 
            onPress={()=> setSelectedRadio(item.id)}>
            <View style={styles.radioWrapper}>
             <View style={styles.radio}>
             {selectedRadio == item.id ? <View style={styles.radioBg}></View> : null}
             </View>
             <Text style= {styles.radioText}>{item.name}</Text>
            </View>
         </TouchableOpacity>)
        } 
           
            {/* <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
               <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                {
                    selectedRadio === 2 ? <View style={styles.radioBg}></View> : null
                }
                </View>
                <Text style= {styles.radioText}>Radio 2</Text>
               </View>
            </TouchableOpacity> */}
        </View> 
    </View>
  )
}

const styles= StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    radio:{
        height: 40,
        width:40,
        borderColor: 'orange',
        borderWidth:2,
        borderRadius: 20,
        margin :10,


    },
    radioText:{
        fontSize: 25,
        color:'orange'
    },
    radioWrapper:{
       flexDirection: 'row',
       alignItems: 'center',

    },
    radioBg:{
        backgroundColor:'orange',
        height: 28,
        width: 28,
        borderRadius: 20,
        margin:4,


    }
})

export default RadioButton