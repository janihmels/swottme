import backend from "../../system/backend";
import { navigate } from "../../redux/steer/actions";

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const initItems = learnerid => dispatch => {
  const initItems = [
    {english: 'BRING, TAKE (TO SOMEWHERE)', chinese: 'nǐ ​hǎo' },
    {english: 'THIS', chinese: 'ZHE'},
  ];
  dispatch({
    type: "RESET_ITEMS"
  });

  backend('vocab','getTen', { learnerid }).then( data => {
    if(data.data) {
      dispatch({
        type: "INIT_ITEMS",
        items: data.data.ten,
        pool: data.data.pool,
        stats: data.data.stats
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


// --------------------------------------------------------------
export const iKnew = (vid, score) => dispatch => {
    backend('vocab','report', { vid, score });
    dispatch({
      type: "I_KNEW"
    });
}

// --------------------------------------------------------------
export const iDidNotKnow = (vid, score) => dispatch => {
  backend('vocab','report', { vid, score });
  dispatch({
    type: "I_DID_NOT_KNOW"
  }); 
}

// --------------------------------------------------------------
export const restartGame = navigate => dispatch => {
  dispatch({
      type: "INIT_ITEMS"
    });
  navigate('DoYouKnow');
}
