
import Sound from "react-native-sound";
Sound.setCategory('Playback');

const soco = {};

const request = new Sound('request.mp3', Sound.MAIN_BUNDLE, err => { 
    initSound(
      'request', request
    );  
    console.log(err);
  })
  
  const flute = new Sound('chinese_logo_with_gong.mp3', Sound.MAIN_BUNDLE, err => { 
    initSound(
      'flute', 
      flute
    );  
  })
  
export const initSound = (which, sound) => {
    soco[which] = sound;
}

export const playSound = which => {
    soco[which].play();
}
