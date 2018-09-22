import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// -------------------------------------------------------------
import Button from "../../components/Button";
// --------------------------------------------------------------
import { initItems, logoPlayed } from "../../redux/items/actions";
import { navigate } from "../../redux/steer/actions";
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
    marginLeft: 33, marginRight: 33, marginBottom: 8, paddingTop: 8
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

// --------------------------------------------------------------
// --------------------------------------------------------------
class Start extends Component {
  
  // --------------------------------------------------------------
  componentWillReceiveProps(prevProps) {
    const { soco } = this.props.tunes;
    if(soco&&!this.props.items.logoPlayed) {
      if(soco.chinese_logo_with_gong) {
        soco.chinese_logo_with_gong.play();
        this.props.logoPlayed();  
      }
    }
  }
  
  // --------------------------------------------------------------
  render() {
    const { soco } = this.props.tunes;
    const { items, stats } = this.props.items;

    return (
      <Fragment>
        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
          <Text style={{fontSize:38, color: '#333'}}>
          My Video Cards
          </Text>
        </View>
        {
          items!=null ? (
            <View style={{backgroundColor: '#fff',
              alignItems: 'center', justifyContent: 'center'}}
            >
              <View style={{flexDirection: 'row', marginBottom: 38}} >

                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                  <View style={styles.ball}>
                    <Text style={styles.ballText}>{stats.seen}</Text>
                  </View>
                  <Text>Cards Attempted</Text>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                  <View style={styles.ball}>
                    <Text style={styles.ballText}>{stats.mastered}</Text>
                  </View>
                  <Text>Cards Mastered</Text>
                </View>

              
              </View>
              <Button 
                type="largestd"
                content="Start Practice"
                onPress={ () => {
                  soco.request.play();
                  this.props.navigate('doyouknow');
                }}
              />
            </View>  
          ) : (
            <View style={{backgroundColor: '#fff',
            alignItems: 'center', justifyContent: 'center'}}
            >
              <Image source = { require('../../media/waiting.gif')} />
            </View>
          )
        }
      </Fragment>
    );
  }
}


// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initItems, logoPlayed, navigate },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Start);