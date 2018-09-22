import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  Text, View, Image, 
  StyleSheet, TextInput, Alert
} from 'react-native';
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
class Enter extends Component {
  
  constructor(props) {
    super(props);
    this.state={ code: '' };
  }

  changeCode = code => {
    this.setState({code});
  }

  onSubmit = () => {
    if(this.state.code) {
      const { code } = this.props.authenticate;
      console.log(this.state.code, code);
      if(this.state.code != code) {
        this.props.navigation.navigate('SignIn');
        Alert.alert("Incorrect Code Entered");
        return;
      }
      this.props.navigation.navigate('Renew');
    }
  }

  render() {
    const { code } = this.props.authenticate;
    if(code===null) return null;

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
          <Text 
            style={{marginTop:8, marginBottom: 72, color:'white', fontSize: 18}}
          >
            Check your email for the security code
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter security code"
            placeholderTextColor="#ccc"
            value={this.state.code}
            onChangeText={this.changeCode}
            underlineColorAndroid='gray'
          />
          <Button 
              content = 'Submit Code'
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
export default connect(mapStateToProps,mapDispatchToProps)(Enter);