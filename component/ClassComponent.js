import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Student from './Student';

class ClassComponent extends Component {
   constructor(){
    super();
    this.state ={
        name:'vishnu',
        age: 32,
    }
   }
   updateName =(val)=>{
    this.setState({name:val})
   }

  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color:'darkblue'}}>Class Component React-Native</Text>
        <TextInput placeholder='Enter your name' onChangeText={(text)=> this.updateName(text)}/>
        <Button title='Press Me' />
        <Text style={{fontSize: 20, color:'Grey'}}>
            {this.state.name}
        </Text>
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default ClassComponent;
