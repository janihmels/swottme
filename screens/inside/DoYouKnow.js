import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import { iKnew, iDidNotKnow } from "../../redux/items/actions";
// --------------------------------------------------------------
import Button from "../../components/Button";
import LeaderBar from "./LeaderBar";
import StatusBar from "./StatusBar";
// -----------------------------------------------------------------------------
import britishflag from './media/britishflag.png';
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
  }
});


class DoYouKnow extends Component {

  iKnew = () => {
    this.props.navigation.navigate('PickTheAnswer');
  }

  iDidNotKnow = () => {
    this.props.iDidNotKnow();
    const { soco } = this.props.tunes;
    soco.incorrect.play();
    this.props.navigation.navigate('WrongResult');
  }

  render() {
    const { currentItem } = this.props.items;
    if(currentItem===null) return null;
    
    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58, alignItems: 'center', justifyContent: 'center'}}>
        <LeaderBar />
        <Text style={{fontSize:18}}>Do you remember ?</Text>
        <Text style={{fontSize:11, marginTop: 8}}>(Be honest, this is to assist your learning...)</Text>

        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={britishflag} />
        </View>
        <Text style={{fontSize:33, color: '#333', marginBottom: 58, marginLeft: 8, marginRight: 8, textAlign: 'center'}}>
          {currentItem.english}
        </Text>

        <View style={{flexDirection: 'row'}} >
          <Button type="tiny" content = "Yes" onPress={ this.iKnew }/>
          <Button type="tiny" content = "No"  onPress={ this.iDidNotKnow }/>
        </View>

        <StatusBar />
      </View>
    );
  }
}

// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ iKnew, iDidNotKnow },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DoYouKnow);