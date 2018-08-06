
const initialState = {
  soco: {}
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'INIT_TUNES':
      console.log(action);
      return {
        soco: {
          ...state.soco,
          [action.tune] : action.thisTune
        }
      };
    break;

    default:
      return state;
  }
}
