import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  Text, View, Image, 
  StyleSheet, TextInput, Alert
} from 'react-native';
import md5 from "md5";
// --------------------------------------------------------------

import Button from "../../components/Button";
import logo from './media/dragonlogosmall.png';

// --------------------------------------------------------------
// --------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  input: {
    height: 50, width:330, color: '#efefef',
    marginTop: 8,
    marginBottom: 33,
    fontSize: 18
  },
  highlightView: {
    height: 38, width: 180, backgroundColor: '#F5A623', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  }

});

// --------------------------------------------------------------
// --------------------------------------------------------------
class Renew extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      password: '', repeatPassword: '',
      connecting: false
    };
  }

  changePassword = password => {
    this.setState({password});
  }

  changeRepeatPassword = repeatPassword => {
    this.setState({repeatPassword});
  }

  onSubmit = () => {
    if(
      this.state.password && 
      ( this.state.password === this.state.repeatPassword )
    ) {
      const password = md5(this.state.password);
      const { email } = this.props.authenticate;
      backend('users','updatepass', {password, email})
      .then(
        () => {
          this.props.navigation.navigate('SignIn');
          Alert.alert("Password has been updated.");
        }
      )
      return;
    }
    Alert.alert("The two passwords must match.");
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: '#fff',
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
        </View>
        <View style={{
          flex: 9, backgroundColor: '#960303',
          alignItems: 'center', justifyContent: 'center'}}
        >
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.changePassword}
            underlineColorAndroid='gray'
            autoCapitalize='none'
          />
        <TextInput
            style={styles.input}
            placeholder="Repeat New Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={this.state.repeatpassword}
            onChangeText={this.changeRepeatPassword}
            underlineColorAndroid='gray'
            autoCapitalize='none'
          />

          <Button 
              content = {
                this.state.connecting ? 'Connecting...' : 'Update password'
              }
              onPress = {this.onSubmit}
              type="small"
          />
          <Text 
            style={{marginTop:38, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('SignIn')}}
          >
            Back to Sign In
          </Text>

        </View>

      </View>
    );
  }
}
// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Renew);