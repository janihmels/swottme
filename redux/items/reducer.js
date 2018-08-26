const initialState = {
  items:null,
  currentItem: null, previousItem: null,
  pool: null,
  fullAmount: null,
  remainingAmount: null,
  logoPlayed: false
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'INIT_ITEMS':
      var { items, pool } = action;
      if(items===null) return initialState;
      return {
        ...state, items, pool,
        currentItem: items[0],
        fullAmount: items.length,
        remainingAmount: items.length,
        logoPlayed: false
      };
    break;
    // -------------------------------------------------------
      case 'RESET_ITEMS':
        return initialState;
      break;
    // -------------------------------------------------------
    case 'LOGO_PLAYED':
      return {
        ...state, logoPlayed: true
      };
    break;
    // -------------------------------------------------------
    case 'SUCCESS_NEXT':

      var items = [...state.items];
      items.shift();
      var currentItem = items.length ? items[0] : null;
      return {
        ...state,
        items, currentItem,
        remainingAmount: items.length
      };
    break;
    // -------------------------------------------------------
    case 'I_KNEW':

      var items = [...state.items];
      items.shift();
      var previousItem = { ...state.currentItem };
      var currentItem = items.length ? items[0] : null;
      return {
        ...state,
        items, currentItem, previousItem,
        remainingAmount: items.length
      };
    break;
    // -------------------------------------------------------
    case 'I_DID_NOT_KNOW':
      var items = [...state.items];
      var previousItem = { ...state.currentItem };
      var currentItem = items.shift();
      items.push(currentItem);
      var currentItem = items[0];

      return {
        ...state,
        items, currentItem, previousItem,
        remainingAmount: items.length
      };
    break;
  // -------------------------------------------------------
    case 'FAILURE_NEXT':
      
      var items = [...state.items];      
      var currentItem = items.shift();
      items.push(currentItem);
      var currentItem = items[0];

      return {
        ...state,
        items, currentItem,
        remainingAmount: items.length
      };
    break;
  
    // -------------------------------------------------------
    case 'REPORT_SCORE':
      return {
        ...state
      };
      break;

    // -------------------------------------------------------
    default:
      return state;
  }
}
