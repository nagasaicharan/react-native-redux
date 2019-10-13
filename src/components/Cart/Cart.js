import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Util from "../Utils/Util";
import { connect } from "react-redux";
import store from "../Utils/Redux/Store";
import { actionTypes } from "../Utils/Redux/Reducers/CartReducer";
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
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Cart" />
        <FlatList
          data={this.props.cart}
          renderItem={this.renderCatlog}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          extraData={this.props.cart}
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
        <View style={styles.viewPayNowButton}>
          <ReduxButton title="Pay Now" onPress={() => {}} />
        </View>
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
