import React from 'react';
import { 
  createStackNavigator, createDrawerNavigator 
} from "react-navigation";
// --------------------------------------------------------------
import Start from "./screens/inside/Start";
import DoYouKnow from "./screens/inside/DoYouKnow";
import PickTheAnswer from "./screens/inside/PickTheAnswer";
import CorrectResult from "./screens/inside/CorrectResult";
import WrongResult from "./screens/inside/WrongResult";
import RewardScreen from "./screens/inside/RewardScreen";

// ---------------------------------------------------------

// --------------------------------------------------------------
/*
const request = new Sound('request.mp3', Sound.MAIN_BUNDLE, err => { 
  initSound(
    'request', request
  );  
  console.log(err);
})

const flute = new Sound('chinese_logo_with_gong.mp3', Sound.MAIN_BUNDLE, err => { 
  initSound(
    'flute', 
    flute
  );  
})*/


const PlayNav = createStackNavigator(
  { 
    Start: Start,
    DoYouKnow: DoYouKnow,
    PickTheAnswer: PickTheAnswer,
    CorrectResult: CorrectResult,
    WrongResult: WrongResult,
    RewardScreen: RewardScreen
  },{
    headerMode: 'none',
    initialRouteName: 'Start'
  }
  
);


export default Drawer = createDrawerNavigator(
  {
    Tabs: { screen: PlayNav }
  }
);