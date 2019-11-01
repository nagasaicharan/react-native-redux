const INITIAL_STATE = {};

export const actionTypes = {
  ADD_CATLOG_ITEMS: 'ADD_CATLOG_ITEMS',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATLOG_ITEMS:
      return [...action.payload];
    default:
      return state;
  }
};
