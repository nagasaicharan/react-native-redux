import {
  fetchPaymentPending,
  fetchPaymentSuccess,
  fetchPaymentError
} from "../../Utils/Redux/Actions/PaymentActions";
import stripe from "tipsi-stripe";
import Util from "../../Utils/Util";

function fetchPayment(amount, params) {
  return dispatch => {
    dispatch(fetchPaymentPending());
    const paramsCard = {
      // mandatory
      number: params.number,
      expMonth: params.expMonth,
      expYear: params.expYear,
      cvc: params.cvc
    };
    stripe.setOptions({
      publishableKey: "pk_test_AK6shSyNneTqIcSh0PUblTLA00VGiE4cZ0",
      androidPayMode: "test" // Android only
    });
    stripe
      .createTokenWithCard(paramsCard)
      .then(res => {
        const STRIPE_KEY = "sk_test_zIxiI7CqNA2X7xjsfEgrCg3A00IINgd6yg";
        var params = {
          amount: amount,
          source: res.tokenId,
          currency: "usd"
        };
        let formBody = [];
        for (let property in params) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(params[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        var options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${STRIPE_KEY}`
          },
          body: formBody
        };
        fetch("https://api.stripe.com/v1/charges", options)
          .then(response => {
            Util.showToast("Payment Sucess");
            dispatch(fetchPaymentSuccess(response));
          })
          .catch(error => {
            dispatch(fetchPaymentError(error));
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default fetchPayment;
