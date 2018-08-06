const initItems = [
  {english: 'BRING, TAKE (TO SOMEWHERE)', chinese: 'DAI' },
  {english: 'THIS', chinese: 'ZHE'},
//    {english: 'PLEASE TAKE ME TO HERE (SHOWS ADDRESS WRITTEN OUT)', chinese: 'QING DAI WO DAO ZHE LI'},
//    {english: 'ASK', chinese: 'WEN'},
//   {english: 'MAY I ASK', chinese: 'QING WEN'},
//    {english: 'WRITE', chinese: 'XIE'}
];

const initialState = {
  items:initItems,
  currentItem: null, previousItem: null,
  pool: [
    'QING DAI WO DAO ZHE LI',
    'ZHE',
    'QING WEN',
    'XIE'
  ],
  fullAmount: 9,
  completedAmount: 3
}

// -------------------------------------------------------
export default function( state = initialState, action ) {
  // -------------------------------------------------------
  switch(action.type) {

    // -------------------------------------------------------
    case 'INIT_ITEMS':
      var items = [...initItems];
      return {
        ...state, items,
        currentItem: items[0],
        fullAmount: items.length,
        completedAmount: items.length
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
        completedAmount: items.length
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
        completedAmount: items.length
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
        completedAmount: items.length
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
        completedAmount: items.length
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
