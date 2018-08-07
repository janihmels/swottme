import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Video from "react-native-video";
// --------------------------------------------------------------
import Button from "../../components/Button";
import LeaderBar from "./LeaderBar";
import StatusBar from "./StatusBar";
// -----------------------------------------------------------------------------
import britishflag from './media/britishflag.png';
import chineseflag from './media/chineseflag.png';
import clip from './media/clip.mp4';
// --------------------------------------------------------------
import { iDidNotKnow } from '../../redux/items/actions';
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



class WrongResult extends Component {

  constructor(props) {
    super(props); 
    this.state={hasLoaded: false};
  }  

  nextItem = () => {
    this.props.iDidNotKnow();
    this.props.navigation.navigate('DoYouKnow');
  }


  render() {

    const { previousItem } = this.props.items;
    if(previousItem===null) return null;

    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58, alignItems: 'center', justifyContent: 'center'}}>
        <LeaderBar />
        <WrongBar />
        <View style={{backgroundColor: '#fff', marginTop: 8, marginBottom: 8,
          alignItems: 'center', justifyContent: 'center'}}>
          <Video 
            source={
              {uri: 'https://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_1mb.mp4'}
            } 
            style={{width: 320, height: 240}} 
            onLoad={()=>{this.setState({hasLoaded: true})}}
            repeat={true}
          />
          {
            this.state.hasLoaded ? 
              null : (
                <Text style={{fontSize: 38, position: 'absolute', top:30, left: 30, right:0}}>
                  Loading clip...
                </Text>
              )
          }
    
        </View>

        <View style={styles.textItem} >
            <View><Image source={britishflag} style={styles.tinyflag} /></View>
            <Text style={styles.english}>
              {previousItem.english}
            </Text>
        </View>
        <View style={styles.textItem} >
            <View><Image source={chineseflag} style={styles.tinyflag} /></View>
            <Text style={styles.english}>
              {previousItem.chinese}
            </Text>
        </View>

        <View style={{position: 'absolute', bottom:98, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
          <Button 
            type="nextitem" 
            content = "Next" 
            onPress={ this.nextItem }
          />
        </View>

        <StatusBar />
      </View>
    );
  }
}
// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ iDidNotKnow },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(WrongResult);

// --------------------------------------------------------------
// --------------------------------------------------------------
class WrongBar extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'red', position: 'absolute', top:58, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
        <Text style={{fontSize:18, color: 'white'}}>Don't worry - remember it for next time!</Text>
      </View>
    );
  }
}