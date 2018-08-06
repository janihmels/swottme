import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
// --------------------------------------------------------------
import Rating from "../../components/Rating/";
// --------------------------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19232C',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
  });

export default class Teacher extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          position: 'absolute',
          top: 0, left: 0, 
          height: 180, width: '100%'
        }}>
          <Image 
            source={require('./nike.jpg')}
            style= {{flex: 1}}
          />
        </View>
        <View 
          style={{
            width: 180,
            height: 180,
            borderRadius: 180,
            backgroundColor: 'white',
            marginTop: 90
          }}
        />
        <Text style={{fontSize:38, color: 'white', marginTop: 8}}>Willi W.</Text>
        <Rating />
      </View>
    );
  }
}
