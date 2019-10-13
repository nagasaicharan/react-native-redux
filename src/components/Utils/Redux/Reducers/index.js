import catlog from "./CatlogReducer";
import cart from "./CartReducer";
import credits from "./CreditsReducer";

export default rootReducer = (state = {}, action) => {
  const catlogData = state.catlog;
  return {
    catlog: catlog(state.catlog, action),
    //to get Catlog data at cart Reducers
    cart: cart(state.cart, { ...action, catlogData }),
    credits: credits(state.credits, action)
  };
};
