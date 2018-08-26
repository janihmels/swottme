import { combineReducers } from 'redux';
// --------------------------------------------------------------
import authenticateReducer from '../redux/items/reducer';
import itemsReducer from '../redux/items/reducer';
import tunesReducer from '../redux/tunes/reducer';
import navigateReducer from '../redux/navigate/reducer';


// --------------------------------------------------------------
const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  items: itemsReducer,
  tunes: tunesReducer,
  navigate: navigateReducer
});

// --------------------------------------------------------------
export default rootReducer;
