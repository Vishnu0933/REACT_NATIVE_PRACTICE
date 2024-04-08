import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import Exstyles from './style'
const Assi1 = () => {
    const vishnu ='Vishnuaknt Sontakke'
    
    return (
        <View>
            <Text style={{fontSize:25, borderColor:'black', borderWidth:2, borderRadius:50, margin:10}}> Inline Style </Text>
            <Text style={styles.textBox}> Internal Style 1 </Text>
            <Text style={Exstyles.textBox}> External Style 1 </Text>
            <Text style={[Exstyles.textBox2, styles.textBox]}> Ex+Inte Style </Text>
            <Button color="red" title={vishnu} />
        </View>
    );
}

const styles= StyleSheet.create({
    textBox:{
     
        margin:20,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        borderRadius: 150,
        borderColor:'red',
        borderWidth:2,
        height: 150,
        width:150,
       
        

    }
})


export default Assi1