
const initialState = {
  soco: null
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'INIT_TUNES':
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
