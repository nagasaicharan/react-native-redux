import {
  FETCH_PAYMENT_PENDING,
  FETCH_PAYMENT_SUCCESS,
  FETCH_PAYMENT_ERROR
} from "../Actions/PaymentActions";

const initialState = {
  pending: false,
  payment: {},
  error: null
};

export default paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENT_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PAYMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        payment: action.payload
      };
    case FETCH_PAYMENT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const getPayment = state => state.payment;
export const getPaymentPending = state => state.pending;
export const getPaymentError = state => state.error;
