const initialState = {
  userid: null, 
  code: null, 
  email: null
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'SIGN_IN':
      return {
        ...state,
        learnerid: action.learnerid
      };
    break;

    // -------------------------------------------------------
    case 'SET_CODE':
      return {
        ...state,
        code: action.code, 
        email: action.email
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
