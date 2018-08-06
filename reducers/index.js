import { combineReducers } from 'redux';
// --------------------------------------------------------------
import authenticateReducer from '../redux/items/reducer';
import itemsReducer from '../redux/items/reducer';
import tunesReducer from '../redux/tunes/reducer';

// --------------------------------------------------------------
const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  items: itemsReducer,
  tunes: tunesReducer
});

// --------------------------------------------------------------
export default rootReducer;
