const INITIAL_STATE = [];

export const actionTypes = {
  ADD_CART_ITEMS: "ADD_CART_ITEMS",
  CLEAR: "CLEAR",
  CLEAR_CART_ITEM: "CLEAR_CART_ITEM"
};

export default (state = INITIAL_STATE, action) => {
  const catlogData = action.catlogData;
  console.log(catlogData);
  switch (action.type) {
    case actionTypes.ADD_CART_ITEMS:
      const cartItems = catlogData.filter(item => item.id === action.payload);
      return [...state, ...cartItems];
    case actionTypes.CLEAR_CART_ITEM:
      var jsonCartArray = [];
      const latestCartItems = state.filter(item => item.id != action.payload);
      jsonCartArray.push(cartItems);
      return latestCartItems;
    case actionTypes.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
