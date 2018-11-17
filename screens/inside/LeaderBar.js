import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';



// --------------------------------------------------------------
// --------------------------------------------------------------
export default class LeaderBar extends Component {

  constructor(props) {
    super(props);
    this.state={interval: null, displayAd: false};
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(
        this.adInAndOut, 9000
      )
    })
  }

  componentWillUnmount() {
    if(this.state.interval) clearInterval(this.state.interval);
  }

  adInAndOut = () => {
    this.setState({displayAd: !this.state.displayAd});
  }

  openBrowserLink = () => {
    Linking.openURL('http://www.swott.me/mandarin');
  }

  render() {
    return (
      <View style={{backgroundColor: '#960303', position: 'absolute', top:0, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
      {
        this.state.displayAd ? (
          <TouchableOpacity onPress={ this.openBrowserLink }>
          <View
            style={{
              flexDirection: 'row', width: '90%', 
              backgroundColor: '#800303', 
              paddingTop: 8, paddingBottom: 8, paddingLeft: 38, paddingRight: 38
            }}
          >
            <Image 
              source={require('./media/dragonlogosmall.png')}  
              style={{width:33, height: 25, marginLeft: 38, marginRight: 38}}
            />
            <Text
              style={{color: '#ccc', fontSize: 18}}
            >
              Tap here to learn even faster
            </Text>
            <Image 
              source={require('./media/dragonlogosmall.png')}  
              style={{width:33, height: 25, marginLeft: 38, marginRight: 38}}
            />
          </View>
          </TouchableOpacity>
        ) : null
      }
      </View>
    );
  }
}