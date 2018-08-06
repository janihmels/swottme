const initialState = {
  user: null
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'SIGN_IN':
      return {
        ...state
      };
    break;

    // -------------------------------------------------------
    case 'LOG_OUT':
      return {
        ...state
      };
      break;

    // -------------------------------------------------------
    default:
      return state;
  }
}
