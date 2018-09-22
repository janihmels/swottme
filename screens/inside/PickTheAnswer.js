import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shuffle from "lodash.shuffle";
// --------------------------------------------------------------
import { iKnew, iDidNotKnow } from "../../redux/items/actions";
import { navigate } from "../../redux/steer/actions";
// --------------------------------------------------------------
import Button from "../../components/Button";
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
    const { currentItem } = this.props.items;
    soco.correct.play();
    this.props.iKnew(currentItem._id, 5);
    this.props.navigate('correctresult');
  }

  iDidNotKnow = () => {
    const { soco } = this.props.tunes;
    const { currentItem } = this.props.items;
    soco.incorrect.play();
    this.props.iDidNotKnow(currentItem._id, 2);
    this.props.navigate('wrongresult');
  }

  render() {
    const { currentItem, pool  } = this.props.items;
    if(currentItem===null) return null;

    let minipool = shuffle(
      [ 
        ...shuffle(pool).slice(0,3).map( x => ({...x, isCorrect:false})), 
        {chinese: currentItem.chinese, isCorrect: true}
      ]
    );
    
    return (

      <Fragment>
        <Text style={{textAlign: 'center', fontSize: 18}}>Do you remember ?</Text>
        <View style={{backgroundColor: '#fff', marginTop: 38, marginBottom: 38,
          alignItems: 'center', justifyContent: 'center'}}>
          <Image source={britishflag} />
        </View>
        <Text style={{fontSize:18, color: '#333', marginBottom: 8, justifyContent: 'center', textAlign: 'center', marginLeft: 8, marginRight: 8}}>
          {currentItem.english}
        </Text>

        <View style={{flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', width: '80%'}} >
          {
            minipool.map( 
              (item, index) => 
              <Answer 
                key={`answer-key-${index}`} 
                content={item.chinese}
                onPress={ item.isCorrect ? this.iKnew : this.iDidNotKnow }
              />
            )
          }
        </View>
      </Fragment>

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
  return bindActionCreators({ iKnew, iDidNotKnow, navigate },dispatch);
}
function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
    items: state.items,
    tunes: state.tunes
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(PickTheAnswer);