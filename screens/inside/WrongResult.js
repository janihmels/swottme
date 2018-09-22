import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Video from "react-native-video";
// --------------------------------------------------------------
import Button from "../../components/Button";
// -----------------------------------------------------------------------------
import britishflag from './media/britishflag.png';
import chineseflag from './media/chineseflag.png';
// --------------------------------------------------------------
import { iDidNotKnow } from '../../redux/items/actions';
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
  },
  playpause: {
    width: 33,
    height: 33,
    marginLeft: 8
  }
});



class WrongResult extends Component {

  constructor(props) {
    super(props); 
    
    this.player = null;
    const { previousItem } = props.items;
    const ver = 999*Math.random();
    const uri = `https://storage.googleapis.com/swottme/Mp4s/${previousItem.clip}?ver=${ver}`;

    this.state = {
      hasLoaded: false, hasPlayed: false, 
      paused: true, done: false, uri, ready: false
    };
  }  

  nextItem = () => {
    this.setState({done:true});
    const { soco } = this.props.tunes;
    soco.request.play();
    this.props.navigate('doyouknow');
  };

  pauseUnpause = () => {
    this.setState({paused: !this.state.paused});
  };

  startAgain = () => {
    this.player.seek(0);
    this.setState({paused: false, hasPlayed: false});
  }

  onLoad = () => {
    console.log("On Load");
    this.setState({hasLoaded: true})
  };

  onEnd = () => {
    console.log("On End");
    this.setState({hasPlayed: true})
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({paused:false});
      }  
    , 900);
  }

  render() {

    const { previousItem } = this.props.items;
    if(previousItem===null) return null;
    
    console.log(this.state.ready, this.state.uri);

    return (
      <Fragment>
        <WrongBar />
        <View style={{backgroundColor: '#fff', width: '100%', marginTop: 8, marginBottom: 8,
          alignItems: 'center', justifyContent: 'center'}}>
          <Video
            ref = {ref => {this.player = ref}}
            source={{ uri: this.state.uri }} 
            style={{width: '90%', height: 240}} 
            onLoad={this.onLoad}
            onEnd={this.onEnd}
            repeat={false}
            paused={this.state.paused}
          />      

            {
              this.state.hasPlayed ? (
                <TouchableOpacity onPress = {this.startAgain} style={{position: 'absolute', bottom:18, left: 18}}>
                  <Image
                    style={styles.playpause}
                    source = {require('./media/play.png')}
                  />
                </TouchableOpacity>   
              ) : (
                <TouchableOpacity onPress = {this.pauseUnpause} style={{position: 'absolute', bottom:18, left: 18}}>
                {
                  this.state.paused ? (
                    <Image
                      style={styles.playpause}
                      source = {require('./media/play.png')}
                    />
                  ) : (
                    <Image
                      style={styles.playpause}
                      source = {require('./media/pause.png')}
                    />
                  )
                }
                </TouchableOpacity>   
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
      </Fragment>

    );
  }
}
// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ iDidNotKnow, navigate },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
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