import React, { Component } from 'react';
import { 
  Text, View, Image, StyleSheet, 
  TextInput, Alert 
} from 'react-native';

import md5 from "md5";
// -------------------------------------------
import Button from "../../components/Button";
// -------------------------------------------
import backend from "../../system/backend";
// -------------------------------------------
import logo from './media/newdragonlogo.png';

// -------------------------------------------
// -------------------------------------------
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  input: {
    height: 38, width:330, color: '#efefef',
    borderTopColor: '#960303', 
    borderLeftColor: '#960303', borderRightColor: '#960303',
    borderColor: 'gray', borderWidth: 1,
    marginTop: 8,
    marginBottom: 33,
    fontSize: 18
  },
  highlightView: {
    height: 38, width: 180, backgroundColor: '#F5A623', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  }

});

// -------------------------------------------
// -------------------------------------------

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state={ 
      email: 'jan@lingua.ly', password: '',
      connecting: false,
      message: ''
    };
  }
  changeEmail = email => {
    this.setState({email});
  }
  changePassword = password => {
    this.setState({password});
  }

  onSubmit = () => {
    /*if(this.state.email && this.state.password) {
      this.setState({connecting:true});
      let { email, password } = this.state;
      email = email.toLowerCase();
      password = md5(password);
  
      const res = 
        backend('users','signin', {email, password})
        .then(
        res => {
          if(res.data===null) {
            Alert.alert('Problem logging in. Please check email & password');
            this.setState({connecting: false});
            return;
          }
          this.props.navigation.navigate('InstaTutor');
        }
      );
    }*/
    this.props.navigation.navigate('Start');
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: '#fff',
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
        </View>
        <View style={{
          flex: 3, backgroundColor: '#960303',
          alignItems: 'center', justifyContent: 'center'}}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={this.state.email}
            onChangeText={this.changeEmail}
            autoCapitalize='none'
            autoFocus={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.changePassword}
          />
          <Button 
              content = {
                this.state.connecting ? 'Connecting...' : 'Sign In'
              }
              onPress = {this.onSubmit}
              type="small"
          />
          <Text 
            style={{marginTop:3, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('SignUp')}}
          >
              {this.state.message}
          </Text>
          <Text 
            style={{marginTop:18, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('SignUp')}}
          >
            No account yet? Sign up here
          </Text>
          <Text 
            style={{marginTop:18, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('Reset')}}
          >
            Reset your password
          </Text>
        </View>

      </View>
    );
  }
}