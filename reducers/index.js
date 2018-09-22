import { combineReducers } from 'redux';
// --------------------------------------------------------------
import authenticateReducer from '../redux/authenticate/reducer';
import itemsReducer from '../redux/items/reducer';
import tunesReducer from '../redux/tunes/reducer';
import steerReducer from '../redux/steer/reducer';


// --------------------------------------------------------------
const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  items: itemsReducer,
  tunes: tunesReducer,
  steer: steerReducer
});

// --------------------------------------------------------------
export default rootReducer;
