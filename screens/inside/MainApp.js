import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// -------------------------------------------------------------
import Start from "./Start";
import DoYouKnow from "./DoYouKnow";
import PickTheAnswer from "./PickTheAnswer";
import CorrectResult from "./CorrectResult";
import WrongResult from "./WrongResult";
import RewardScreen from "./RewardScreen";
// -------------------------------------------------------------
import LeaderBar from "./LeaderBar";
import StatusBar from "./StatusBar";
// --------------------------------------------------------------
import { initItems, logoPlayed } from "../../redux/items/actions";
// -----------------------------------------------------------------------------



class MainApp extends Component {
  

  render() {
    const { current } = this.props.navigate;

    const inserts = {
      start: <Start />,
      doyouknow: <DoYouKnow />,
      picktheanswer: <PickTheAnswer />,
      correctresult: <CorrectResult />,
      wrongresult: <WrongResult />,
      rewardscreen: <RewardScreen />
    };

    return (
      <View style={{flex:1, backgroundColor: '#fff', paddingTop: 58, paddingBottom: 58, alignItems: 'center', justifyContent: 'center'}}>
        <LeaderBar navigate = { this.props.navigation.navigate } />
        { inserts[current] }
        <StatusBar />
      </View>
    );
  }
}


// --------------------------------------------------------------
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initItems, logoPlayed },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes,
    navigate: state.navigate
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(MainApp);