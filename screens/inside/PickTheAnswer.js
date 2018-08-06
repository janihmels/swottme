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



class PickTheAnswer extends Component {

  iKnew = () => {
    const { soco } = this.props.tunes;
    soco.correct.play();
    this.props.iKnew();
    console.log("Navigating to CorrectResult");
    this.props.navigation.navigate('CorrectResult');
  }

  iDidNotKnow = () => {

  }

  render() {
    const { currentItem, pool  } = this.props.items;
    if(currentItem===null) return null;

    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58, alignItems: 'stretch', justifyContent: 'center'}}>
        <LeaderBar />
        <Text style={{textAlign: 'center', fontSize: 18}}>Do you remember ?</Text>
        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={britishflag} />
        </View>
        <Text style={{fontSize:18, color: '#333', marginBottom: 8, justifyContent: 'center', textAlign: 'center', marginLeft: 8, marginRight: 8}}>
          {currentItem.english}
        </Text>

        <View style={{flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}} >
          {
            pool.map( 
              (string,index) => 
              <Answer 
                key={`answer-key-${index}`} 
                content={string} 
                onPress={ this.iKnew }
              />
            )
          }
        </View>

        <StatusBar />
      </View>
    );
  }
}

class Answer extends Component {
  render() {
    return (
      <Button 
        type="regstd" 
        content = {this.props.content} 
        onPress={this.props.onPress} 
      />
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
export default connect(mapStateToProps,mapDispatchToProps)(PickTheAnswer);