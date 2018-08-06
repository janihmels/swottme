import React, { Component } from 'react';
// --------------------------------------------------------------
import Ionicons from '@expo/vector-icons/Ionicons';
// --------------------------------------------------------------

class Logo extends React.Component {
  render() {
    return (
      <Ionicons 
        name="ios-menu" 
        size={38} 
        tintColor="#ccc"
        style={{paddingLeft: 18}}
        onPress={this.props.onPress}
      />
    );
  }
}

export const coverNavOptions = ( { navigation }) => ({
  title: navigation.state.routeName,
  headerLeft: <Logo onPress={ () => { navigation.openDrawer() }} />,
  headerStyle: {
    backgroundColor: '#0A384F'  
  },
  headerTintColor: '#ccc',
  headerBackTitle: null
});

export const subNavOptions = title => (
  {
    title,
    headerStyle: {
      backgroundColor: '#0A384F'  
    },
    headerTintColor: '#ccc' 
  }
);