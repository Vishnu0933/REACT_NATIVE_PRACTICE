import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color: 'darkblue'}}>Student Component</Text>
        <Text style={{fontSize: 20, color: 'orange'}}>
          Student Name: {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Student;
