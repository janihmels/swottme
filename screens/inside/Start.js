import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// -------------------------------------------------------------
import { playSound } from "../../system/tunes";
// --------------------------------------------------------------
import Button from "../../components/Button";
import LeaderBar from "./LeaderBar";
import StatusBar from "./StatusBar";
// --------------------------------------------------------------
import { initItems } from "../../redux/items/actions";
// -----------------------------------------------------------------------------
import logo from './media/dragonlogosmall.png';


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
  ballText: {
    width: '100%', height: '100%', textAlign:'center', marginTop: 18,
    fontSize: 33, color: 'white'
  },
  ballTextSub: {
    width: '100%', height: '100%', textAlign:'center', marginTop: 18,
    fontSize: 18, color: 'white'
  }
});



class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {playedtune: false, interval: null};
  }

  componentDidMount() {
    this.props.initItems();
    this.setState({interval: setTimeout(this.checkForTune, 500)});
  }

  checkForTune = () => {
    const { soco } = this.props.tunes;
    if(soco.chinese_logo_with_gong) {
      soco.chinese_logo_with_gong.play();
      clearInterval(this.state.interval);
      this.setState({playedtune: true, interval: null});
    }
  }

  render() {
    const { soco } = this.props.tunes;

    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58}}>
        <LeaderBar />
        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
          <Text style={{fontSize:38, color: '#333'}}>
          My Video Cards
          </Text>
        </View>
        <View style={{backgroundColor: '#fff',
          alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}} >
            <View style={styles.ball}>
              <Text style={styles.ballText}>38</Text>
            </View>
            <View style={styles.ball}>
              <Text style={styles.ballText}>93</Text>
            </View>
          </View>
          <Button 
            type="largestd"
            content="Start Practice"
            onPress={ () => {
              soco.request.play();
              this.props.navigation.navigate('DoYouKnow');
            }}
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
  return bindActionCreators({ initItems },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Start);