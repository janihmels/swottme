import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import Button from "../../components/Button";
// -----------------------------------------------------------------------------
import rewardpic from './media/rewardpic.png';
// -----------------------------------------------------------------------------
import { initItems } from '../../redux/items/actions';
import { navigate } from "../../redux/steer/actions";
// --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  headline: {
    fontSize: 33,
    color: '#efefef'
  },
  sub: {
    marginTop: 18,
    fontSize: 18,
    color: '#ccc'
  },
  insta: {
    marginTop: 38,
  },
  ball: {
    width: 98, height: 98, borderRadius: 80, backgroundColor: '#960303', 
    marginLeft: 33, marginRight: 33, marginBottom: 38
  },
  tinyflag: {
    width: 38, height: 38, margin: 18
  },
  textItem: {
    flexDirection: 'row', 
    minHeight: 58,
    alignItems: 'center',
    marginTop:3, marginBottom: 3
  },
  english: {
    flex: 1, 
    marginLeft: 18,
    fontSize: 18
  }
});


class RewardScreen extends Component {


  pressStart = () => {
    const { learnerid } = this.props.authenticate;
    this.props.initItems(learnerid);
  }


  render() {
    
    const { previousItem } = this.props.items;

    return (

      <Fragment>
        <Text style={{fontSize:38, color: '#333', marginTop: 18, marginLeft: 8, marginRight: 8, textAlign: 'center'}}>
          Congratulations- you completed the mission!
        </Text>

        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={rewardpic} />
        </View>
        <Text style={{fontSize:33, color: '#333', marginBottom: 58, marginLeft: 8, marginRight: 8, textAlign: 'center'}}>
          Keep up the great work!
        </Text>

        <View style={{position: 'absolute', bottom:98, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
          <Button 
            type="nextitem" 
            content = "Awesome" 
            onPress={ this.pressStart }
          />
        </View>
      </Fragment>

    );
  }
}
// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initItems, navigate },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(RewardScreen);

// --------------------------------------------------------------
// --------------------------------------------------------------
class CorrectBar extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'green', position: 'absolute', top:58, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
        <Text style={{fontSize:18, color: 'white'}}>That was correct!</Text>
      </View>
    );
  }
}

