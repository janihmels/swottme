
// ---------------------------------------------------------------------------------
import Sound from "react-native-sound";
Sound.setCategory('Playback');
const tunes = ['chinese_logo_with_gong', 'request', 'gong', 'correct', 'incorrect'];

// ---------------------------------------------------------------------------------
export const initTunes = () => dispatch => {

    tunes.forEach( tune => {
      const thisTune = new Sound(`${tune}.mp3`, Sound.MAIN_BUNDLE, err => { 
        dispatch({
          type: "INIT_TUNES",
          tune,
          thisTune
        });
      });  
    })
};