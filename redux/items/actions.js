
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const initItems = () => {
    return {
      type: "INIT_ITEMS",
    };
};


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