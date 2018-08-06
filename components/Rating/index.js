import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Rating extends Component {
    render() {
      return (
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image 
              source={require('./star_filled.png')} 
            />
            <Text style={{color:'#F5A623', lineHeight:38, marginLeft: 3, fontSize:18, fontWeight:'bold'}}> 3.5</Text>
            <Text style={{color:'#fff', lineHeight:38}}> (89)</Text>
          </View>
        )
    }
  }