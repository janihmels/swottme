import React, { Component } from 'react';
import { createSwitchNavigator } from "react-navigation";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// -------------------------------------------------------------
import { initTunes } from "./redux/tunes/actions";
// -------------------------------------------------------------
import reducers from './reducers';
// -------------------------------------------------------------
import MainApp from "./screens/inside/MainApp";
import Start from "./screens/inside/Start";
import AuthApp from "./AuthApp";



// -------------------------------------------------------------
const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(initTunes());

// -------------------------------------------------------------
const MainSwitch =  createSwitchNavigator(
  {
    AuthApp: { screen: AuthApp },
    MainApp: { screen: MainApp }
  },
  { 
    initialRouteName: 'AuthApp'
  }
);


// -------------------------------------------------------------
// -------------------------------------------------------------
export default class App extends Component {
  render() {
    store.dispatch(initTunes)
    return (
      <Provider store={store}>
        <MainSwitch />
      </Provider>
    );
  }
}