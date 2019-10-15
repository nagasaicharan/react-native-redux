export const FETCH_PAYMENT_PENDING = "FETCH_PAYMENT_PENDING";
export const FETCH_PAYMENT_SUCCESS = "FETCH_PAYMENT_SUCCESS";
export const FETCH_PAYMENT_ERROR = "FETCH_PAYMENT_ERROR";

export function fetchPaymentPending() {
  return {
    type: FETCH_PAYMENT_PENDING
  };
}

export function fetchPaymentSuccess(payment) {
  return {
    type: FETCH_PAYMENT_SUCCESS,
    payment: payment
  };
}

export function fetchPaymentError(error) {
  return {
    type: FETCH_PAYMENT_ERROR,
    error: error
  };
}
