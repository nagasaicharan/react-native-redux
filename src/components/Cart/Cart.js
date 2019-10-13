import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Util from "../Utils/Util";
import { connect } from "react-redux";
import store from "../Utils/Redux/Store";
import { actionTypes } from "../Utils/Redux/Reducers/CartReducer";
import { actionTypes as creditsActionTypes } from "../Utils/Redux/Reducers/CreditsReducer";
import CartItem from "./SubComponent/CartItem";
import { bindActionCreators } from "redux";
import Title from "../GlobalComponents/Title";
import ReduxButton from "../GlobalComponents/ReduxButton";
import CartFooterBillDetails from "./SubComponent/CartFooterBillDetails";
class Cart extends Component {
  clearItemInCart = itemid => {
    store.dispatch({
      type: actionTypes.CLEAR_CART_ITEM,
      payload: itemid
    });
    Util.showToast("Item Removed");
  };
  renderCatlog = ({ item }) => {
    return (
      <CartItem
        cartItem={item}
        cart={this.props.cart}
        onPressRemove={itemid => {
          this.clearItemInCart(itemid);
        }}
      />
    );
  };
  renderFooter = () => {
    return <CartFooterBillDetails cartDetails={this.props.cart} />;
  };
  onPressPayNow = () => {
    const { cart } = this.props;
    var price = 0;
    cart.forEach(item => {
      price = price + item.price;
    });
    store.dispatch({
      type: creditsActionTypes.ADD_CREDITS,
      payload: price
    });
    this.clearCart();
  };
  clearCart = () => {
    store.dispatch({
      type: actionTypes.CLEAR
    });
  };
  renderEmptyComponent = () => {
    return (
      <View style={{ padding: 15, backgroundColor: "grey" }}>
        <Text>No Items in Cart</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Cart" />
        {this.props.cart.length > 0 ? (
          <>
            <FlatList
              data={this.props.cart}
              renderItem={this.renderCatlog}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              extraData={this.props.cart}
              ListFooterComponent={this.renderFooter}
              contentContainerStyle={{ paddingBottom: 40 }}
              ListEmptyComponent={this.renderEmptyComponent}
            />
            <View style={styles.viewPayNowButton}>
              <ReduxButton
                title="Pay Now"
                onPress={() => {
                  this.onPressPayNow();
                }}
              />
            </View>
          </>
        ) : (
          this.renderEmptyComponent()
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
const ActionCreators = Object.assign({}, actionTypes.CLEAR_CART_ITEM);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15
  },
  viewPayNowButton: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "flex-end",
    bottom: 0,
    right: 8
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
