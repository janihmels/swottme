import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  Text, View, Image, StyleSheet, 
  TextInput, TouchableHighlight
} from 'react-native';
// -------------------------------------------
import { getSecurityCode } from "../../redux/authenticate/actions";
// -------------------------------------------
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
class Reset extends Component {
  constructor(props) {
    super(props);
    this.state={ 
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

  onSubmit = () => {
    if(this.state.email) {
      this.setState({connecting:true});
      this.props.getSecurityCode(
        this.state.email,
        this.props.navigation.navigate
      );
      this.props.navigation.navigate('Enter');  
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
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={this.state.email}
            onChangeText={this.changeEmail}
            underlineColorAndroid='gray'
          />
          <Button 
              content = {
                this.state.connecting ? 'Connecting...' : 'Reset password'
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
  return bindActionCreators({ getSecurityCode },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Reset);