import React, { Component } from 'react';
import { 
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  small: {
    height: 38, width: 180, backgroundColor: '#9B9B9B', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  },
  largestd: {
    height: 58, width: 300, backgroundColor: '#D8D8D8', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  },
  tiny: {
    height: 38, width: 80, backgroundColor: '#D8D8D8', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center', marginLeft: 38, marginRight: 38
  },
  regstd: {
    backgroundColor: '#D8D8D8', borderRadius: 8, minHeight: 38,
    marginLeft: 8, marginRight: 8, padding: 3,
    alignItems: 'center', justifyContent: 'center'
  },
  nextitem: {
    backgroundColor: '#D8D8D8', borderRadius: 8, minHeight: 38,
    marginLeft: 8, marginTop: 38, marginRight: 8, paddingTop: 3, paddingBottom: 3, 
    paddingLeft: 98, paddingRight: 98,
    alignItems: 'center', justifyContent: 'center'
  }
});


export default class Button extends Component {
    render() {
        return (
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{marginTop: 18}}
          >
            <View style={styles[this.props.type]}>
              <Text style={{fontSize: 18}}>
                {this.props.content}
              </Text>
            </View>
          </TouchableOpacity>
        );
    }
}

