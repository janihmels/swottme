import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  View, Text, TextInput, Image, KeyboardAvoidingView,
  StyleSheet, AsyncStorage, Alert 
} from 'react-native';
import md5 from "md5";
// -------------------------------------------
import Button from "../../components/Button";
// -------------------------------------------
import { signIn } from "../../redux/authenticate/actions";
import { initItems } from "../../redux/items/actions";
import logo from "./media/newdragonlogo.png";

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
    height: 50, width:330, color: '#efefef',
    marginTop: 8,
    marginBottom: 18,
    fontSize: 18
  },
  highlightView: {
    height: 38, width: 180, backgroundColor: '#F5A623', borderRadius: 18,
    alignItems: 'center', justifyContent: 'center'
  }

});

// -------------------------------------------
// -------------------------------------------

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state={ 
      email: '', password: '',
      connecting: false,
      message: ''
    };
    AsyncStorage.getItem('userid', (err, userid) => {
      if(err) console.log("Err is", err);
      if(userid!=null) this.signIn(userid);
    });
  }

  changeEmail = email => {
    this.setState({email});
  }
  changePassword = password => {
    this.setState({password});
  }

  signIn = userid => {
    console.log("Signing In", userid);
    this.props.signIn(userid);
    this.props.initItems(userid);
    this.props.navigation.navigate('MainApp');
  }

  onSubmit = () => {
    if(this.state.email && this.state.password) {
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
          const userid = res.data._id;
          console.log("Sign In Data", res.data, userid);
          const a = AsyncStorage.setItem('userid', userid, err => {
            console.log("Err is", err);
          }).then(
            () => {
              this.signIn(userid);
            }
          );

        }
      );
    }
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: '#fff',
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
        </View>
        <View style={{
          flex: 5, backgroundColor: '#960303',
          alignItems: 'center', justifyContent: 'center'}}
        >
          <TextInput
            style={{...styles.input, marginTop:38}}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={this.state.email}
            onChangeText={this.changeEmail}
            underlineColorAndroid='gray'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.changePassword}
            underlineColorAndroid='gray'
            autoCapitalize='none'
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
            style={{marginTop:8, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('SignUp')}}
          >
            No account yet? Sign up here
          </Text>
          <Text 
            style={{marginTop:8, color:'white'}}
            onPress = {() => {this.props.navigation.navigate('Reset')}}
          >
            Reset your password
          </Text>
        </View>

      </View>
    );
  }
}

// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initItems, signIn },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);