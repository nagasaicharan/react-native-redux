const INITIAL_STATE = {
  credits: 0
};

export const actionTypes = {
  ADD_CREDITS: "ADD_CREDITS",
  CLEAR: "CLEAR"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CREDITS:
      return { ...state, credits: state.credits + action.payload };
    default:
      return state;
  }
};
