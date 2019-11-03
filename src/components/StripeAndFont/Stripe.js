import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getPaymentError,
  getPayment,
  getPaymentPending,
} from '../Utils/Redux/Reducers/paymentReducer';
import Title from '../GlobalComponents/Title';
import Util from '../Utils/Util';
import {PaymentCardTextField} from 'tipsi-stripe';
import makePayment from './Util/makePayment';
import ReduxButton from '../GlobalComponents/ReduxButton';
import Loader from '../Loader/Loader';
import {TextInput} from 'react-native-gesture-handler';
class Stripe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      cardParams: {},
      amount: 0,
    };
  }
  handleFieldParamsChange = (valid, params) => {
    console.log(`
      Valid: ${valid}
      Number: ${params.number || '-'}
      Month: ${params.expMonth || '-'}
      Year: ${params.expYear || '-'}
      CVC: ${params.cvc || '-'}
    `);
    this.setState({
      valid: valid,
      cardParams: params,
    });
  };
  payementCard = () => {
    const {valid, cardParams, amount} = this.state;
    if (valid && amount) {
      this.props.makePayment(amount, cardParams);
    } else {
      Util.showToast('Enter Correct Card Deatils');
    }
  };

  render() {
    console.log('pending', this.props.pending);
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewCard}>
          <Title title="Stripe Payment" />
          <View style={styles.textInput}>
            <TextInput
              onChangeText={amount => {
                this.setState({
                  amount: amount,
                });
              }}
              keyboardType="numeric"
              placeholder="Enter Amount"
            />
          </View>
          <PaymentCardTextField
            ref={ref => {
              this.paymentCardInput = ref;
            }}
            style={styles.field}
            onParamsChange={this.handleFieldParamsChange}
          />
          <ReduxButton
            title="Pay Now"
            style={{marginVertical: 10}}
            onPress={() => {
              this.payementCard();
            }}
          />
          <Loader loading={this.props.pending} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  error: getPaymentError(state.payment),
  payment: getPayment(state.payment),
  pending: getPaymentPending(state.payment),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      makePayment: makePayment,
    },
    dispatch,
  );
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15,
  },

  field: {
    width: '100%',
    color: '#449aeb',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: 'black',
    padding: 5,
    marginVertical: 5,
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stripe);
