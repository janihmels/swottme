import React, { Component } from 'react';
import { 
  StyleSheet, Text, View, TouchableHighlight, Alert
} from 'react-native';
import Rating from '../Rating/';

const st = StyleSheet.create({  
  outer: {
    backgroundColor: '#0A384F',
    height: 80,
    borderRadius: 18,
    margin: 8,
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pic: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 70,
    marginLeft: 18,
    marginRight: 8
  },
  who: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  }
});

export default class TeacherStrip extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
    <TouchableHighlight onPress={ () => { navigate('Teacher');}}>
    <View style={st.outer}>
      <View style={st.pic} />
      <View style={st.who}>
        <Text style={{color:'#fff', fontSize:18, marginBottom:8 }}>Willi W.</Text>
        <Rating />
      </View>
      <View style={st.button}>
        <Button content="Pick" onPress={ () => { Alert.alert("Learn this")}} />
      </View>
    </View>
    </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
    tiny: {
      height: 38, width: 80, backgroundColor: '#229DD0', borderRadius: 18,
      alignItems: 'center', justifyContent: 'center'
    }
  });
  
  class Button extends Component {
      render() {
          return (
            <TouchableHighlight
              onPress={this.props.onPress}
            >
              <View style={styles.tiny}>
                <Text style={{fontSize: 18}}>
                  {this.props.content}
                </Text>
              </View>
            </TouchableHighlight>
          );
      }
  }
  
  