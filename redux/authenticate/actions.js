import { Alert } from "react-native";
import backend from "../../system/backend";
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const signIn = learnerid => {
    return {
      type: "SIGN_IN",
      learnerid
    };
};


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const logOut = ( ) => {
    return {
      type: "LOG_OUT",
      atom
    };
};


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
export const getSecurityCode = (email, navigate) => dispatch => {
  
  backend('users','requestpass', { email })
  .then(
    data => {
      if(data.data.code===null) {
        navigate('SignIn');
        Alert.alert('Email not found');
        return;
      }
      const { code } = data.data;
      console.log("Correct code", code);
      dispatch({
        type: "SET_CODE",
        email, code
      });
      navigate('Enter');
    }
  )
};