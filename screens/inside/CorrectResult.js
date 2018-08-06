import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// --------------------------------------------------------------
import Button from "../../components/Button";
import LeaderBar from "./LeaderBar";
import StatusBar from "./StatusBar";
// -----------------------------------------------------------------------------
import pandabear from './media/pandabear.png';
import britishflag from './media/britishflag.png';
import chineseflag from './media/chineseflag.png';
// -----------------------------------------------------------------------------
import { successNext } from '../../redux/items/actions';

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


class CorrectResult extends Component {
  

  nextItem = () => {
    //this.props.successNext();
    const { items } = this.props.items;
    if(items.length) this.props.navigation.navigate('DoYouKnow');
    else {
      const { soco } = this.props.tunes;
      soco.gong.play();
      this.props.navigation.navigate('RewardScreen');
    }
  }


  render() {
    
    const { previousItem } = this.props.items;
    if(previousItem===null) return null;

    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58, alignItems: 'center', justifyContent: 'center'}}>
        <LeaderBar />
        <CorrectBar />
        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={pandabear} />
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
  return bindActionCreators({ successNext },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CorrectResult);

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

