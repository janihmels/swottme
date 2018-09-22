
const initialState = {
  current: 'start'
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'NAVIGATE':
      return {
        ...state, 
        current: action.current
      };
    break;
    
    // -------------------------------------------------------    
    default:
      return state;
  }
}
