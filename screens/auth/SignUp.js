import React, { Component } from 'react';
import { 
  Text, View, Image, StyleSheet, 
  TextInput, Alert
} from 'react-native';
import md5 from "md5";
// -----------------------------------------------------------------------------
import Button from "../../components/Button";
// -----------------------------------------------------------------------------
import logo from './media/dragonlogosmall.png';

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  input: {
    height: 40, width:330, color: '#efefef',
    marginTop: 4,
    marginBottom: 18,
    fontSize: 18
  },
  highlightView: {
    height: 38, width: 180, backgroundColor: '#F5A623', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  }

});

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      first: '', last: '', phone: '',
      email: '', password: '',
      connecting: false
    };
  }
  changeEmail = email => {
    this.setState({email});
  }
  changePassword = password => {
    this.setState({password});
  }
  changeFirst = first => {
    this.setState({first});
  }
  changeLast = last => {
    this.setState({last});
  }
  changePhone = phone => {
    this.setState({phone});
  }

  onSubmit = () => {
    let { first, last, phone, email, password } = this.state;
    if(first && last && phone && email && password) {
      password = md5(password);
      this.setState({connecting:true});
      const res = 
        backend(
          'users','signup', 
          {first, last, phone, email, password}
        ).then(
          res => {
            this.setState({connecting: false});
            if(res.data.err) {
              if(res.data.err.code===11000) {
                Alert.alert('This email has already been registered');
                return;
              }
              Alert.alert('Problem with Sign Up',res.data.err.code);
            }
            this.props.navigation.navigate('SignIn');  
            Alert.alert("Thank you for registering.");
        }
      );
     
    }
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
            style={{...styles.input, marginTop: 72}}
            placeholder="First Name"
            placeholderTextColor="#ccc"
            value={this.state.first}
            onChangeText={this.changeFirst}
            underlineColorAndroid='gray'
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#ccc"
            value={this.state.last}
            onChangeText={this.changeLast}
            underlineColorAndroid='gray'
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="#ccc"
            value={this.state.phone}
            onChangeText={this.changePhone}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            underlineColorAndroid='gray'
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={this.state.email}
            onChangeText={this.changeEmail}
            autoCapitalize='none'
            keyboardType="email-address"
            textContentType="emailAddress"
            underlineColorAndroid='gray'
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            autoCapitalize='none'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.changePassword}
            underlineColorAndroid='gray'
          />
          <Button 
              content = {
                this.state.connecting ? 'Connecting...' : 'Sign Up'
              }
              onPress = {this.onSubmit}
              type="small"
          />
          <Text 
            style={{marginTop:18, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('SignIn')}}
          >
            Already have an account? Sign in here.
          </Text>

        </View>

      </View>
    );
  }
}