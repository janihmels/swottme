import React, { Component } from 'react';
import { View, Image, TouchableOpacity, AsyncStorage } from 'react-native';



// --------------------------------------------------------------
// --------------------------------------------------------------
export default class LeaderBar extends Component {

  signOut = () => {
    AsyncStorage.removeItem('userid', () => {
      this.props.navigate('AuthApp');  
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#960303', position: 'absolute', top:0, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'flex-end', height: 58}}>
        <TouchableOpacity 
          style = {{ position: 'absolute', top:18, right: 18 }} 
          onPress = { this.signOut }
        >
          <Image source = { require('../../media/sign-out.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}