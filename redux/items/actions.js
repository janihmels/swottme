import backend from "../../system/backend";
import { navigate } from "../../redux/navigate/actions";

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const initItems = () => dispatch => {
  const initItems = [
    {english: 'BRING, TAKE (TO SOMEWHERE)', chinese: 'nǐ ​hǎo' },
    {english: 'THIS', chinese: 'ZHE'},
  ];
  dispatch({
    type: "RESET_ITEMS"
  });

  backend('vocab','getTen', {}).then( data => {
    if(data.data) {
      dispatch({
        type: "INIT_ITEMS",
        items: data.data.ten,
        pool: data.data.pool
      });  
    }
  });
  
  dispatch(navigate('start')); 

};

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const logoPlayed = () => {
  return {
    type: "LOGO_PLAYED"
  }
}

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const reportScore = ( score ) => {
    return {
      type: "REPORT_SCORE",
      score
    };
};

// --------------------------------------------------------------
export const iKnew = () => {
    return {
      type: "I_KNEW"
    };
}

// --------------------------------------------------------------
export const iDidNotKnow = () => {
  return {
    type: "I_DID_NOT_KNOW"
  }
}

// --------------------------------------------------------------
export const restartGame = navigate => dispatch => {
  dispatch({
      type: "INIT_ITEMS"
    });
  navigate('DoYouKnow');
}
