// Capital syntax = DO NOT modify object
const INITIAL_STATE = {
  isSignedIn: null,
};

export default (state = { INITIAL_STATE }, action) => {
  if (action.type === "SIGN_IN") {
    return { ...state, isSignedIn: true };
  }
  if (action.type === "SIGN_OUT") {
    return { ...state, isSignedIn: false };
  } else {
    return state;
  }
};
