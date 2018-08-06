import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// --------------------------------------------------------------
// --------------------------------------------------------------
class StatusBar extends Component {
  render() {
    let { completedAmount, fullAmount } = this.props.items;
    completedAmount = parseInt(completedAmount);
    fullAmount = parseInt(fullAmount);

    const perc = Math.round(completedAmount/fullAmount*100);
    const percentageString = `${perc}%`;

    return (
      <View style={{backgroundColor: '#960303', position: 'absolute', bottom:0, left: 0, right: 0,
      alignItems: 'center', justifyContent: 'center', height: 58}}>
        <View style={{marginLeft: 18, marginRight:18, marginBottom: 8, marginTop: 8, backgroundColor: '#D8D8D8', height:18, width: '80%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
          <View style={{margin:0, backgroundColor: '#316097', height:18, width: percentageString}} />
        </View>
        <Text style={{color: '#efefef'}}>Remaining: {completedAmount} of {fullAmount}</Text>
      </View>
    )
  }
}
// --------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(StatusBar);